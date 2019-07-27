var makeRequest = require('basic-browser-request');
var SearchFlickr = require('./search-flickr');
var config = require('./config');
var probable = require('probable');
var callNextTick = require('call-next-tick');
var imageLibraryTableDef = require('./image-library-table-def');
var termTableDefsForLibraries = require('./term-table-defs-for-libraries');

const maxRetries = 5;

var libraryTable = probable.createTableFromSizes(imageLibraryTableDef);

var idsForLibraries = {
  'The British Library': '12403504@N02',
  'US National Archives': 'usnationalarchives',
  'New York Public Library': 'nypl',
  'The Library of Congress': 'library_of_congress',
  'Internet Archive Book Images': '126377022@N07',
  'Texas State Library': 'txstate-library',
  'Archivo Historico': '99115493@N08',
  'National Library of Medicine': 'nlmhmd',
  'Museum of Hartlepool': 'hartlepool_museum',
  NASA: 'nasacommons'
};

var searchFlickr = SearchFlickr({
  flickrAPIKey: config.flickr.key,
  request: makeRequest
});

function getCouncil({ numberOfMembers, retryCount }, done) {
  if (retryCount === undefined) {
    retryCount = 0;
  }

  var library = libraryTable.roll();
  var termTable = probable.createTableFromSizes(
    termTableDefsForLibraries[library]
  );
  var searchTerm = termTable.roll();
  console.log(searchTerm, library, 'retryCount', retryCount);

  searchFlickr(
    {
      term: searchTerm,
      userId: idsForLibraries[library]
    },
    decideOnSearch
  );

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
        } else {
          done(error);
        }
      } else {
        done(error);
      }
    } else {
      pickImage(results);
    }
  }

  function pickImage(searchResults) {
    var councilResults = probable
      .shuffle(searchResults)
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
