var callNextTick = require('call-next-tick');
var probable = require('probable');

function SearchFlickr(createOpts) {
  var flickrAPIKey;
  var request;

  if (createOpts) {
    flickrAPIKey = createOpts.flickrAPIKey;
    request = createOpts.request;    
  }

  return searchFlickr;

  function searchFlickr({term, userId, pageToGet}, done) {
    var reqOpts = {
      method: 'GET',
      url: getFlickrSearchURL(term, userId, pageToGet),
      timeout: 30000,
      json: true
    };

    request(reqOpts, searchDone);

    function searchDone(error, httpResponse, searchResponse) {
      if (error) {
        done(error);
      }
      else if (searchResponse.stat !== 'ok' || searchResponse.photos.photo.length < 1) {
        var findError = new Error('Couldn\'t find image. Status:', searchResponse.stat);
        findError.notFound = true;
        done(findError);
      }
      else if (pageToGet === searchResponse.photos.page) {
        done(null, searchResponse.photos.photo);
      }
      else {
        getFromRandomPage(searchResponse.photos, done);
      }
    }

    function getFromRandomPage(searchResults, done) {
      if (searchResults.pages > 1) {
        var searchOpts = {
          term: term,
          userId: userId,
          pageToGet: probable.rollDie(searchResults.pages)
        };
        callNextTick(searchFlickr, searchOpts, done);
      }
      else {
        done(null, searchResults.photo);
      }
    }
  }

  function getFlickrSearchURL(text, userId, page) {
    var url = 'https://api.flickr.com/services/rest/?' + 
      'method=flickr.photos.search&' +
      'api_key=' + flickrAPIKey + '&' +
      'user_id=' + encodeURIComponent(userId) + '&' +
      'text=' + text + '&' +
      'format=json&nojsoncallback=1';

    if (page) {
      url += '&page=' + page;
    }
    return url;
  }
}

module.exports = SearchFlickr;
