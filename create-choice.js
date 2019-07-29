var randomId = require('idmaker').randomId;
var getCouncil = require('./get-council');
var sb = require('standard-bail')();

function createChoice({ library, searchTerm }, done) {
  getCouncil(
    { numberOfMembers: 1, library, searchTerm, retryCount: 3 },
    sb(passChoice, done)
  );

  function passChoice({ councilResults }) {
    if (!councilResults || councilResults.length < 1) {
      done(
        new Error(
          `No council results for library ${library} and searchTerm "${searchTerm}".`
        )
      );
      return;
    }

    var result = councilResults[0];
    done(null, {
      id: 'choice-' + randomId(4),
      text: '<Click here to edit this choice>',
      presenterImageURL: result.url,
      imageTitle: result.title,
      imageSource: result.source
    });
  }
}

module.exports = createChoice;
