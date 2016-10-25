var makeRequest = require('basic-browser-request');
var SearchFlickr = require('./search-flickr');
var config = require('./config');
var probable = require('probable');
var callNextTick = require('call-next-tick');

const maxRetries = 5;

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

function getCouncil({numberOfMembers, retryCount}, done) {
  if (retryCount === undefined) {
    retryCount = 0;
  }

  var searchTerm = probable.pickFromArray(searchTerms);
  var library = probable.pickFromArray(Object.keys(idsForLibraries));
  console.log(searchTerm, library, 'retryCount', retryCount);

  searchFlickr(searchTerm, idsForLibraries[library], decideOnSearch);

  function decideOnSearch(error, results) {
    // TODO: Fallback images.

    if (error) {
      if (error.notFound || results.length < numberOfMembers) {
        if (retryCount < maxRetries) {
          var opts = {
            numberOfMembers: numberOfMembers,
            retryCount: retryCount + 1
          };
          callNextTick(getCouncil, opts, done);
        }
        else {
          done(error);
        }
      }
      else {
        done(error);
      }
    }
    else {
      pickImage(results);
    }
  }

  function pickImage(searchResults) {
    var councilResults = probable.shuffle(searchResults)
      .slice(0, numberOfMembers)
      .map(searchResultToCouncilResult);
    done(null, councilResults);
  }
}

function searchResultToCouncilResult(result) {
  return {
    url: `https://farm${result.farm}.staticflickr.com/${result.server}/${result.id}_${result.secret}.jpg`,
    title: result.title,
    source: `https://www.flickr.com/photos/${result.owner}/${result.id}`
  };
}

module.exports = getCouncil;
