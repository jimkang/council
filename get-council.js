var makeRequest = require('basic-browser-request');
var SearchFlickr = require('./search-flickr');
var config = require('./config');
var handleError = require('./handle-error');
var sb = require('standard-bail')();
var probable = require('probable');

var idsForLibraries = {
  'The British Library': '12403504@N02',
  'US National Archives': 'usnationalarchives',
  'Museum of Photographic Arts': '61498590@N03',
  'New York Public Library': '3295198@N05',
  'The Library of Congress': 'library_of_congress',
  'Internet Archive Book Images': '126377022@N07'
};

var searchTerms = [
  'face',
  'head',
  'portrait',
  'person',
  'woman',
  'man',
  'animal',
  'bird',
  'child'
];

var searchFlickr = SearchFlickr({
  flickrAPIKey: config.flickr.key,
  request: makeRequest
});

function getCouncil({numberOfMembers}, done) {
  var searchTerm = probable.pickFromArray(searchTerms);
  var library = probable.pickFromArray(Object.keys(idsForLibraries));
  console.log(searchTerm, library);

  searchFlickr(searchTerm, idsForLibraries[library], sb(pickImage, handleError));

  function pickImage(searchResults) {
    var images = probable.shuffle(searchResults)
      .slice(0, numberOfMembers)
      .map(searchResultToMember);
    done(null, images);
  }
}

function searchResultToMember(result) {
  return `https://farm${result.farm}.staticflickr.com/${result.server}/${result.id}_${result.secret}.jpg`;
}

module.exports = getCouncil;
