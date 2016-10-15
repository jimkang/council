function SearchFlickr(createOpts) {
  var flickrAPIKey;
  var request;

  if (createOpts) {
    flickrAPIKey = createOpts.flickrAPIKey;
    request = createOpts.request;    
  }

  return searchFlickr;

  function searchFlickr(term, userId, done) {
    var reqOpts = {
      method: 'GET',
      url: getFlickrSearchURL(term, userId),
      timeout: 30000,
      json: true
    };

    request(reqOpts, searchDone);

    function searchDone(error, httpResponse, searchResponse) {
      if (error) {
        done(error);
      }
      else if (searchResponse.stat !== 'ok' || searchResponse.photos.photo.length < 1) {
        done(new Error('Couldn\'t find image. Status:', searchResponse.stat));
      }
      else {
        done(null, searchResponse.photos.photo);
      }
    }
  }

  function getFlickrSearchURL(text, userId) {
    return 'https://api.flickr.com/services/rest/?' + 
      'method=flickr.photos.search&' +
      'api_key=' + flickrAPIKey + '&' +
      'user_id=' + encodeURIComponent(userId) + '&' +
      'text=' + text + '&' +
      'format=json&nojsoncallback=1&';
  }
}

module.exports = SearchFlickr;
