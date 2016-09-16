// require('longjohn');
var Store = require('../store');
var test = require('tape');
var queue = require('d3-queue').queue;
var assertNoError = require('assert-no-error');

// test('wait', wait);
test('Basic save and get sequence', basicSequenceTest);

function wait(t) {
  window.go = t.end;
  // Call `go()` in the browser console when you're ready to continue.
}

function basicSequenceTest(t) {
  var problemSpecs = [
    {
      id: 'problem-test-1',
      text: 'I have two socks that don\'t match.',
      presenterImageURL: 'http://smidgeo.com/images/smidgeo_on_the_move.png',
      choices: [
        {
          id: 'choice-test-1a',
          text: 'Just wear them.',
          presenterImageURL: 'http://smidgeo.com/images/smidgeo_headshot.jpg'
        },
        {
          id: 'choice-test-1b',
          text: 'Wear only one sock.',
          presenterImageURL: 'http://smidgeo.com/images/smidgeo_headshot.jpg'
        },
        {
          id: 'choice-test-1c',
          text: 'Look through the drawer for a matching sock.',
          presenterImageURL: 'http://smidgeo.com/images/smidgeo_on_the_move.jpg'
        }
      ]
    },
    {
      id: 'problem-test-2',
      text: 'I am hungry, but do not know what to eat.',
      presenterImageURL: 'http://smidgeo.com/images/smidgeo_headshot.png',
      choices: [
        {
          id: 'choice-test-2a',
          text: 'Order pizza.',
          presenterImageURL: 'http://smidgeo.com/images/smidgeo_on_the_move.jpg'
        },
        {
          id: 'choice-test-2b',
          text: 'Have leftovers.',
          presenterImageURL: 'http://smidgeo.com/images/smidgeo_headshot.jpg'
        }
      ]
    }
  ];

  var store = Store();
  var q = queue();
  problemSpecs.forEach(queueStoreProblem);
  q.awaitAll(checkStored);

  function queueStoreProblem(spec) {
    q.defer(store.saveProblem, spec);
  }

  function checkStored(error) {
    assertNoError(t.ok, error, 'No error while storing.');
    var q = queue();
    q.defer(loadIndividually);
    q.defer(loadAll);
    q.awaitAll(t.end);
  }

  function loadIndividually(done) {
    var loadQ = queue(1);
    problemSpecs.forEach(queueLoad);
    loadQ.awaitAll(CheckLoaded('loadProblem individually', done));

    function queueLoad(spec) {
      loadQ.defer(store.loadProblem, spec.id);
    }
  }

  function loadAll(done) {
    store.loadAllProblems(CheckLoaded('loadAllProblems', done));
  }

  function CheckLoaded(loadTestName, done) {
    return checkLoaded;

    function checkLoaded(error, problems) {
      assertNoError(t.ok, error, 'No error while loading ' + loadTestName + '.');
      t.equal(problems.length, problemSpecs.length, 'Correct number of problems loaded.');
      problemSpecs.forEach(checkProblem);
      done();

      function checkProblem(spec, i) {
        t.deepEqual(problems[i], spec, 'Loaded problem is correct.');
      }
    }
  }
}
