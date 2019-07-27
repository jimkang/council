!(function t(e, n, r) {
  function i(s, a) {
    if (!n[s]) {
      if (!e[s]) {
        var u = 'function' == typeof require && require;
        if (!a && u) return u(s, !0);
        if (o) return o(s, !0);
        var c = new Error("Cannot find module '" + s + "'");
        throw ((c.code = 'MODULE_NOT_FOUND'), c);
      }
      var l = (n[s] = { exports: {} });
      e[s][0].call(
        l.exports,
        function(t) {
          var n = e[s][1][t];
          return i(n ? n : t);
        },
        l,
        l.exports,
        t,
        e,
        n,
        r
      );
    }
    return n[s].exports;
  }
  for (
    var o = 'function' == typeof require && require, s = 0;
    s < r.length;
    s++
  )
    i(r[s]);
  return i;
})(
  {
    1: [
      function(t, e, n) {
        'use strict';
        function r(t) {
          function e() {
            return {
              id: 'problem-' + o(4),
              text: 'Here is a problem. <Click to edit this problem.>',
              presenterImageURL: '',
              choices: [
                {
                  id: 'default-choice-a',
                  text: 'You can do this. <Click to edit this choice.>'
                },
                {
                  id: 'default-choice-b',
                  text: 'Or you can do that. <Click to edit this choice.>'
                }
              ]
            };
          }
          var n = t.saveProblem,
            r = t.problemDef,
            s = t.setRoute;
          i({ problem: r ? r : e(), commitChanges: n, setRoute: s });
        }
        var i = t('./render-edit-problem'),
          o = t('idmaker').randomId;
        e.exports = r;
      },
      { './render-edit-problem': 109, idmaker: 40 }
    ],
    2: [
      function(t, e, n) {
        'use strict';
        var r,
          i = t('director'),
          o = t('./render-edit-problem'),
          s = t('./render-display-problem'),
          a = t('./render-list-problems'),
          u = t('./store'),
          c = t('standard-bail')(),
          l = t('./handle-error'),
          h = t('walk-machine'),
          f = t('call-next-tick'),
          p = t('./change-council'),
          d = t('./data/welcome-problem.json');
        !(function() {
          function t() {
            function t(t) {
              !t || t.length < 1
                ? r.saveProblem(d, c(e, l))
                : a({
                    problemsData: t,
                    saveProblem: r.saveProblem,
                    setRoute: g
                  });
            }
            function e() {
              g('/problem/problem-hello');
            }
            r.loadAllProblems(c(t, l));
          }
          function e(t) {
            function e(t, e) {
              var n = 'loadImages';
              t.choices.every(function(t) {
                return t.presenterImageURL;
              }) && (n = 'render'),
                e(null, n);
            }
            function n(t, e) {
              s({ problem: t, commitChanges: r.saveProblem, setRoute: g }),
                f(e);
            }
            var i = {
              start: { work: r.loadProblem, params: [t], next: e },
              loadImages: { work: p, next: 'render' },
              render: { work: n }
            };
            h(i, l);
          }
          function n(t) {
            function e(t) {
              o({ problem: t, commitChanges: r.saveProblem, setRoute: g });
            }
            r.loadProblem(t, c(e, l));
          }
          r = u();
          var y = i.Router({
            '/problem/:id': e,
            '/problem/:id/edit': n,
            '/': t
          });
          y.notfound = t;
          var g = y.setRoute.bind(y);
          y.init('/');
        })();
      },
      {
        './change-council': 3,
        './data/welcome-problem.json': 6,
        './handle-error': 9,
        './render-display-problem': 108,
        './render-edit-problem': 109,
        './render-list-problems': 110,
        './store': 112,
        'call-next-tick': 20,
        director: 34,
        'standard-bail': 99,
        'walk-machine': 106
      }
    ],
    3: [
      function(t, e, n) {
        'use strict';
        function r(t, e) {
          function n(n) {
            for (var r = 0; r < n.length && r < t.choices.length; ++r) {
              var i = t.choices[r],
                o = n[r];
              (i.presenterImageURL = o.url),
                (i.imageTitle = o.title),
                (i.imageSource = o.source);
            }
            e(null, t);
          }
          i({ numberOfMembers: t.choices.length }, o(n, e));
        }
        var i = t('./get-council'),
          o = t('standard-bail')();
        e.exports = r;
      },
      { './get-council': 8, 'standard-bail': 99 }
    ],
    4: [
      function(t, e, n) {
        'use strict';
        e.exports = {
          flickr: {
            key: 'adfa37aedde851a68d289b279001c4cb',
            secret: 'e9b3bb213dac1dd4'
          }
        };
      },
      {}
    ],
    5: [
      function(t, e, n) {
        'use strict';
        function r() {
          return {
            id: 'choice-' + i(4),
            text: '<Click here to edit this choice>'
          };
        }
        var i = t('idmaker').randomId;
        e.exports = r;
      },
      { idmaker: 40 }
    ],
    6: [
      function(t, e, n) {
        e.exports = {
          id: 'problem-hello',
          text: 'What is Council and how do I use it?',
          presenterImageURL: '',
          choices: [
            {
              id: 'default-choice-a',
              text:
                'Council is an app that will put pictures of beings (people and animals, usually) next to text that you write.',
              presenterImageURL:
                'https://farm4.staticflickr.com/3878/14753591776_f70d2cb5ff.jpg',
              imageTitle:
                'Image from page 302 of "Annual report of the Fruit Growers\' Association of Ontario, 1896" (1897)',
              imageSource:
                'https://www.flickr.com/photos/126377022@N07/14753591776'
            },
            {
              id: 'default-choice-b',
              text:
                'You write out your "problem" (or topic) and "choices" (or responses) that go with it. Then, you send it before a council! The council is just images of beings from various public domain image sources, like The British Library and the Library of Congress.',
              presenterImageURL:
                'https://farm3.staticflickr.com/2900/14775359564_4dd237c52b.jpg',
              imageTitle:
                'Image from page 265 of "General physiology of muscles and nerves" (1881)',
              imageSource:
                'https://www.flickr.com/photos/126377022@N07/14775359564'
            },
            {
              id: 'choice-JqXx',
              text:
                "Each choice is presented by a different council member. It's like when NPCs in a video game like Baldur's Gate II or King of Dragon Pass all pipe up with advice for you!",
              presenterImageURL:
                'https://farm6.staticflickr.com/5595/14796483643_3862967b71.jpg',
              imageTitle:
                'Image from page 233 of "Webster\'s practical dictionary; a practical dictionary of the English language giving the correct spelling, pronunciation and definitions of words based on the unabridged dictionary of Noah Webster .." (1910)',
              imageSource:
                'https://www.flickr.com/photos/126377022@N07/14796483643'
            },
            {
              id: 'choice-FAuz',
              text:
                'You can use to talk through things with yourself. Sometimes, just reading your choices back to yourself helps with thinking about a situation. In programming, this is sometimes called "rubber duck debugging" because you can gain insight into a problem by literally explaining your situation to a rubber duck.',
              presenterImageURL:
                'https://farm6.staticflickr.com/5577/14591120358_db886852f6.jpg',
              imageTitle:
                'Image from page 133 of "Sermons by Rev. Sam. P. Jones : as stenographically reported, and delivered in St. Louis, Cincinnati, Chicago, Baltimore, Atlanta, Nashville, Waco and other cities : with a history of his life, by Theodore M. Smith : with sermons b',
              imageSource:
                'https://www.flickr.com/photos/126377022@N07/14591120358'
            },
            {
              id: 'choice-DkKN',
              text:
                'However, it can also apply to questions like "What should I make for dinner?" to "Should I interview for this job?" It\'s also good for exploring ideas that don\'t have a single answer like "Who is the best cat?"',
              presenterImageURL:
                'https://farm6.staticflickr.com/5557/14590058719_51fba67784.jpg',
              imageTitle: 'Image from page 38 of "Animal products;" (1877)',
              imageSource:
                'https://www.flickr.com/photos/126377022@N07/14590058719'
            },
            {
              id: 'choice-mhwk',
              text:
                'Or you can use it to explain things, like this "problem" is doing! Or just put pictures next to pieces of text. It\'s not unlike zombo.com, in that sense.',
              presenterImageURL:
                'https://farm6.staticflickr.com/5584/14589891909_2409a6fa68.jpg',
              imageTitle:
                'Image from page 103 of "Zoological Society bulletin" (1901)',
              imageSource:
                'https://www.flickr.com/photos/126377022@N07/14589891909'
            },
            {
              id: 'choice-hfBm',
              text:
                'To view all of your problems, you can click on "All Problems" at the bottom of every view. To add a new problem, you can click "Add new problem" at the bottom of the All Problems view.',
              presenterImageURL:
                'https://farm3.staticflickr.com/2895/14589890249_71164196f1.jpg',
              imageTitle:
                'Image from page 27 of "Profit and pleasure in goat-keeping; a practical conservative treatise presenting in concrete form the advantages of the modern milch goat, the various breeds, their care and management" (1915)',
              imageSource:
                'https://www.flickr.com/photos/126377022@N07/14589890249'
            },
            {
              id: 'choice-MaHU',
              text:
                'In the editing view, click on the Problem text to edit it, then click outside of it to complete editing. (Later on, you\'ll be able to hit Cmd+Enter to complete.) Click "Add choice" to add a new choice, then click on the choice to edit it. Finally, you can view it with a council by click "Send before a council"!',
              presenterImageURL:
                'https://farm4.staticflickr.com/3901/14777276752_b73f33365a.jpg',
              imageTitle:
                'Image from page 76 of "Christian faith in an age of science" (1903)',
              imageSource:
                'https://www.flickr.com/photos/126377022@N07/14777276752'
            },
            {
              id: 'choice-PBXu',
              text:
                'In the council view, you can click "Change council" to get a new council if you\'d like your stuff presented to you by a fresh council. This may be the funnest part of the app.',
              presenterImageURL:
                'https://farm4.staticflickr.com/3902/14591134640_d91aa251d1.jpg',
              imageTitle:
                'Image from page 542 of "Transactions of the American Philosophical Society .." (1771)',
              imageSource:
                'https://www.flickr.com/photos/126377022@N07/14591134640'
            },
            {
              id: 'choice-pZai',
              text:
                'Your problems are all kept locally in your browser. They are not shared anywhere else.',
              presenterImageURL:
                'https://farm4.staticflickr.com/3885/14774672731_6392180025.jpg',
              imageTitle:
                'Image from page 534 of "Transactions of the American Philosophical Society .." (1771)',
              imageSource:
                'https://www.flickr.com/photos/126377022@N07/14774672731'
            },
            {
              id: 'choice-uhVL',
              text:
                'Have fun and enjoy your councils! Email jimkang@gmail.com or tweet @deathmtn if you have questions.',
              presenterImageURL:
                'https://farm3.staticflickr.com/2940/14774479844_eebe4d5a90.jpg',
              imageTitle: 'Image from page 307 of "Animal products;" (1877)',
              imageSource:
                'https://www.flickr.com/photos/126377022@N07/14774479844'
            }
          ]
        };
      },
      {}
    ],
    7: [
      function(t, e, n) {
        'use strict';
        function r(t) {
          function e(t) {
            var e = 0;
            if (0 === t || t >= r - c) (n[0] < 0 || n[1] < 0) && (e = s);
            else {
              var i = (Math.sin(t / l) * s) / h;
              (e = n[0] < 0 || n[1] < 0 ? s / 2 + i : s / 2 - i),
                (e += (Math.sin(t / 4) * s) / 6),
                0 === o.roll(2)
                  ? (e += o.rollDie(s / 5))
                  : (e -= o.rollDie(s / 5));
            }
            return e;
          }
          var n = t.direction,
            r = t.length,
            s = t.maxThickness;
          0 === n[1]
            ? (u.x0(n[0] < 0 ? s : 0), u.y(i))
            : (u.y0(n[1] < 0 ? s : 0), u.x(i));
          var l = 10 + o.rollDie(4),
            h = 2 + o.roll(2);
          return 0 === n[1] ? u.x1(e) : u.y1(e), u(a(0 + c, r - c, c));
        }
        function i(t) {
          return t;
        }
        var o = t('probable'),
          s = t('d3-shape'),
          a = t('d3-array').range,
          u = s.area();
        u.curve(s.curveLinear);
        var c = 4;
        e.exports = r;
      },
      { 'd3-array': 22, 'd3-shape': 25, probable: 86 }
    ],
    8: [
      function(t, e, n) {
        'use strict';
        function r(t, e) {
          function n(t, n) {
            if (t)
              if (t.notFound || n.length < s)
                if (a < f) {
                  var i = { numberOfMembers: s, retryCount: a + 1 };
                  c(r, i, e);
                } else e(t);
              else e(t);
            else o(n);
          }
          function o(t) {
            var n = u
              .shuffle(t)
              .slice(0, s)
              .map(i);
            e(null, n);
          }
          var s = t.numberOfMembers,
            a = t.retryCount;
          void 0 === a && (a = 0);
          var l = p.roll(),
            g = u.createTableFromSizes(h[l]),
            _ = g.roll();
          console.log(_, l, 'retryCount', a), y({ term: _, userId: d[l] }, n);
        }
        function i(t) {
          return {
            url:
              'https://farm' +
              t.farm +
              '.staticflickr.com/' +
              t.server +
              '/' +
              t.id +
              '_' +
              t.secret +
              '.jpg',
            title: t.title,
            source: 'https://www.flickr.com/photos/' + t.owner + '/' + t.id
          };
        }
        var o = t('basic-browser-request'),
          s = t('./search-flickr'),
          a = t('./config'),
          u = t('probable'),
          c = t('call-next-tick'),
          l = t('./image-library-table-def'),
          h = t('./term-table-defs-for-libraries'),
          f = 5,
          p = u.createTableFromSizes(l),
          d = {
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
          },
          y = s({ flickrAPIKey: a.flickr.key, request: o });
        e.exports = r;
      },
      {
        './config': 4,
        './image-library-table-def': 10,
        './search-flickr': 111,
        './term-table-defs-for-libraries': 113,
        'basic-browser-request': 16,
        'call-next-tick': 20,
        probable: 86
      }
    ],
    9: [
      function(t, e, n) {
        'use strict';
        function r(t) {
          if (t) {
            console.log(t, t.stack);
            var e = '';
            t.name && (e += t.name + ': '),
              (e += t.message),
              t.stack && (e = NaN + t.stack.toString()),
              i(e);
          }
        }
        function i(t) {
          var e = document.getElementById('status-message');
          (e.textContent = t), e.classList.remove('hidden');
        }
        e.exports = r;
      },
      {}
    ],
    10: [
      function(t, e, n) {
        'use strict';
        e.exports = [
          [3, 'The British Library'],
          [2, 'US National Archives'],
          [1, 'New York Public Library'],
          [2, 'The Library of Congress'],
          [3, 'Internet Archive Book Images'],
          [1, 'Texas State Library'],
          [1, 'Archivo Historico'],
          [2, 'National Library of Medicine'],
          [2, 'Museum of Hartlepool'],
          [1, 'NASA']
        ];
      },
      {}
    ],
    11: [
      function(t, e, n) {
        (function(t) {
          function n(t) {
            (this._db = t), (this._operations = []), (this._written = !1);
          }
          (n.prototype._checkWritten = function() {
            if (this._written)
              throw new Error('write() already called on this batch');
          }),
            (n.prototype.put = function(t, e) {
              this._checkWritten();
              var n = this._db._checkKeyValue(t, 'key', this._db._isBuffer);
              if (n) throw n;
              if ((n = this._db._checkKeyValue(e, 'value', this._db._isBuffer)))
                throw n;
              return (
                this._db._isBuffer(t) || (t = String(t)),
                this._db._isBuffer(e) || (e = String(e)),
                'function' == typeof this._put
                  ? this._put(t, e)
                  : this._operations.push({ type: 'put', key: t, value: e }),
                this
              );
            }),
            (n.prototype.del = function(t) {
              this._checkWritten();
              var e = this._db._checkKeyValue(t, 'key', this._db._isBuffer);
              if (e) throw e;
              return (
                this._db._isBuffer(t) || (t = String(t)),
                'function' == typeof this._del
                  ? this._del(t)
                  : this._operations.push({ type: 'del', key: t }),
                this
              );
            }),
            (n.prototype.clear = function() {
              return (
                this._checkWritten(),
                (this._operations = []),
                'function' == typeof this._clear && this._clear(),
                this
              );
            }),
            (n.prototype.write = function(e, n) {
              if (
                (this._checkWritten(),
                'function' == typeof e && (n = e),
                'function' != typeof n)
              )
                throw new Error('write() requires a callback argument');
              return (
                'object' != typeof e && (e = {}),
                (this._written = !0),
                'function' == typeof this._write
                  ? this._write(n)
                  : 'function' == typeof this._db._batch
                  ? this._db._batch(this._operations, e, n)
                  : void t.nextTick(n)
              );
            }),
            (e.exports = n);
        }.call(this, t('_process')));
      },
      { _process: 87 }
    ],
    12: [
      function(t, e, n) {
        (function(t) {
          function n(t) {
            (this.db = t), (this._ended = !1), (this._nexting = !1);
          }
          (n.prototype.next = function(e) {
            var n = this;
            if ('function' != typeof e)
              throw new Error('next() requires a callback argument');
            return n._ended
              ? e(new Error('cannot call next() after end()'))
              : n._nexting
              ? e(
                  new Error(
                    'cannot call next() before previous next() has completed'
                  )
                )
              : ((n._nexting = !0),
                'function' == typeof n._next
                  ? n._next(function() {
                      (n._nexting = !1), e.apply(null, arguments);
                    })
                  : void t.nextTick(function() {
                      (n._nexting = !1), e();
                    }));
          }),
            (n.prototype.end = function(e) {
              if ('function' != typeof e)
                throw new Error('end() requires a callback argument');
              return this._ended
                ? e(new Error('end() already called on iterator'))
                : ((this._ended = !0),
                  'function' == typeof this._end
                    ? this._end(e)
                    : void t.nextTick(e));
            }),
            (e.exports = n);
        }.call(this, t('_process')));
      },
      { _process: 87 }
    ],
    13: [
      function(t, e, n) {
        (function(n, r) {
          function i(t) {
            if (!arguments.length || void 0 === t)
              throw new Error(
                'constructor requires at least a location argument'
              );
            if ('string' != typeof t)
              throw new Error(
                'constructor requires a location string argument'
              );
            this.location = t;
          }
          var o = t('xtend'),
            s = t('./abstract-iterator'),
            a = t('./abstract-chained-batch');
          (i.prototype.open = function(t, e) {
            if (('function' == typeof t && (e = t), 'function' != typeof e))
              throw new Error('open() requires a callback argument');
            return (
              'object' != typeof t && (t = {}),
              'function' == typeof this._open
                ? this._open(t, e)
                : void r.nextTick(e)
            );
          }),
            (i.prototype.close = function(t) {
              if ('function' != typeof t)
                throw new Error('close() requires a callback argument');
              return 'function' == typeof this._close
                ? this._close(t)
                : void r.nextTick(t);
            }),
            (i.prototype.get = function(t, e, n) {
              var i;
              if (('function' == typeof e && (n = e), 'function' != typeof n))
                throw new Error('get() requires a callback argument');
              return (i = this._checkKeyValue(t, 'key', this._isBuffer))
                ? n(i)
                : (this._isBuffer(t) || (t = String(t)),
                  'object' != typeof e && (e = {}),
                  'function' == typeof this._get
                    ? this._get(t, e, n)
                    : void r.nextTick(function() {
                        n(new Error('NotFound'));
                      }));
            }),
            (i.prototype.put = function(t, e, n, i) {
              var o;
              if (('function' == typeof n && (i = n), 'function' != typeof i))
                throw new Error('put() requires a callback argument');
              return (o = this._checkKeyValue(t, 'key', this._isBuffer))
                ? i(o)
                : (o = this._checkKeyValue(e, 'value', this._isBuffer))
                ? i(o)
                : (this._isBuffer(t) || (t = String(t)),
                  this._isBuffer(e) || r.browser || (e = String(e)),
                  'object' != typeof n && (n = {}),
                  'function' == typeof this._put
                    ? this._put(t, e, n, i)
                    : void r.nextTick(i));
            }),
            (i.prototype.del = function(t, e, n) {
              var i;
              if (('function' == typeof e && (n = e), 'function' != typeof n))
                throw new Error('del() requires a callback argument');
              return (i = this._checkKeyValue(t, 'key', this._isBuffer))
                ? n(i)
                : (this._isBuffer(t) || (t = String(t)),
                  'object' != typeof e && (e = {}),
                  'function' == typeof this._del
                    ? this._del(t, e, n)
                    : void r.nextTick(n));
            }),
            (i.prototype.batch = function(t, e, n) {
              if (!arguments.length) return this._chainedBatch();
              if (('function' == typeof e && (n = e), 'function' != typeof n))
                throw new Error('batch(array) requires a callback argument');
              if (!Array.isArray(t))
                return n(new Error('batch(array) requires an array argument'));
              'object' != typeof e && (e = {});
              for (var i, o, s = 0, a = t.length; s < a; s++)
                if (((i = t[s]), 'object' == typeof i)) {
                  if ((o = this._checkKeyValue(i.type, 'type', this._isBuffer)))
                    return n(o);
                  if ((o = this._checkKeyValue(i.key, 'key', this._isBuffer)))
                    return n(o);
                  if (
                    'put' == i.type &&
                    (o = this._checkKeyValue(i.value, 'value', this._isBuffer))
                  )
                    return n(o);
                }
              return 'function' == typeof this._batch
                ? this._batch(t, e, n)
                : void r.nextTick(n);
            }),
            (i.prototype.approximateSize = function(t, e, n) {
              if (
                null == t ||
                null == e ||
                'function' == typeof t ||
                'function' == typeof e
              )
                throw new Error(
                  'approximateSize() requires valid `start`, `end` and `callback` arguments'
                );
              if ('function' != typeof n)
                throw new Error(
                  'approximateSize() requires a callback argument'
                );
              return (
                this._isBuffer(t) || (t = String(t)),
                this._isBuffer(e) || (e = String(e)),
                'function' == typeof this._approximateSize
                  ? this._approximateSize(t, e, n)
                  : void r.nextTick(function() {
                      n(null, 0);
                    })
              );
            }),
            (i.prototype._setupIteratorOptions = function(t) {
              var e = this;
              return (
                (t = o(t)),
                ['start', 'end', 'gt', 'gte', 'lt', 'lte'].forEach(function(n) {
                  t[n] && e._isBuffer(t[n]) && 0 === t[n].length && delete t[n];
                }),
                (t.reverse = !!t.reverse),
                t.reverse && t.lt && (t.start = t.lt),
                t.reverse && t.lte && (t.start = t.lte),
                !t.reverse && t.gt && (t.start = t.gt),
                !t.reverse && t.gte && (t.start = t.gte),
                ((t.reverse && t.lt && !t.lte) ||
                  (!t.reverse && t.gt && !t.gte)) &&
                  (t.exclusiveStart = !0),
                t
              );
            }),
            (i.prototype.iterator = function(t) {
              return (
                'object' != typeof t && (t = {}),
                (t = this._setupIteratorOptions(t)),
                'function' == typeof this._iterator
                  ? this._iterator(t)
                  : new s(this)
              );
            }),
            (i.prototype._chainedBatch = function() {
              return new a(this);
            }),
            (i.prototype._isBuffer = function(t) {
              return n.isBuffer(t);
            }),
            (i.prototype._checkKeyValue = function(t, e) {
              if (null === t || void 0 === t)
                return new Error(e + ' cannot be `null` or `undefined`');
              if (this._isBuffer(t)) {
                if (0 === t.length)
                  return new Error(e + ' cannot be an empty Buffer');
              } else if ('' === String(t))
                return new Error(e + ' cannot be an empty String');
            }),
            (e.exports.AbstractLevelDOWN = i),
            (e.exports.AbstractIterator = s),
            (e.exports.AbstractChainedBatch = a);
        }.call(this, { isBuffer: t('../is-buffer/index.js') }, t('_process')));
      },
      {
        '../is-buffer/index.js': 43,
        './abstract-chained-batch': 11,
        './abstract-iterator': 12,
        _process: 87,
        xtend: 107
      }
    ],
    14: [
      function(t, e, n) {
        function r(t) {
          var e = 'id';
          return (
            t && 'string' == typeof t && (e = t),
            function(t) {
              return t[e];
            }
          );
        }
        'object' == typeof e && 'object' == typeof e.exports && (e.exports = r);
      },
      {}
    ],
    15: [
      function(t, e, n) {
        var r =
          'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
        !(function(t) {
          'use strict';
          function e(t) {
            var e = t.charCodeAt(0);
            return e === s || e === h
              ? 62
              : e === a || e === f
              ? 63
              : e < u
              ? -1
              : e < u + 10
              ? e - u + 26 + 26
              : e < l + 26
              ? e - l
              : e < c + 26
              ? e - c + 26
              : void 0;
          }
          function n(t) {
            function n(t) {
              c[h++] = t;
            }
            var r, i, s, a, u, c;
            if (t.length % 4 > 0)
              throw new Error('Invalid string. Length must be a multiple of 4');
            var l = t.length;
            (u = '=' === t.charAt(l - 2) ? 2 : '=' === t.charAt(l - 1) ? 1 : 0),
              (c = new o((3 * t.length) / 4 - u)),
              (s = u > 0 ? t.length - 4 : t.length);
            var h = 0;
            for (r = 0, i = 0; r < s; r += 4, i += 3)
              (a =
                (e(t.charAt(r)) << 18) |
                (e(t.charAt(r + 1)) << 12) |
                (e(t.charAt(r + 2)) << 6) |
                e(t.charAt(r + 3))),
                n((16711680 & a) >> 16),
                n((65280 & a) >> 8),
                n(255 & a);
            return (
              2 === u
                ? ((a = (e(t.charAt(r)) << 2) | (e(t.charAt(r + 1)) >> 4)),
                  n(255 & a))
                : 1 === u &&
                  ((a =
                    (e(t.charAt(r)) << 10) |
                    (e(t.charAt(r + 1)) << 4) |
                    (e(t.charAt(r + 2)) >> 2)),
                  n((a >> 8) & 255),
                  n(255 & a)),
              c
            );
          }
          function i(t) {
            function e(t) {
              return r.charAt(t);
            }
            function n(t) {
              return (
                e((t >> 18) & 63) +
                e((t >> 12) & 63) +
                e((t >> 6) & 63) +
                e(63 & t)
              );
            }
            var i,
              o,
              s,
              a = t.length % 3,
              u = '';
            for (i = 0, s = t.length - a; i < s; i += 3)
              (o = (t[i] << 16) + (t[i + 1] << 8) + t[i + 2]), (u += n(o));
            switch (a) {
              case 1:
                (o = t[t.length - 1]),
                  (u += e(o >> 2)),
                  (u += e((o << 4) & 63)),
                  (u += '==');
                break;
              case 2:
                (o = (t[t.length - 2] << 8) + t[t.length - 1]),
                  (u += e(o >> 10)),
                  (u += e((o >> 4) & 63)),
                  (u += e((o << 2) & 63)),
                  (u += '=');
            }
            return u;
          }
          var o = 'undefined' != typeof Uint8Array ? Uint8Array : Array,
            s = '+'.charCodeAt(0),
            a = '/'.charCodeAt(0),
            u = '0'.charCodeAt(0),
            c = 'a'.charCodeAt(0),
            l = 'A'.charCodeAt(0),
            h = '-'.charCodeAt(0),
            f = '_'.charCodeAt(0);
          (t.toByteArray = n), (t.fromByteArray = i);
        })('undefined' == typeof n ? (this.base64js = {}) : n);
      },
      {}
    ],
    16: [
      function(t, e, n) {
        function r() {
          function t(t, e) {
            function n() {
              o.abort(), clearTimeout(a), e(new Error('Timed out'));
            }
            function r() {
              3 === o.readyState &&
                (t.onData(this.responseText.substr(u)),
                (u = this.responseText.length));
            }
            var i = t.json || 'application/json' === t.mimeType,
              o = new XMLHttpRequest();
            if (
              (o.open(t.method, t.url),
              t.mimeType && o.setRequestHeader('content-type', t.mimeType),
              i && o.setRequestHeader('accept', 'application/json'),
              'object' == typeof t.headers)
            )
              for (var s in t.headers) o.setRequestHeader(s, t.headers[s]);
            i && 'object' == typeof t.body && (t.body = JSON.stringify(t.body));
            var a = null;
            o.onload = function() {
              if ((clearTimeout(a), this.status >= 200 || this.status < 300)) {
                var t = this.responseText;
                i && (t = JSON.parse(t)), e(null, o.response, t);
              } else
                e(
                  new Error(
                    'Error while making request. XHR status: ' + this.status
                  ),
                  o.response
                );
            };
            var u = 0;
            return (
              t.onData && (o.onreadystatechange = r),
              o.send(t.formData || t.body),
              t.timeLimit > 0 && (a = setTimeout(n, t.timeLimit)),
              { url: t.url, cancelRequest: n }
            );
          }
          return { makeRequest: t };
        }
        if ('object' == typeof e && 'object' == typeof e.exports) {
          var i = r();
          e.exports = i.makeRequest;
        }
      },
      {}
    ],
    17: [function(t, e, n) {}, {}],
    18: [
      function(t, e, n) {
        (function(e) {
          'use strict';
          function r() {
            function t() {}
            try {
              var e = new Uint8Array(1);
              return (
                (e.foo = function() {
                  return 42;
                }),
                (e.constructor = t),
                42 === e.foo() &&
                  e.constructor === t &&
                  'function' == typeof e.subarray &&
                  0 === e.subarray(1, 1).byteLength
              );
            } catch (t) {
              return !1;
            }
          }
          function i() {
            return o.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
          }
          function o(t) {
            return this instanceof o
              ? (o.TYPED_ARRAY_SUPPORT ||
                  ((this.length = 0), (this.parent = void 0)),
                'number' == typeof t
                  ? s(this, t)
                  : 'string' == typeof t
                  ? a(this, t, arguments.length > 1 ? arguments[1] : 'utf8')
                  : u(this, t))
              : arguments.length > 1
              ? new o(t, arguments[1])
              : new o(t);
          }
          function s(t, e) {
            if (((t = y(t, e < 0 ? 0 : 0 | g(e))), !o.TYPED_ARRAY_SUPPORT))
              for (var n = 0; n < e; n++) t[n] = 0;
            return t;
          }
          function a(t, e, n) {
            ('string' == typeof n && '' !== n) || (n = 'utf8');
            var r = 0 | v(e, n);
            return (t = y(t, r)), t.write(e, n), t;
          }
          function u(t, e) {
            if (o.isBuffer(e)) return c(t, e);
            if (G(e)) return l(t, e);
            if (null == e)
              throw new TypeError(
                'must start with number, buffer, array or string'
              );
            if ('undefined' != typeof ArrayBuffer) {
              if (e.buffer instanceof ArrayBuffer) return h(t, e);
              if (e instanceof ArrayBuffer) return f(t, e);
            }
            return e.length ? p(t, e) : d(t, e);
          }
          function c(t, e) {
            var n = 0 | g(e.length);
            return (t = y(t, n)), e.copy(t, 0, 0, n), t;
          }
          function l(t, e) {
            var n = 0 | g(e.length);
            t = y(t, n);
            for (var r = 0; r < n; r += 1) t[r] = 255 & e[r];
            return t;
          }
          function h(t, e) {
            var n = 0 | g(e.length);
            t = y(t, n);
            for (var r = 0; r < n; r += 1) t[r] = 255 & e[r];
            return t;
          }
          function f(t, e) {
            return (
              o.TYPED_ARRAY_SUPPORT
                ? (e.byteLength, (t = o._augment(new Uint8Array(e))))
                : (t = h(t, new Uint8Array(e))),
              t
            );
          }
          function p(t, e) {
            var n = 0 | g(e.length);
            t = y(t, n);
            for (var r = 0; r < n; r += 1) t[r] = 255 & e[r];
            return t;
          }
          function d(t, e) {
            var n,
              r = 0;
            'Buffer' === e.type &&
              G(e.data) &&
              ((n = e.data), (r = 0 | g(n.length))),
              (t = y(t, r));
            for (var i = 0; i < r; i += 1) t[i] = 255 & n[i];
            return t;
          }
          function y(t, e) {
            o.TYPED_ARRAY_SUPPORT
              ? ((t = o._augment(new Uint8Array(e))),
                (t.__proto__ = o.prototype))
              : ((t.length = e), (t._isBuffer = !0));
            var n = 0 !== e && e <= o.poolSize >>> 1;
            return n && (t.parent = Z), t;
          }
          function g(t) {
            if (t >= i())
              throw new RangeError(
                'Attempt to allocate Buffer larger than maximum size: 0x' +
                  i().toString(16) +
                  ' bytes'
              );
            return 0 | t;
          }
          function _(t, e) {
            if (!(this instanceof _)) return new _(t, e);
            var n = new o(t, e);
            return delete n.parent, n;
          }
          function v(t, e) {
            'string' != typeof t && (t = '' + t);
            var n = t.length;
            if (0 === n) return 0;
            for (var r = !1; ; )
              switch (e) {
                case 'ascii':
                case 'binary':
                case 'raw':
                case 'raws':
                  return n;
                case 'utf8':
                case 'utf-8':
                  return F(t).length;
                case 'ucs2':
                case 'ucs-2':
                case 'utf16le':
                case 'utf-16le':
                  return 2 * n;
                case 'hex':
                  return n >>> 1;
                case 'base64':
                  return K(t).length;
                default:
                  if (r) return F(t).length;
                  (e = ('' + e).toLowerCase()), (r = !0);
              }
          }
          function m(t, e, n) {
            var r = !1;
            if (
              ((e = 0 | e),
              (n = void 0 === n || n === 1 / 0 ? this.length : 0 | n),
              t || (t = 'utf8'),
              e < 0 && (e = 0),
              n > this.length && (n = this.length),
              n <= e)
            )
              return '';
            for (;;)
              switch (t) {
                case 'hex':
                  return M(this, e, n);
                case 'utf8':
                case 'utf-8':
                  return T(this, e, n);
                case 'ascii':
                  return R(this, e, n);
                case 'binary':
                  return N(this, e, n);
                case 'base64':
                  return A(this, e, n);
                case 'ucs2':
                case 'ucs-2':
                case 'utf16le':
                case 'utf-16le':
                  return B(this, e, n);
                default:
                  if (r) throw new TypeError('Unknown encoding: ' + t);
                  (t = (t + '').toLowerCase()), (r = !0);
              }
          }
          function b(t, e, n, r) {
            n = Number(n) || 0;
            var i = t.length - n;
            r ? ((r = Number(r)), r > i && (r = i)) : (r = i);
            var o = e.length;
            if (o % 2 !== 0) throw new Error('Invalid hex string');
            r > o / 2 && (r = o / 2);
            for (var s = 0; s < r; s++) {
              var a = parseInt(e.substr(2 * s, 2), 16);
              if (isNaN(a)) throw new Error('Invalid hex string');
              t[n + s] = a;
            }
            return s;
          }
          function w(t, e, n, r) {
            return H(F(e, t.length - n), t, n, r);
          }
          function x(t, e, n, r) {
            return H(Y(e), t, n, r);
          }
          function E(t, e, n, r) {
            return x(t, e, n, r);
          }
          function k(t, e, n, r) {
            return H(K(e), t, n, r);
          }
          function S(t, e, n, r) {
            return H(V(e, t.length - n), t, n, r);
          }
          function A(t, e, n) {
            return 0 === e && n === t.length
              ? J.fromByteArray(t)
              : J.fromByteArray(t.slice(e, n));
          }
          function T(t, e, n) {
            n = Math.min(t.length, n);
            for (var r = [], i = e; i < n; ) {
              var o = t[i],
                s = null,
                a = o > 239 ? 4 : o > 223 ? 3 : o > 191 ? 2 : 1;
              if (i + a <= n) {
                var u, c, l, h;
                switch (a) {
                  case 1:
                    o < 128 && (s = o);
                    break;
                  case 2:
                    (u = t[i + 1]),
                      128 === (192 & u) &&
                        ((h = ((31 & o) << 6) | (63 & u)), h > 127 && (s = h));
                    break;
                  case 3:
                    (u = t[i + 1]),
                      (c = t[i + 2]),
                      128 === (192 & u) &&
                        128 === (192 & c) &&
                        ((h = ((15 & o) << 12) | ((63 & u) << 6) | (63 & c)),
                        h > 2047 && (h < 55296 || h > 57343) && (s = h));
                    break;
                  case 4:
                    (u = t[i + 1]),
                      (c = t[i + 2]),
                      (l = t[i + 3]),
                      128 === (192 & u) &&
                        128 === (192 & c) &&
                        128 === (192 & l) &&
                        ((h =
                          ((15 & o) << 18) |
                          ((63 & u) << 12) |
                          ((63 & c) << 6) |
                          (63 & l)),
                        h > 65535 && h < 1114112 && (s = h));
                }
              }
              null === s
                ? ((s = 65533), (a = 1))
                : s > 65535 &&
                  ((s -= 65536),
                  r.push(((s >>> 10) & 1023) | 55296),
                  (s = 56320 | (1023 & s))),
                r.push(s),
                (i += a);
            }
            return j(r);
          }
          function j(t) {
            var e = t.length;
            if (e <= $) return String.fromCharCode.apply(String, t);
            for (var n = '', r = 0; r < e; )
              n += String.fromCharCode.apply(String, t.slice(r, (r += $)));
            return n;
          }
          function R(t, e, n) {
            var r = '';
            n = Math.min(t.length, n);
            for (var i = e; i < n; i++) r += String.fromCharCode(127 & t[i]);
            return r;
          }
          function N(t, e, n) {
            var r = '';
            n = Math.min(t.length, n);
            for (var i = e; i < n; i++) r += String.fromCharCode(t[i]);
            return r;
          }
          function M(t, e, n) {
            var r = t.length;
            (!e || e < 0) && (e = 0), (!n || n < 0 || n > r) && (n = r);
            for (var i = '', o = e; o < n; o++) i += z(t[o]);
            return i;
          }
          function B(t, e, n) {
            for (var r = t.slice(e, n), i = '', o = 0; o < r.length; o += 2)
              i += String.fromCharCode(r[o] + 256 * r[o + 1]);
            return i;
          }
          function O(t, e, n) {
            if (t % 1 !== 0 || t < 0)
              throw new RangeError('offset is not uint');
            if (t + e > n)
              throw new RangeError('Trying to access beyond buffer length');
          }
          function I(t, e, n, r, i, s) {
            if (!o.isBuffer(t))
              throw new TypeError('buffer must be a Buffer instance');
            if (e > i || e < s) throw new RangeError('value is out of bounds');
            if (n + r > t.length) throw new RangeError('index out of range');
          }
          function L(t, e, n, r) {
            e < 0 && (e = 65535 + e + 1);
            for (var i = 0, o = Math.min(t.length - n, 2); i < o; i++)
              t[n + i] =
                (e & (255 << (8 * (r ? i : 1 - i)))) >>> (8 * (r ? i : 1 - i));
          }
          function P(t, e, n, r) {
            e < 0 && (e = 4294967295 + e + 1);
            for (var i = 0, o = Math.min(t.length - n, 4); i < o; i++)
              t[n + i] = (e >>> (8 * (r ? i : 3 - i))) & 255;
          }
          function D(t, e, n, r, i, o) {
            if (e > i || e < o) throw new RangeError('value is out of bounds');
            if (n + r > t.length) throw new RangeError('index out of range');
            if (n < 0) throw new RangeError('index out of range');
          }
          function C(t, e, n, r, i) {
            return (
              i || D(t, e, n, 4, 3.4028234663852886e38, -3.4028234663852886e38),
              X.write(t, e, n, r, 23, 4),
              n + 4
            );
          }
          function U(t, e, n, r, i) {
            return (
              i ||
                D(t, e, n, 8, 1.7976931348623157e308, -1.7976931348623157e308),
              X.write(t, e, n, r, 52, 8),
              n + 8
            );
          }
          function q(t) {
            if (((t = W(t).replace(tt, '')), t.length < 2)) return '';
            for (; t.length % 4 !== 0; ) t += '=';
            return t;
          }
          function W(t) {
            return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, '');
          }
          function z(t) {
            return t < 16 ? '0' + t.toString(16) : t.toString(16);
          }
          function F(t, e) {
            e = e || 1 / 0;
            for (var n, r = t.length, i = null, o = [], s = 0; s < r; s++) {
              if (((n = t.charCodeAt(s)), n > 55295 && n < 57344)) {
                if (!i) {
                  if (n > 56319) {
                    (e -= 3) > -1 && o.push(239, 191, 189);
                    continue;
                  }
                  if (s + 1 === r) {
                    (e -= 3) > -1 && o.push(239, 191, 189);
                    continue;
                  }
                  i = n;
                  continue;
                }
                if (n < 56320) {
                  (e -= 3) > -1 && o.push(239, 191, 189), (i = n);
                  continue;
                }
                n = (((i - 55296) << 10) | (n - 56320)) + 65536;
              } else i && (e -= 3) > -1 && o.push(239, 191, 189);
              if (((i = null), n < 128)) {
                if ((e -= 1) < 0) break;
                o.push(n);
              } else if (n < 2048) {
                if ((e -= 2) < 0) break;
                o.push((n >> 6) | 192, (63 & n) | 128);
              } else if (n < 65536) {
                if ((e -= 3) < 0) break;
                o.push((n >> 12) | 224, ((n >> 6) & 63) | 128, (63 & n) | 128);
              } else {
                if (!(n < 1114112)) throw new Error('Invalid code point');
                if ((e -= 4) < 0) break;
                o.push(
                  (n >> 18) | 240,
                  ((n >> 12) & 63) | 128,
                  ((n >> 6) & 63) | 128,
                  (63 & n) | 128
                );
              }
            }
            return o;
          }
          function Y(t) {
            for (var e = [], n = 0; n < t.length; n++)
              e.push(255 & t.charCodeAt(n));
            return e;
          }
          function V(t, e) {
            for (
              var n, r, i, o = [], s = 0;
              s < t.length && !((e -= 2) < 0);
              s++
            )
              (n = t.charCodeAt(s)),
                (r = n >> 8),
                (i = n % 256),
                o.push(i),
                o.push(r);
            return o;
          }
          function K(t) {
            return J.toByteArray(q(t));
          }
          function H(t, e, n, r) {
            for (var i = 0; i < r && !(i + n >= e.length || i >= t.length); i++)
              e[i + n] = t[i];
            return i;
          }
          var J = t('base64-js'),
            X = t('ieee754'),
            G = t('isarray');
          (n.Buffer = o),
            (n.SlowBuffer = _),
            (n.INSPECT_MAX_BYTES = 50),
            (o.poolSize = 8192);
          var Z = {};
          (o.TYPED_ARRAY_SUPPORT =
            void 0 !== e.TYPED_ARRAY_SUPPORT ? e.TYPED_ARRAY_SUPPORT : r()),
            o.TYPED_ARRAY_SUPPORT
              ? ((o.prototype.__proto__ = Uint8Array.prototype),
                (o.__proto__ = Uint8Array))
              : ((o.prototype.length = void 0), (o.prototype.parent = void 0)),
            (o.isBuffer = function(t) {
              return !(null == t || !t._isBuffer);
            }),
            (o.compare = function(t, e) {
              if (!o.isBuffer(t) || !o.isBuffer(e))
                throw new TypeError('Arguments must be Buffers');
              if (t === e) return 0;
              for (
                var n = t.length, r = e.length, i = 0, s = Math.min(n, r);
                i < s && t[i] === e[i];

              )
                ++i;
              return (
                i !== s && ((n = t[i]), (r = e[i])), n < r ? -1 : r < n ? 1 : 0
              );
            }),
            (o.isEncoding = function(t) {
              switch (String(t).toLowerCase()) {
                case 'hex':
                case 'utf8':
                case 'utf-8':
                case 'ascii':
                case 'binary':
                case 'base64':
                case 'raw':
                case 'ucs2':
                case 'ucs-2':
                case 'utf16le':
                case 'utf-16le':
                  return !0;
                default:
                  return !1;
              }
            }),
            (o.concat = function(t, e) {
              if (!G(t))
                throw new TypeError(
                  'list argument must be an Array of Buffers.'
                );
              if (0 === t.length) return new o(0);
              var n;
              if (void 0 === e)
                for (e = 0, n = 0; n < t.length; n++) e += t[n].length;
              var r = new o(e),
                i = 0;
              for (n = 0; n < t.length; n++) {
                var s = t[n];
                s.copy(r, i), (i += s.length);
              }
              return r;
            }),
            (o.byteLength = v),
            (o.prototype.toString = function() {
              var t = 0 | this.length;
              return 0 === t
                ? ''
                : 0 === arguments.length
                ? T(this, 0, t)
                : m.apply(this, arguments);
            }),
            (o.prototype.equals = function(t) {
              if (!o.isBuffer(t))
                throw new TypeError('Argument must be a Buffer');
              return this === t || 0 === o.compare(this, t);
            }),
            (o.prototype.inspect = function() {
              var t = '',
                e = n.INSPECT_MAX_BYTES;
              return (
                this.length > 0 &&
                  ((t = this.toString('hex', 0, e)
                    .match(/.{2}/g)
                    .join(' ')),
                  this.length > e && (t += ' ... ')),
                '<Buffer ' + t + '>'
              );
            }),
            (o.prototype.compare = function(t) {
              if (!o.isBuffer(t))
                throw new TypeError('Argument must be a Buffer');
              return this === t ? 0 : o.compare(this, t);
            }),
            (o.prototype.indexOf = function(t, e) {
              function n(t, e, n) {
                for (var r = -1, i = 0; n + i < t.length; i++)
                  if (t[n + i] === e[r === -1 ? 0 : i - r]) {
                    if ((r === -1 && (r = i), i - r + 1 === e.length))
                      return n + r;
                  } else r = -1;
                return -1;
              }
              if (
                (e > 2147483647
                  ? (e = 2147483647)
                  : e < -2147483648 && (e = -2147483648),
                (e >>= 0),
                0 === this.length)
              )
                return -1;
              if (e >= this.length) return -1;
              if (
                (e < 0 && (e = Math.max(this.length + e, 0)),
                'string' == typeof t)
              )
                return 0 === t.length
                  ? -1
                  : String.prototype.indexOf.call(this, t, e);
              if (o.isBuffer(t)) return n(this, t, e);
              if ('number' == typeof t)
                return o.TYPED_ARRAY_SUPPORT &&
                  'function' === Uint8Array.prototype.indexOf
                  ? Uint8Array.prototype.indexOf.call(this, t, e)
                  : n(this, [t], e);
              throw new TypeError('val must be string, number or Buffer');
            }),
            (o.prototype.get = function(t) {
              return (
                console.log(
                  '.get() is deprecated. Access using array indexes instead.'
                ),
                this.readUInt8(t)
              );
            }),
            (o.prototype.set = function(t, e) {
              return (
                console.log(
                  '.set() is deprecated. Access using array indexes instead.'
                ),
                this.writeUInt8(t, e)
              );
            }),
            (o.prototype.write = function(t, e, n, r) {
              if (void 0 === e) (r = 'utf8'), (n = this.length), (e = 0);
              else if (void 0 === n && 'string' == typeof e)
                (r = e), (n = this.length), (e = 0);
              else if (isFinite(e))
                (e = 0 | e),
                  isFinite(n)
                    ? ((n = 0 | n), void 0 === r && (r = 'utf8'))
                    : ((r = n), (n = void 0));
              else {
                var i = r;
                (r = e), (e = 0 | n), (n = i);
              }
              var o = this.length - e;
              if (
                ((void 0 === n || n > o) && (n = o),
                (t.length > 0 && (n < 0 || e < 0)) || e > this.length)
              )
                throw new RangeError('attempt to write outside buffer bounds');
              r || (r = 'utf8');
              for (var s = !1; ; )
                switch (r) {
                  case 'hex':
                    return b(this, t, e, n);
                  case 'utf8':
                  case 'utf-8':
                    return w(this, t, e, n);
                  case 'ascii':
                    return x(this, t, e, n);
                  case 'binary':
                    return E(this, t, e, n);
                  case 'base64':
                    return k(this, t, e, n);
                  case 'ucs2':
                  case 'ucs-2':
                  case 'utf16le':
                  case 'utf-16le':
                    return S(this, t, e, n);
                  default:
                    if (s) throw new TypeError('Unknown encoding: ' + r);
                    (r = ('' + r).toLowerCase()), (s = !0);
                }
            }),
            (o.prototype.toJSON = function() {
              return {
                type: 'Buffer',
                data: Array.prototype.slice.call(this._arr || this, 0)
              };
            });
          var $ = 4096;
          (o.prototype.slice = function(t, e) {
            var n = this.length;
            (t = ~~t),
              (e = void 0 === e ? n : ~~e),
              t < 0 ? ((t += n), t < 0 && (t = 0)) : t > n && (t = n),
              e < 0 ? ((e += n), e < 0 && (e = 0)) : e > n && (e = n),
              e < t && (e = t);
            var r;
            if (o.TYPED_ARRAY_SUPPORT) r = o._augment(this.subarray(t, e));
            else {
              var i = e - t;
              r = new o(i, void 0);
              for (var s = 0; s < i; s++) r[s] = this[s + t];
            }
            return r.length && (r.parent = this.parent || this), r;
          }),
            (o.prototype.readUIntLE = function(t, e, n) {
              (t = 0 | t), (e = 0 | e), n || O(t, e, this.length);
              for (var r = this[t], i = 1, o = 0; ++o < e && (i *= 256); )
                r += this[t + o] * i;
              return r;
            }),
            (o.prototype.readUIntBE = function(t, e, n) {
              (t = 0 | t), (e = 0 | e), n || O(t, e, this.length);
              for (var r = this[t + --e], i = 1; e > 0 && (i *= 256); )
                r += this[t + --e] * i;
              return r;
            }),
            (o.prototype.readUInt8 = function(t, e) {
              return e || O(t, 1, this.length), this[t];
            }),
            (o.prototype.readUInt16LE = function(t, e) {
              return e || O(t, 2, this.length), this[t] | (this[t + 1] << 8);
            }),
            (o.prototype.readUInt16BE = function(t, e) {
              return e || O(t, 2, this.length), (this[t] << 8) | this[t + 1];
            }),
            (o.prototype.readUInt32LE = function(t, e) {
              return (
                e || O(t, 4, this.length),
                (this[t] | (this[t + 1] << 8) | (this[t + 2] << 16)) +
                  16777216 * this[t + 3]
              );
            }),
            (o.prototype.readUInt32BE = function(t, e) {
              return (
                e || O(t, 4, this.length),
                16777216 * this[t] +
                  ((this[t + 1] << 16) | (this[t + 2] << 8) | this[t + 3])
              );
            }),
            (o.prototype.readIntLE = function(t, e, n) {
              (t = 0 | t), (e = 0 | e), n || O(t, e, this.length);
              for (var r = this[t], i = 1, o = 0; ++o < e && (i *= 256); )
                r += this[t + o] * i;
              return (i *= 128), r >= i && (r -= Math.pow(2, 8 * e)), r;
            }),
            (o.prototype.readIntBE = function(t, e, n) {
              (t = 0 | t), (e = 0 | e), n || O(t, e, this.length);
              for (var r = e, i = 1, o = this[t + --r]; r > 0 && (i *= 256); )
                o += this[t + --r] * i;
              return (i *= 128), o >= i && (o -= Math.pow(2, 8 * e)), o;
            }),
            (o.prototype.readInt8 = function(t, e) {
              return (
                e || O(t, 1, this.length),
                128 & this[t] ? (255 - this[t] + 1) * -1 : this[t]
              );
            }),
            (o.prototype.readInt16LE = function(t, e) {
              e || O(t, 2, this.length);
              var n = this[t] | (this[t + 1] << 8);
              return 32768 & n ? 4294901760 | n : n;
            }),
            (o.prototype.readInt16BE = function(t, e) {
              e || O(t, 2, this.length);
              var n = this[t + 1] | (this[t] << 8);
              return 32768 & n ? 4294901760 | n : n;
            }),
            (o.prototype.readInt32LE = function(t, e) {
              return (
                e || O(t, 4, this.length),
                this[t] |
                  (this[t + 1] << 8) |
                  (this[t + 2] << 16) |
                  (this[t + 3] << 24)
              );
            }),
            (o.prototype.readInt32BE = function(t, e) {
              return (
                e || O(t, 4, this.length),
                (this[t] << 24) |
                  (this[t + 1] << 16) |
                  (this[t + 2] << 8) |
                  this[t + 3]
              );
            }),
            (o.prototype.readFloatLE = function(t, e) {
              return e || O(t, 4, this.length), X.read(this, t, !0, 23, 4);
            }),
            (o.prototype.readFloatBE = function(t, e) {
              return e || O(t, 4, this.length), X.read(this, t, !1, 23, 4);
            }),
            (o.prototype.readDoubleLE = function(t, e) {
              return e || O(t, 8, this.length), X.read(this, t, !0, 52, 8);
            }),
            (o.prototype.readDoubleBE = function(t, e) {
              return e || O(t, 8, this.length), X.read(this, t, !1, 52, 8);
            }),
            (o.prototype.writeUIntLE = function(t, e, n, r) {
              (t = +t),
                (e = 0 | e),
                (n = 0 | n),
                r || I(this, t, e, n, Math.pow(2, 8 * n), 0);
              var i = 1,
                o = 0;
              for (this[e] = 255 & t; ++o < n && (i *= 256); )
                this[e + o] = (t / i) & 255;
              return e + n;
            }),
            (o.prototype.writeUIntBE = function(t, e, n, r) {
              (t = +t),
                (e = 0 | e),
                (n = 0 | n),
                r || I(this, t, e, n, Math.pow(2, 8 * n), 0);
              var i = n - 1,
                o = 1;
              for (this[e + i] = 255 & t; --i >= 0 && (o *= 256); )
                this[e + i] = (t / o) & 255;
              return e + n;
            }),
            (o.prototype.writeUInt8 = function(t, e, n) {
              return (
                (t = +t),
                (e = 0 | e),
                n || I(this, t, e, 1, 255, 0),
                o.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)),
                (this[e] = 255 & t),
                e + 1
              );
            }),
            (o.prototype.writeUInt16LE = function(t, e, n) {
              return (
                (t = +t),
                (e = 0 | e),
                n || I(this, t, e, 2, 65535, 0),
                o.TYPED_ARRAY_SUPPORT
                  ? ((this[e] = 255 & t), (this[e + 1] = t >>> 8))
                  : L(this, t, e, !0),
                e + 2
              );
            }),
            (o.prototype.writeUInt16BE = function(t, e, n) {
              return (
                (t = +t),
                (e = 0 | e),
                n || I(this, t, e, 2, 65535, 0),
                o.TYPED_ARRAY_SUPPORT
                  ? ((this[e] = t >>> 8), (this[e + 1] = 255 & t))
                  : L(this, t, e, !1),
                e + 2
              );
            }),
            (o.prototype.writeUInt32LE = function(t, e, n) {
              return (
                (t = +t),
                (e = 0 | e),
                n || I(this, t, e, 4, 4294967295, 0),
                o.TYPED_ARRAY_SUPPORT
                  ? ((this[e + 3] = t >>> 24),
                    (this[e + 2] = t >>> 16),
                    (this[e + 1] = t >>> 8),
                    (this[e] = 255 & t))
                  : P(this, t, e, !0),
                e + 4
              );
            }),
            (o.prototype.writeUInt32BE = function(t, e, n) {
              return (
                (t = +t),
                (e = 0 | e),
                n || I(this, t, e, 4, 4294967295, 0),
                o.TYPED_ARRAY_SUPPORT
                  ? ((this[e] = t >>> 24),
                    (this[e + 1] = t >>> 16),
                    (this[e + 2] = t >>> 8),
                    (this[e + 3] = 255 & t))
                  : P(this, t, e, !1),
                e + 4
              );
            }),
            (o.prototype.writeIntLE = function(t, e, n, r) {
              if (((t = +t), (e = 0 | e), !r)) {
                var i = Math.pow(2, 8 * n - 1);
                I(this, t, e, n, i - 1, -i);
              }
              var o = 0,
                s = 1,
                a = t < 0 ? 1 : 0;
              for (this[e] = 255 & t; ++o < n && (s *= 256); )
                this[e + o] = (((t / s) >> 0) - a) & 255;
              return e + n;
            }),
            (o.prototype.writeIntBE = function(t, e, n, r) {
              if (((t = +t), (e = 0 | e), !r)) {
                var i = Math.pow(2, 8 * n - 1);
                I(this, t, e, n, i - 1, -i);
              }
              var o = n - 1,
                s = 1,
                a = t < 0 ? 1 : 0;
              for (this[e + o] = 255 & t; --o >= 0 && (s *= 256); )
                this[e + o] = (((t / s) >> 0) - a) & 255;
              return e + n;
            }),
            (o.prototype.writeInt8 = function(t, e, n) {
              return (
                (t = +t),
                (e = 0 | e),
                n || I(this, t, e, 1, 127, -128),
                o.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)),
                t < 0 && (t = 255 + t + 1),
                (this[e] = 255 & t),
                e + 1
              );
            }),
            (o.prototype.writeInt16LE = function(t, e, n) {
              return (
                (t = +t),
                (e = 0 | e),
                n || I(this, t, e, 2, 32767, -32768),
                o.TYPED_ARRAY_SUPPORT
                  ? ((this[e] = 255 & t), (this[e + 1] = t >>> 8))
                  : L(this, t, e, !0),
                e + 2
              );
            }),
            (o.prototype.writeInt16BE = function(t, e, n) {
              return (
                (t = +t),
                (e = 0 | e),
                n || I(this, t, e, 2, 32767, -32768),
                o.TYPED_ARRAY_SUPPORT
                  ? ((this[e] = t >>> 8), (this[e + 1] = 255 & t))
                  : L(this, t, e, !1),
                e + 2
              );
            }),
            (o.prototype.writeInt32LE = function(t, e, n) {
              return (
                (t = +t),
                (e = 0 | e),
                n || I(this, t, e, 4, 2147483647, -2147483648),
                o.TYPED_ARRAY_SUPPORT
                  ? ((this[e] = 255 & t),
                    (this[e + 1] = t >>> 8),
                    (this[e + 2] = t >>> 16),
                    (this[e + 3] = t >>> 24))
                  : P(this, t, e, !0),
                e + 4
              );
            }),
            (o.prototype.writeInt32BE = function(t, e, n) {
              return (
                (t = +t),
                (e = 0 | e),
                n || I(this, t, e, 4, 2147483647, -2147483648),
                t < 0 && (t = 4294967295 + t + 1),
                o.TYPED_ARRAY_SUPPORT
                  ? ((this[e] = t >>> 24),
                    (this[e + 1] = t >>> 16),
                    (this[e + 2] = t >>> 8),
                    (this[e + 3] = 255 & t))
                  : P(this, t, e, !1),
                e + 4
              );
            }),
            (o.prototype.writeFloatLE = function(t, e, n) {
              return C(this, t, e, !0, n);
            }),
            (o.prototype.writeFloatBE = function(t, e, n) {
              return C(this, t, e, !1, n);
            }),
            (o.prototype.writeDoubleLE = function(t, e, n) {
              return U(this, t, e, !0, n);
            }),
            (o.prototype.writeDoubleBE = function(t, e, n) {
              return U(this, t, e, !1, n);
            }),
            (o.prototype.copy = function(t, e, n, r) {
              if (
                (n || (n = 0),
                r || 0 === r || (r = this.length),
                e >= t.length && (e = t.length),
                e || (e = 0),
                r > 0 && r < n && (r = n),
                r === n)
              )
                return 0;
              if (0 === t.length || 0 === this.length) return 0;
              if (e < 0) throw new RangeError('targetStart out of bounds');
              if (n < 0 || n >= this.length)
                throw new RangeError('sourceStart out of bounds');
              if (r < 0) throw new RangeError('sourceEnd out of bounds');
              r > this.length && (r = this.length),
                t.length - e < r - n && (r = t.length - e + n);
              var i,
                s = r - n;
              if (this === t && n < e && e < r)
                for (i = s - 1; i >= 0; i--) t[i + e] = this[i + n];
              else if (s < 1e3 || !o.TYPED_ARRAY_SUPPORT)
                for (i = 0; i < s; i++) t[i + e] = this[i + n];
              else t._set(this.subarray(n, n + s), e);
              return s;
            }),
            (o.prototype.fill = function(t, e, n) {
              if ((t || (t = 0), e || (e = 0), n || (n = this.length), n < e))
                throw new RangeError('end < start');
              if (n !== e && 0 !== this.length) {
                if (e < 0 || e >= this.length)
                  throw new RangeError('start out of bounds');
                if (n < 0 || n > this.length)
                  throw new RangeError('end out of bounds');
                var r;
                if ('number' == typeof t) for (r = e; r < n; r++) this[r] = t;
                else {
                  var i = F(t.toString()),
                    o = i.length;
                  for (r = e; r < n; r++) this[r] = i[r % o];
                }
                return this;
              }
            }),
            (o.prototype.toArrayBuffer = function() {
              if ('undefined' != typeof Uint8Array) {
                if (o.TYPED_ARRAY_SUPPORT) return new o(this).buffer;
                for (
                  var t = new Uint8Array(this.length), e = 0, n = t.length;
                  e < n;
                  e += 1
                )
                  t[e] = this[e];
                return t.buffer;
              }
              throw new TypeError(
                'Buffer.toArrayBuffer not supported in this browser'
              );
            });
          var Q = o.prototype;
          o._augment = function(t) {
            return (
              (t.constructor = o),
              (t._isBuffer = !0),
              (t._set = t.set),
              (t.get = Q.get),
              (t.set = Q.set),
              (t.write = Q.write),
              (t.toString = Q.toString),
              (t.toLocaleString = Q.toString),
              (t.toJSON = Q.toJSON),
              (t.equals = Q.equals),
              (t.compare = Q.compare),
              (t.indexOf = Q.indexOf),
              (t.copy = Q.copy),
              (t.slice = Q.slice),
              (t.readUIntLE = Q.readUIntLE),
              (t.readUIntBE = Q.readUIntBE),
              (t.readUInt8 = Q.readUInt8),
              (t.readUInt16LE = Q.readUInt16LE),
              (t.readUInt16BE = Q.readUInt16BE),
              (t.readUInt32LE = Q.readUInt32LE),
              (t.readUInt32BE = Q.readUInt32BE),
              (t.readIntLE = Q.readIntLE),
              (t.readIntBE = Q.readIntBE),
              (t.readInt8 = Q.readInt8),
              (t.readInt16LE = Q.readInt16LE),
              (t.readInt16BE = Q.readInt16BE),
              (t.readInt32LE = Q.readInt32LE),
              (t.readInt32BE = Q.readInt32BE),
              (t.readFloatLE = Q.readFloatLE),
              (t.readFloatBE = Q.readFloatBE),
              (t.readDoubleLE = Q.readDoubleLE),
              (t.readDoubleBE = Q.readDoubleBE),
              (t.writeUInt8 = Q.writeUInt8),
              (t.writeUIntLE = Q.writeUIntLE),
              (t.writeUIntBE = Q.writeUIntBE),
              (t.writeUInt16LE = Q.writeUInt16LE),
              (t.writeUInt16BE = Q.writeUInt16BE),
              (t.writeUInt32LE = Q.writeUInt32LE),
              (t.writeUInt32BE = Q.writeUInt32BE),
              (t.writeIntLE = Q.writeIntLE),
              (t.writeIntBE = Q.writeIntBE),
              (t.writeInt8 = Q.writeInt8),
              (t.writeInt16LE = Q.writeInt16LE),
              (t.writeInt16BE = Q.writeInt16BE),
              (t.writeInt32LE = Q.writeInt32LE),
              (t.writeInt32BE = Q.writeInt32BE),
              (t.writeFloatLE = Q.writeFloatLE),
              (t.writeFloatBE = Q.writeFloatBE),
              (t.writeDoubleLE = Q.writeDoubleLE),
              (t.writeDoubleBE = Q.writeDoubleBE),
              (t.fill = Q.fill),
              (t.inspect = Q.inspect),
              (t.toArrayBuffer = Q.toArrayBuffer),
              t
            );
          };
          var tt = /[^+\/0-9A-Za-z-_]/g;
        }.call(
          this,
          'undefined' != typeof global
            ? global
            : 'undefined' != typeof self
            ? self
            : 'undefined' != typeof window
            ? window
            : {}
        ));
      },
      { 'base64-js': 15, ieee754: 41, isarray: 19 }
    ],
    19: [
      function(t, e, n) {
        var r = {}.toString;
        e.exports =
          Array.isArray ||
          function(t) {
            return '[object Array]' == r.call(t);
          };
      },
      {}
    ],
    20: [
      function(t, e, n) {
        (function(t) {
          function n(t) {
            var e = Array.prototype.slice.call(arguments, 1);
            return function() {
              t.apply(t, e);
            };
          }
          function r() {
            var e = n.apply(null, Array.prototype.slice.call(arguments, 0));
            t.nextTick(e);
          }
          Array.prototype.slice.call;
          e.exports = r;
        }.call(this, t('_process')));
      },
      { _process: 87 }
    ],
    21: [
      function(t, e, n) {
        (function(t) {
          function e(t) {
            return Array.isArray ? Array.isArray(t) : '[object Array]' === g(t);
          }
          function r(t) {
            return 'boolean' == typeof t;
          }
          function i(t) {
            return null === t;
          }
          function o(t) {
            return null == t;
          }
          function s(t) {
            return 'number' == typeof t;
          }
          function a(t) {
            return 'string' == typeof t;
          }
          function u(t) {
            return 'symbol' == typeof t;
          }
          function c(t) {
            return void 0 === t;
          }
          function l(t) {
            return '[object RegExp]' === g(t);
          }
          function h(t) {
            return 'object' == typeof t && null !== t;
          }
          function f(t) {
            return '[object Date]' === g(t);
          }
          function p(t) {
            return '[object Error]' === g(t) || t instanceof Error;
          }
          function d(t) {
            return 'function' == typeof t;
          }
          function y(t) {
            return (
              null === t ||
              'boolean' == typeof t ||
              'number' == typeof t ||
              'string' == typeof t ||
              'symbol' == typeof t ||
              'undefined' == typeof t
            );
          }
          function g(t) {
            return Object.prototype.toString.call(t);
          }
          (n.isArray = e),
            (n.isBoolean = r),
            (n.isNull = i),
            (n.isNullOrUndefined = o),
            (n.isNumber = s),
            (n.isString = a),
            (n.isSymbol = u),
            (n.isUndefined = c),
            (n.isRegExp = l),
            (n.isObject = h),
            (n.isDate = f),
            (n.isError = p),
            (n.isFunction = d),
            (n.isPrimitive = y),
            (n.isBuffer = t.isBuffer);
        }.call(this, { isBuffer: t('../../is-buffer/index.js') }));
      },
      { '../../is-buffer/index.js': 43 }
    ],
    22: [
      function(t, e, n) {
        !(function(t, r) {
          'object' == typeof n && 'undefined' != typeof e
            ? r(n)
            : 'function' == typeof define && define.amd
            ? define(['exports'], r)
            : r((t.d3 = t.d3 || {}));
        })(this, function(t) {
          'use strict';
          function e(t, e) {
            return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
          }
          function n(t) {
            return (
              1 === t.length && (t = r(t)),
              {
                left: function(e, n, r, i) {
                  for (
                    null == r && (r = 0), null == i && (i = e.length);
                    r < i;

                  ) {
                    var o = (r + i) >>> 1;
                    t(e[o], n) < 0 ? (r = o + 1) : (i = o);
                  }
                  return r;
                },
                right: function(e, n, r, i) {
                  for (
                    null == r && (r = 0), null == i && (i = e.length);
                    r < i;

                  ) {
                    var o = (r + i) >>> 1;
                    t(e[o], n) > 0 ? (i = o) : (r = o + 1);
                  }
                  return r;
                }
              }
            );
          }
          function r(t) {
            return function(n, r) {
              return e(t(n), r);
            };
          }
          function i(t, e) {
            return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
          }
          function o(t) {
            return null === t ? NaN : +t;
          }
          function s(t, e) {
            var n,
              r,
              i = t.length,
              s = 0,
              a = 0,
              u = -1,
              c = 0;
            if (null == e)
              for (; ++u < i; )
                isNaN((n = o(t[u]))) ||
                  ((r = n - s), (s += r / ++c), (a += r * (n - s)));
            else
              for (; ++u < i; )
                isNaN((n = o(e(t[u], u, t)))) ||
                  ((r = n - s), (s += r / ++c), (a += r * (n - s)));
            if (c > 1) return a / (c - 1);
          }
          function a(t, e) {
            var n = s(t, e);
            return n ? Math.sqrt(n) : n;
          }
          function u(t, e) {
            var n,
              r,
              i,
              o = -1,
              s = t.length;
            if (null == e) {
              for (; ++o < s; )
                if (null != (r = t[o]) && r >= r) {
                  n = i = r;
                  break;
                }
              for (; ++o < s; )
                null != (r = t[o]) && (n > r && (n = r), i < r && (i = r));
            } else {
              for (; ++o < s; )
                if (null != (r = e(t[o], o, t)) && r >= r) {
                  n = i = r;
                  break;
                }
              for (; ++o < s; )
                null != (r = e(t[o], o, t)) &&
                  (n > r && (n = r), i < r && (i = r));
            }
            return [n, i];
          }
          function c(t) {
            return function() {
              return t;
            };
          }
          function l(t) {
            return t;
          }
          function h(t, e, n) {
            (t = +t),
              (e = +e),
              (n =
                (i = arguments.length) < 2
                  ? ((e = t), (t = 0), 1)
                  : i < 3
                  ? 1
                  : +n);
            for (
              var r = -1,
                i = 0 | Math.max(0, Math.ceil((e - t) / n)),
                o = new Array(i);
              ++r < i;

            )
              o[r] = t + r * n;
            return o;
          }
          function f(t, e, n) {
            var r = p(t, e, n);
            return h(Math.ceil(t / r) * r, Math.floor(e / r) * r + r / 2, r);
          }
          function p(t, e, n) {
            var r = Math.abs(e - t) / Math.max(0, n),
              i = Math.pow(10, Math.floor(Math.log(r) / Math.LN10)),
              o = r / i;
            return (
              o >= C ? (i *= 10) : o >= U ? (i *= 5) : o >= q && (i *= 2),
              e < t ? -i : i
            );
          }
          function d(t) {
            return Math.ceil(Math.log(t.length) / Math.LN2) + 1;
          }
          function y() {
            function t(t) {
              var i,
                o,
                s = t.length,
                a = new Array(s);
              for (i = 0; i < s; ++i) a[i] = e(t[i], i, t);
              var u = n(a),
                c = u[0],
                l = u[1],
                h = r(a, c, l);
              Array.isArray(h) || (h = f(c, l, h));
              for (var p = h.length; h[0] <= c; ) h.shift(), --p;
              for (; h[p - 1] >= l; ) h.pop(), --p;
              var d,
                y = new Array(p + 1);
              for (i = 0; i <= p; ++i)
                (d = y[i] = []),
                  (d.x0 = i > 0 ? h[i - 1] : c),
                  (d.x1 = i < p ? h[i] : l);
              for (i = 0; i < s; ++i)
                (o = a[i]), c <= o && o <= l && y[O(h, o, 0, p)].push(t[i]);
              return y;
            }
            var e = l,
              n = u,
              r = d;
            return (
              (t.value = function(n) {
                return arguments.length
                  ? ((e = 'function' == typeof n ? n : c(n)), t)
                  : e;
              }),
              (t.domain = function(e) {
                return arguments.length
                  ? ((n = 'function' == typeof e ? e : c([e[0], e[1]])), t)
                  : n;
              }),
              (t.thresholds = function(e) {
                return arguments.length
                  ? ((r =
                      'function' == typeof e
                        ? e
                        : c(Array.isArray(e) ? P.call(e) : e)),
                    t)
                  : r;
              }),
              t
            );
          }
          function g(t, e, n) {
            if ((null == n && (n = o), (r = t.length))) {
              if ((e = +e) <= 0 || r < 2) return +n(t[0], 0, t);
              if (e >= 1) return +n(t[r - 1], r - 1, t);
              var r,
                i = (r - 1) * e,
                s = Math.floor(i),
                a = +n(t[s], s, t),
                u = +n(t[s + 1], s + 1, t);
              return a + (u - a) * (i - s);
            }
          }
          function _(t, n, r) {
            return (
              (t = D.call(t, o).sort(e)),
              Math.ceil(
                (r - n) /
                  (2 * (g(t, 0.75) - g(t, 0.25)) * Math.pow(t.length, -1 / 3))
              )
            );
          }
          function v(t, e, n) {
            return Math.ceil(
              (n - e) / (3.5 * a(t) * Math.pow(t.length, -1 / 3))
            );
          }
          function m(t, e) {
            var n,
              r,
              i = -1,
              o = t.length;
            if (null == e) {
              for (; ++i < o; )
                if (null != (r = t[i]) && r >= r) {
                  n = r;
                  break;
                }
              for (; ++i < o; ) null != (r = t[i]) && r > n && (n = r);
            } else {
              for (; ++i < o; )
                if (null != (r = e(t[i], i, t)) && r >= r) {
                  n = r;
                  break;
                }
              for (; ++i < o; ) null != (r = e(t[i], i, t)) && r > n && (n = r);
            }
            return n;
          }
          function b(t, e) {
            var n,
              r = 0,
              i = t.length,
              s = -1,
              a = i;
            if (null == e)
              for (; ++s < i; ) isNaN((n = o(t[s]))) ? --a : (r += n);
            else
              for (; ++s < i; ) isNaN((n = o(e(t[s], s, t)))) ? --a : (r += n);
            if (a) return r / a;
          }
          function w(t, n) {
            var r,
              i = [],
              s = t.length,
              a = -1;
            if (null == n) for (; ++a < s; ) isNaN((r = o(t[a]))) || i.push(r);
            else for (; ++a < s; ) isNaN((r = o(n(t[a], a, t)))) || i.push(r);
            return g(i.sort(e), 0.5);
          }
          function x(t) {
            for (var e, n, r, i = t.length, o = -1, s = 0; ++o < i; )
              s += t[o].length;
            for (n = new Array(s); --i >= 0; )
              for (r = t[i], e = r.length; --e >= 0; ) n[--s] = r[e];
            return n;
          }
          function E(t, e) {
            var n,
              r,
              i = -1,
              o = t.length;
            if (null == e) {
              for (; ++i < o; )
                if (null != (r = t[i]) && r >= r) {
                  n = r;
                  break;
                }
              for (; ++i < o; ) null != (r = t[i]) && n > r && (n = r);
            } else {
              for (; ++i < o; )
                if (null != (r = e(t[i], i, t)) && r >= r) {
                  n = r;
                  break;
                }
              for (; ++i < o; ) null != (r = e(t[i], i, t)) && n > r && (n = r);
            }
            return n;
          }
          function k(t) {
            for (
              var e = 0,
                n = t.length - 1,
                r = t[0],
                i = new Array(n < 0 ? 0 : n);
              e < n;

            )
              i[e] = [r, (r = t[++e])];
            return i;
          }
          function S(t, e) {
            for (var n = e.length, r = new Array(n); n--; ) r[n] = t[e[n]];
            return r;
          }
          function A(t, n) {
            if ((r = t.length)) {
              var r,
                i,
                o = 0,
                s = 0,
                a = t[s];
              for (n || (n = e); ++o < r; )
                (n((i = t[o]), a) < 0 || 0 !== n(a, a)) && ((a = i), (s = o));
              return 0 === n(a, a) ? s : void 0;
            }
          }
          function T(t, e, n) {
            for (
              var r,
                i,
                o = (null == n ? t.length : n) - (e = null == e ? 0 : +e);
              o;

            )
              (i = (Math.random() * o--) | 0),
                (r = t[o + e]),
                (t[o + e] = t[i + e]),
                (t[i + e] = r);
            return t;
          }
          function j(t, e) {
            var n,
              r = 0,
              i = t.length,
              o = -1;
            if (null == e) for (; ++o < i; ) (n = +t[o]) && (r += n);
            else for (; ++o < i; ) (n = +e(t[o], o, t)) && (r += n);
            return r;
          }
          function R(t) {
            if (!(i = t.length)) return [];
            for (var e = -1, n = E(t, N), r = new Array(n); ++e < n; )
              for (var i, o = -1, s = (r[e] = new Array(i)); ++o < i; )
                s[o] = t[o][e];
            return r;
          }
          function N(t) {
            return t.length;
          }
          function M() {
            return R(arguments);
          }
          var B = n(e),
            O = B.right,
            I = B.left,
            L = Array.prototype,
            P = L.slice,
            D = L.map,
            C = Math.sqrt(50),
            U = Math.sqrt(10),
            q = Math.sqrt(2);
          (t.bisect = O),
            (t.bisectRight = O),
            (t.bisectLeft = I),
            (t.ascending = e),
            (t.bisector = n),
            (t.descending = i),
            (t.deviation = a),
            (t.extent = u),
            (t.histogram = y),
            (t.thresholdFreedmanDiaconis = _),
            (t.thresholdScott = v),
            (t.thresholdSturges = d),
            (t.max = m),
            (t.mean = b),
            (t.median = w),
            (t.merge = x),
            (t.min = E),
            (t.pairs = k),
            (t.permute = S),
            (t.quantile = g),
            (t.range = h),
            (t.scan = A),
            (t.shuffle = T),
            (t.sum = j),
            (t.ticks = f),
            (t.tickStep = p),
            (t.transpose = R),
            (t.variance = s),
            (t.zip = M),
            Object.defineProperty(t, '__esModule', { value: !0 });
        });
      },
      {}
    ],
    23: [
      function(t, e, n) {
        !(function(t, r) {
          'object' == typeof n && 'undefined' != typeof e
            ? r(n)
            : 'function' == typeof define && define.amd
            ? define(['exports'], r)
            : r((t.d3 = t.d3 || {}));
        })(this, function(t) {
          'use strict';
          function e() {
            (this._x0 = this._y0 = this._x1 = this._y1 = null), (this._ = []);
          }
          function n() {
            return new e();
          }
          var r = Math.PI,
            i = 2 * r,
            o = 1e-6,
            s = i - o;
          (e.prototype = n.prototype = {
            constructor: e,
            moveTo: function(t, e) {
              this._.push(
                'M',
                (this._x0 = this._x1 = +t),
                ',',
                (this._y0 = this._y1 = +e)
              );
            },
            closePath: function() {
              null !== this._x1 &&
                ((this._x1 = this._x0),
                (this._y1 = this._y0),
                this._.push('Z'));
            },
            lineTo: function(t, e) {
              this._.push('L', (this._x1 = +t), ',', (this._y1 = +e));
            },
            quadraticCurveTo: function(t, e, n, r) {
              this._.push(
                'Q',
                +t,
                ',',
                +e,
                ',',
                (this._x1 = +n),
                ',',
                (this._y1 = +r)
              );
            },
            bezierCurveTo: function(t, e, n, r, i, o) {
              this._.push(
                'C',
                +t,
                ',',
                +e,
                ',',
                +n,
                ',',
                +r,
                ',',
                (this._x1 = +i),
                ',',
                (this._y1 = +o)
              );
            },
            arcTo: function(t, e, n, i, s) {
              (t = +t), (e = +e), (n = +n), (i = +i), (s = +s);
              var a = this._x1,
                u = this._y1,
                c = n - t,
                l = i - e,
                h = a - t,
                f = u - e,
                p = h * h + f * f;
              if (s < 0) throw new Error('negative radius: ' + s);
              if (null === this._x1)
                this._.push('M', (this._x1 = t), ',', (this._y1 = e));
              else if (p > o)
                if (Math.abs(f * c - l * h) > o && s) {
                  var d = n - a,
                    y = i - u,
                    g = c * c + l * l,
                    _ = d * d + y * y,
                    v = Math.sqrt(g),
                    m = Math.sqrt(p),
                    b =
                      s *
                      Math.tan((r - Math.acos((g + p - _) / (2 * v * m))) / 2),
                    w = b / m,
                    x = b / v;
                  Math.abs(w - 1) > o &&
                    this._.push('L', t + w * h, ',', e + w * f),
                    this._.push(
                      'A',
                      s,
                      ',',
                      s,
                      ',0,0,',
                      +(f * d > h * y),
                      ',',
                      (this._x1 = t + x * c),
                      ',',
                      (this._y1 = e + x * l)
                    );
                } else this._.push('L', (this._x1 = t), ',', (this._y1 = e));
              else;
            },
            arc: function(t, e, n, a, u, c) {
              (t = +t), (e = +e), (n = +n);
              var l = n * Math.cos(a),
                h = n * Math.sin(a),
                f = t + l,
                p = e + h,
                d = 1 ^ c,
                y = c ? a - u : u - a;
              if (n < 0) throw new Error('negative radius: ' + n);
              null === this._x1
                ? this._.push('M', f, ',', p)
                : (Math.abs(this._x1 - f) > o || Math.abs(this._y1 - p) > o) &&
                  this._.push('L', f, ',', p),
                n &&
                  (y > s
                    ? this._.push(
                        'A',
                        n,
                        ',',
                        n,
                        ',0,1,',
                        d,
                        ',',
                        t - l,
                        ',',
                        e - h,
                        'A',
                        n,
                        ',',
                        n,
                        ',0,1,',
                        d,
                        ',',
                        (this._x1 = f),
                        ',',
                        (this._y1 = p)
                      )
                    : (y < 0 && (y = (y % i) + i),
                      this._.push(
                        'A',
                        n,
                        ',',
                        n,
                        ',0,',
                        +(y >= r),
                        ',',
                        d,
                        ',',
                        (this._x1 = t + n * Math.cos(u)),
                        ',',
                        (this._y1 = e + n * Math.sin(u))
                      )));
            },
            rect: function(t, e, n, r) {
              this._.push(
                'M',
                (this._x0 = this._x1 = +t),
                ',',
                (this._y0 = this._y1 = +e),
                'h',
                +n,
                'v',
                +r,
                'h',
                -n,
                'Z'
              );
            },
            toString: function() {
              return this._.join('');
            }
          }),
            (t.path = n),
            Object.defineProperty(t, '__esModule', { value: !0 });
        });
      },
      {}
    ],
    24: [
      function(t, e, n) {
        !(function(t, r) {
          'object' == typeof n && 'undefined' != typeof e
            ? r(n)
            : 'function' == typeof define && define.amd
            ? define(['exports'], r)
            : r((t.d3 = t.d3 || {}));
        })(this, function(t) {
          'use strict';
          function e(t) {
            var e = (t += ''),
              n = e.indexOf(':');
            return (
              n >= 0 && 'xmlns' !== (e = t.slice(0, n)) && (t = t.slice(n + 1)),
              zt.hasOwnProperty(e) ? { space: zt[e], local: t } : t
            );
          }
          function n(t) {
            return function() {
              var e = this.ownerDocument,
                n = this.namespaceURI;
              return n === Wt && e.documentElement.namespaceURI === Wt
                ? e.createElement(t)
                : e.createElementNS(n, t);
            };
          }
          function r(t) {
            return function() {
              return this.ownerDocument.createElementNS(t.space, t.local);
            };
          }
          function i(t) {
            var i = e(t);
            return (i.local ? r : n)(i);
          }
          function o() {
            return new s();
          }
          function s() {
            this._ = '@' + (++Ft).toString(36);
          }
          function a(t, e, n) {
            return (
              (t = u(t, e, n)),
              function(e) {
                var n = e.relatedTarget;
                (n && (n === this || 8 & n.compareDocumentPosition(this))) ||
                  t.call(this, e);
              }
            );
          }
          function u(e, n, r) {
            return function(i) {
              var o = t.event;
              t.event = i;
              try {
                e.call(this, this.__data__, n, r);
              } finally {
                t.event = o;
              }
            };
          }
          function c(t) {
            return t
              .trim()
              .split(/^|\s+/)
              .map(function(t) {
                var e = '',
                  n = t.indexOf('.');
                return (
                  n >= 0 && ((e = t.slice(n + 1)), (t = t.slice(0, n))),
                  { type: t, name: e }
                );
              });
          }
          function l(t) {
            return function() {
              var e = this.__on;
              if (e) {
                for (var n, r = 0, i = -1, o = e.length; r < o; ++r)
                  (n = e[r]),
                    (t.type && n.type !== t.type) || n.name !== t.name
                      ? (e[++i] = n)
                      : this.removeEventListener(n.type, n.listener, n.capture);
                ++i ? (e.length = i) : delete this.__on;
              }
            };
          }
          function h(t, e, n) {
            var r = Jt.hasOwnProperty(t.type) ? a : u;
            return function(i, o, s) {
              var a,
                u = this.__on,
                c = r(e, o, s);
              if (u)
                for (var l = 0, h = u.length; l < h; ++l)
                  if ((a = u[l]).type === t.type && a.name === t.name)
                    return (
                      this.removeEventListener(a.type, a.listener, a.capture),
                      this.addEventListener(
                        a.type,
                        (a.listener = c),
                        (a.capture = n)
                      ),
                      void (a.value = e)
                    );
              this.addEventListener(t.type, c, n),
                (a = {
                  type: t.type,
                  name: t.name,
                  value: e,
                  listener: c,
                  capture: n
                }),
                u ? u.push(a) : (this.__on = [a]);
            };
          }
          function f(t, e, n) {
            var r,
              i,
              o = c(t + ''),
              s = o.length;
            {
              if (!(arguments.length < 2)) {
                for (a = e ? h : l, null == n && (n = !1), r = 0; r < s; ++r)
                  this.each(a(o[r], e, n));
                return this;
              }
              var a = this.node().__on;
              if (a)
                for (var u, f = 0, p = a.length; f < p; ++f)
                  for (r = 0, u = a[f]; r < s; ++r)
                    if ((i = o[r]).type === u.type && i.name === u.name)
                      return u.value;
            }
          }
          function p(e, n, r, i) {
            var o = t.event;
            (e.sourceEvent = t.event), (t.event = e);
            try {
              return n.apply(r, i);
            } finally {
              t.event = o;
            }
          }
          function d() {
            for (var e, n = t.event; (e = n.sourceEvent); ) n = e;
            return n;
          }
          function y(t, e) {
            var n = t.ownerSVGElement || t;
            if (n.createSVGPoint) {
              var r = n.createSVGPoint();
              return (
                (r.x = e.clientX),
                (r.y = e.clientY),
                (r = r.matrixTransform(t.getScreenCTM().inverse())),
                [r.x, r.y]
              );
            }
            var i = t.getBoundingClientRect();
            return [
              e.clientX - i.left - t.clientLeft,
              e.clientY - i.top - t.clientTop
            ];
          }
          function g(t) {
            var e = d();
            return e.changedTouches && (e = e.changedTouches[0]), y(t, e);
          }
          function _() {}
          function v(t) {
            return null == t
              ? _
              : function() {
                  return this.querySelector(t);
                };
          }
          function m(t) {
            'function' != typeof t && (t = v(t));
            for (
              var e = this._groups, n = e.length, r = new Array(n), i = 0;
              i < n;
              ++i
            )
              for (
                var o,
                  s,
                  a = e[i],
                  u = a.length,
                  c = (r[i] = new Array(u)),
                  l = 0;
                l < u;
                ++l
              )
                (o = a[l]) &&
                  (s = t.call(o, o.__data__, l, a)) &&
                  ('__data__' in o && (s.__data__ = o.__data__), (c[l] = s));
            return new Lt(r, this._parents);
          }
          function b() {
            return [];
          }
          function w(t) {
            return null == t
              ? b
              : function() {
                  return this.querySelectorAll(t);
                };
          }
          function x(t) {
            'function' != typeof t && (t = w(t));
            for (
              var e = this._groups, n = e.length, r = [], i = [], o = 0;
              o < n;
              ++o
            )
              for (var s, a = e[o], u = a.length, c = 0; c < u; ++c)
                (s = a[c]) && (r.push(t.call(s, s.__data__, c, a)), i.push(s));
            return new Lt(r, i);
          }
          function E(t) {
            'function' != typeof t && (t = Ht(t));
            for (
              var e = this._groups, n = e.length, r = new Array(n), i = 0;
              i < n;
              ++i
            )
              for (
                var o, s = e[i], a = s.length, u = (r[i] = []), c = 0;
                c < a;
                ++c
              )
                (o = s[c]) && t.call(o, o.__data__, c, s) && u.push(o);
            return new Lt(r, this._parents);
          }
          function k(t) {
            return new Array(t.length);
          }
          function S() {
            return new Lt(this._enter || this._groups.map(k), this._parents);
          }
          function A(t, e) {
            (this.ownerDocument = t.ownerDocument),
              (this.namespaceURI = t.namespaceURI),
              (this._next = null),
              (this._parent = t),
              (this.__data__ = e);
          }
          function T(t) {
            return function() {
              return t;
            };
          }
          function j(t, e, n, r, i, o) {
            for (var s, a = 0, u = e.length, c = o.length; a < c; ++a)
              (s = e[a])
                ? ((s.__data__ = o[a]), (r[a] = s))
                : (n[a] = new A(t, o[a]));
            for (; a < u; ++a) (s = e[a]) && (i[a] = s);
          }
          function R(t, e, n, r, i, o, s) {
            var a,
              u,
              c,
              l = {},
              h = e.length,
              f = o.length,
              p = new Array(h);
            for (a = 0; a < h; ++a)
              (u = e[a]) &&
                ((p[a] = c = Gt + s.call(u, u.__data__, a, e)),
                c in l ? (i[a] = u) : (l[c] = u));
            for (a = 0; a < f; ++a)
              (c = Gt + s.call(t, o[a], a, o)),
                (u = l[c])
                  ? ((r[a] = u), (u.__data__ = o[a]), (l[c] = null))
                  : (n[a] = new A(t, o[a]));
            for (a = 0; a < h; ++a) (u = e[a]) && l[p[a]] === u && (i[a] = u);
          }
          function N(t, e) {
            if (!t)
              return (
                (p = new Array(this.size())),
                (c = -1),
                this.each(function(t) {
                  p[++c] = t;
                }),
                p
              );
            var n = e ? R : j,
              r = this._parents,
              i = this._groups;
            'function' != typeof t && (t = T(t));
            for (
              var o = i.length,
                s = new Array(o),
                a = new Array(o),
                u = new Array(o),
                c = 0;
              c < o;
              ++c
            ) {
              var l = r[c],
                h = i[c],
                f = h.length,
                p = t.call(l, l && l.__data__, c, r),
                d = p.length,
                y = (a[c] = new Array(d)),
                g = (s[c] = new Array(d)),
                _ = (u[c] = new Array(f));
              n(l, h, y, g, _, p, e);
              for (var v, m, b = 0, w = 0; b < d; ++b)
                if ((v = y[b])) {
                  for (b >= w && (w = b + 1); !(m = g[w]) && ++w < d; );
                  v._next = m || null;
                }
            }
            return (s = new Lt(s, r)), (s._enter = a), (s._exit = u), s;
          }
          function M() {
            return new Lt(this._exit || this._groups.map(k), this._parents);
          }
          function B(t) {
            for (
              var e = this._groups,
                n = t._groups,
                r = e.length,
                i = n.length,
                o = Math.min(r, i),
                s = new Array(r),
                a = 0;
              a < o;
              ++a
            )
              for (
                var u,
                  c = e[a],
                  l = n[a],
                  h = c.length,
                  f = (s[a] = new Array(h)),
                  p = 0;
                p < h;
                ++p
              )
                (u = c[p] || l[p]) && (f[p] = u);
            for (; a < r; ++a) s[a] = e[a];
            return new Lt(s, this._parents);
          }
          function O() {
            for (var t = this._groups, e = -1, n = t.length; ++e < n; )
              for (var r, i = t[e], o = i.length - 1, s = i[o]; --o >= 0; )
                (r = i[o]) &&
                  (s && s !== r.nextSibling && s.parentNode.insertBefore(r, s),
                  (s = r));
            return this;
          }
          function I(t) {
            function e(e, n) {
              return e && n ? t(e.__data__, n.__data__) : !e - !n;
            }
            t || (t = L);
            for (
              var n = this._groups, r = n.length, i = new Array(r), o = 0;
              o < r;
              ++o
            ) {
              for (
                var s, a = n[o], u = a.length, c = (i[o] = new Array(u)), l = 0;
                l < u;
                ++l
              )
                (s = a[l]) && (c[l] = s);
              c.sort(e);
            }
            return new Lt(i, this._parents).order();
          }
          function L(t, e) {
            return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
          }
          function P() {
            var t = arguments[0];
            return (arguments[0] = this), t.apply(null, arguments), this;
          }
          function D() {
            var t = new Array(this.size()),
              e = -1;
            return (
              this.each(function() {
                t[++e] = this;
              }),
              t
            );
          }
          function C() {
            for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
              for (var r = t[e], i = 0, o = r.length; i < o; ++i) {
                var s = r[i];
                if (s) return s;
              }
            return null;
          }
          function U() {
            var t = 0;
            return (
              this.each(function() {
                ++t;
              }),
              t
            );
          }
          function q() {
            return !this.node();
          }
          function W(t) {
            for (var e = this._groups, n = 0, r = e.length; n < r; ++n)
              for (var i, o = e[n], s = 0, a = o.length; s < a; ++s)
                (i = o[s]) && t.call(i, i.__data__, s, o);
            return this;
          }
          function z(t) {
            return function() {
              this.removeAttribute(t);
            };
          }
          function F(t) {
            return function() {
              this.removeAttributeNS(t.space, t.local);
            };
          }
          function Y(t, e) {
            return function() {
              this.setAttribute(t, e);
            };
          }
          function V(t, e) {
            return function() {
              this.setAttributeNS(t.space, t.local, e);
            };
          }
          function K(t, e) {
            return function() {
              var n = e.apply(this, arguments);
              null == n ? this.removeAttribute(t) : this.setAttribute(t, n);
            };
          }
          function H(t, e) {
            return function() {
              var n = e.apply(this, arguments);
              null == n
                ? this.removeAttributeNS(t.space, t.local)
                : this.setAttributeNS(t.space, t.local, n);
            };
          }
          function J(t, n) {
            var r = e(t);
            if (arguments.length < 2) {
              var i = this.node();
              return r.local
                ? i.getAttributeNS(r.space, r.local)
                : i.getAttribute(r);
            }
            return this.each(
              (null == n
                ? r.local
                  ? F
                  : z
                : 'function' == typeof n
                ? r.local
                  ? H
                  : K
                : r.local
                ? V
                : Y)(r, n)
            );
          }
          function X(t) {
            return (
              (t.ownerDocument && t.ownerDocument.defaultView) ||
              (t.document && t) ||
              t.defaultView
            );
          }
          function G(t) {
            return function() {
              this.style.removeProperty(t);
            };
          }
          function Z(t, e, n) {
            return function() {
              this.style.setProperty(t, e, n);
            };
          }
          function $(t, e, n) {
            return function() {
              var r = e.apply(this, arguments);
              null == r
                ? this.style.removeProperty(t)
                : this.style.setProperty(t, r, n);
            };
          }
          function Q(t, e, n) {
            var r;
            return arguments.length > 1
              ? this.each(
                  (null == e ? G : 'function' == typeof e ? $ : Z)(
                    t,
                    e,
                    null == n ? '' : n
                  )
                )
              : X((r = this.node()))
                  .getComputedStyle(r, null)
                  .getPropertyValue(t);
          }
          function tt(t) {
            return function() {
              delete this[t];
            };
          }
          function et(t, e) {
            return function() {
              this[t] = e;
            };
          }
          function nt(t, e) {
            return function() {
              var n = e.apply(this, arguments);
              null == n ? delete this[t] : (this[t] = n);
            };
          }
          function rt(t, e) {
            return arguments.length > 1
              ? this.each(
                  (null == e ? tt : 'function' == typeof e ? nt : et)(t, e)
                )
              : this.node()[t];
          }
          function it(t) {
            return t.trim().split(/^|\s+/);
          }
          function ot(t) {
            return t.classList || new st(t);
          }
          function st(t) {
            (this._node = t), (this._names = it(t.getAttribute('class') || ''));
          }
          function at(t, e) {
            for (var n = ot(t), r = -1, i = e.length; ++r < i; ) n.add(e[r]);
          }
          function ut(t, e) {
            for (var n = ot(t), r = -1, i = e.length; ++r < i; ) n.remove(e[r]);
          }
          function ct(t) {
            return function() {
              at(this, t);
            };
          }
          function lt(t) {
            return function() {
              ut(this, t);
            };
          }
          function ht(t, e) {
            return function() {
              (e.apply(this, arguments) ? at : ut)(this, t);
            };
          }
          function ft(t, e) {
            var n = it(t + '');
            if (arguments.length < 2) {
              for (var r = ot(this.node()), i = -1, o = n.length; ++i < o; )
                if (!r.contains(n[i])) return !1;
              return !0;
            }
            return this.each(('function' == typeof e ? ht : e ? ct : lt)(n, e));
          }
          function pt() {
            this.textContent = '';
          }
          function dt(t) {
            return function() {
              this.textContent = t;
            };
          }
          function yt(t) {
            return function() {
              var e = t.apply(this, arguments);
              this.textContent = null == e ? '' : e;
            };
          }
          function gt(t) {
            return arguments.length
              ? this.each(
                  null == t ? pt : ('function' == typeof t ? yt : dt)(t)
                )
              : this.node().textContent;
          }
          function _t() {
            this.innerHTML = '';
          }
          function vt(t) {
            return function() {
              this.innerHTML = t;
            };
          }
          function mt(t) {
            return function() {
              var e = t.apply(this, arguments);
              this.innerHTML = null == e ? '' : e;
            };
          }
          function bt(t) {
            return arguments.length
              ? this.each(
                  null == t ? _t : ('function' == typeof t ? mt : vt)(t)
                )
              : this.node().innerHTML;
          }
          function wt() {
            this.nextSibling && this.parentNode.appendChild(this);
          }
          function xt() {
            return this.each(wt);
          }
          function Et() {
            this.previousSibling &&
              this.parentNode.insertBefore(this, this.parentNode.firstChild);
          }
          function kt() {
            return this.each(Et);
          }
          function St(t) {
            var e = 'function' == typeof t ? t : i(t);
            return this.select(function() {
              return this.appendChild(e.apply(this, arguments));
            });
          }
          function At() {
            return null;
          }
          function Tt(t, e) {
            var n = 'function' == typeof t ? t : i(t),
              r = null == e ? At : 'function' == typeof e ? e : v(e);
            return this.select(function() {
              return this.insertBefore(
                n.apply(this, arguments),
                r.apply(this, arguments) || null
              );
            });
          }
          function jt() {
            var t = this.parentNode;
            t && t.removeChild(this);
          }
          function Rt() {
            return this.each(jt);
          }
          function Nt(t) {
            return arguments.length
              ? this.property('__data__', t)
              : this.node().__data__;
          }
          function Mt(t, e, n) {
            var r = X(t),
              i = r.CustomEvent;
            i
              ? (i = new i(e, n))
              : ((i = r.document.createEvent('Event')),
                n
                  ? (i.initEvent(e, n.bubbles, n.cancelable),
                    (i.detail = n.detail))
                  : i.initEvent(e, !1, !1)),
              t.dispatchEvent(i);
          }
          function Bt(t, e) {
            return function() {
              return Mt(this, t, e);
            };
          }
          function Ot(t, e) {
            return function() {
              return Mt(this, t, e.apply(this, arguments));
            };
          }
          function It(t, e) {
            return this.each(('function' == typeof e ? Ot : Bt)(t, e));
          }
          function Lt(t, e) {
            (this._groups = t), (this._parents = e);
          }
          function Pt() {
            return new Lt([[document.documentElement]], Zt);
          }
          function Dt(t) {
            return 'string' == typeof t
              ? new Lt(
                  [[document.querySelector(t)]],
                  [document.documentElement]
                )
              : new Lt([[t]], Zt);
          }
          function Ct(t) {
            return 'string' == typeof t
              ? new Lt(
                  [document.querySelectorAll(t)],
                  [document.documentElement]
                )
              : new Lt([null == t ? [] : t], Zt);
          }
          function Ut(t, e, n) {
            arguments.length < 3 && ((n = e), (e = d().changedTouches));
            for (var r, i = 0, o = e ? e.length : 0; i < o; ++i)
              if ((r = e[i]).identifier === n) return y(t, r);
            return null;
          }
          function qt(t, e) {
            null == e && (e = d().touches);
            for (var n = 0, r = e ? e.length : 0, i = new Array(r); n < r; ++n)
              i[n] = y(t, e[n]);
            return i;
          }
          var Wt = 'http://www.w3.org/1999/xhtml',
            zt = {
              svg: 'http://www.w3.org/2000/svg',
              xhtml: Wt,
              xlink: 'http://www.w3.org/1999/xlink',
              xml: 'http://www.w3.org/XML/1998/namespace',
              xmlns: 'http://www.w3.org/2000/xmlns/'
            },
            Ft = 0;
          s.prototype = o.prototype = {
            constructor: s,
            get: function(t) {
              for (var e = this._; !(e in t); ) if (!(t = t.parentNode)) return;
              return t[e];
            },
            set: function(t, e) {
              return (t[this._] = e);
            },
            remove: function(t) {
              return this._ in t && delete t[this._];
            },
            toString: function() {
              return this._;
            }
          };
          var Yt = function(t) {
            return function() {
              return this.matches(t);
            };
          };
          if ('undefined' != typeof document) {
            var Vt = document.documentElement;
            if (!Vt.matches) {
              var Kt =
                Vt.webkitMatchesSelector ||
                Vt.msMatchesSelector ||
                Vt.mozMatchesSelector ||
                Vt.oMatchesSelector;
              Yt = function(t) {
                return function() {
                  return Kt.call(this, t);
                };
              };
            }
          }
          var Ht = Yt,
            Jt = {};
          if (((t.event = null), 'undefined' != typeof document)) {
            var Xt = document.documentElement;
            'onmouseenter' in Xt ||
              (Jt = { mouseenter: 'mouseover', mouseleave: 'mouseout' });
          }
          A.prototype = {
            constructor: A,
            appendChild: function(t) {
              return this._parent.insertBefore(t, this._next);
            },
            insertBefore: function(t, e) {
              return this._parent.insertBefore(t, e);
            },
            querySelector: function(t) {
              return this._parent.querySelector(t);
            },
            querySelectorAll: function(t) {
              return this._parent.querySelectorAll(t);
            }
          };
          var Gt = '$';
          st.prototype = {
            add: function(t) {
              var e = this._names.indexOf(t);
              e < 0 &&
                (this._names.push(t),
                this._node.setAttribute('class', this._names.join(' ')));
            },
            remove: function(t) {
              var e = this._names.indexOf(t);
              e >= 0 &&
                (this._names.splice(e, 1),
                this._node.setAttribute('class', this._names.join(' ')));
            },
            contains: function(t) {
              return this._names.indexOf(t) >= 0;
            }
          };
          var Zt = [null];
          (Lt.prototype = Pt.prototype = {
            constructor: Lt,
            select: m,
            selectAll: x,
            filter: E,
            data: N,
            enter: S,
            exit: M,
            merge: B,
            order: O,
            sort: I,
            call: P,
            nodes: D,
            node: C,
            size: U,
            empty: q,
            each: W,
            attr: J,
            style: Q,
            property: rt,
            classed: ft,
            text: gt,
            html: bt,
            raise: xt,
            lower: kt,
            append: St,
            insert: Tt,
            remove: Rt,
            datum: Nt,
            on: f,
            dispatch: It
          }),
            (t.creator = i),
            (t.local = o),
            (t.matcher = Ht),
            (t.mouse = g),
            (t.namespace = e),
            (t.namespaces = zt),
            (t.select = Dt),
            (t.selectAll = Ct),
            (t.selection = Pt),
            (t.selector = v),
            (t.selectorAll = w),
            (t.touch = Ut),
            (t.touches = qt),
            (t.window = X),
            (t.customEvent = p),
            Object.defineProperty(t, '__esModule', { value: !0 });
        });
      },
      {}
    ],
    25: [
      function(t, e, n) {
        !(function(r, i) {
          'object' == typeof n && 'undefined' != typeof e
            ? i(n, t('d3-path'))
            : 'function' == typeof define && define.amd
            ? define(['exports', 'd3-path'], i)
            : i((r.d3 = r.d3 || {}), r.d3);
        })(this, function(t, e) {
          'use strict';
          function n(t) {
            return function() {
              return t;
            };
          }
          function r(t) {
            return t.innerRadius;
          }
          function i(t) {
            return t.outerRadius;
          }
          function o(t) {
            return t.startAngle;
          }
          function s(t) {
            return t.endAngle;
          }
          function a(t) {
            return t && t.padAngle;
          }
          function u(t) {
            return t >= 1 ? xt : t <= -1 ? -xt : Math.asin(t);
          }
          function c(t, e, n, r, i, o, s, a) {
            var u = n - t,
              c = r - e,
              l = s - i,
              h = a - o,
              f = (l * (e - o) - h * (t - i)) / (h * u - l * c);
            return [t + f * u, e + f * c];
          }
          function l(t, e, n, r, i, o, s) {
            var a = t - n,
              u = e - r,
              c = (s ? o : -o) / Math.sqrt(a * a + u * u),
              l = c * u,
              h = -c * a,
              f = t + l,
              p = e + h,
              d = n + l,
              y = r + h,
              g = (f + d) / 2,
              _ = (p + y) / 2,
              v = d - f,
              m = y - p,
              b = v * v + m * m,
              w = i - o,
              x = f * y - d * p,
              E = (m < 0 ? -1 : 1) * Math.sqrt(Math.max(0, w * w * b - x * x)),
              k = (x * m - v * E) / b,
              S = (-x * v - m * E) / b,
              A = (x * m + v * E) / b,
              T = (-x * v + m * E) / b,
              j = k - g,
              R = S - _,
              N = A - g,
              M = T - _;
            return (
              j * j + R * R > N * N + M * M && ((k = A), (S = T)),
              {
                cx: k,
                cy: S,
                x01: -l,
                y01: -h,
                x11: k * (i / w - 1),
                y11: S * (i / w - 1)
              }
            );
          }
          function h() {
            function t() {
              var t,
                n,
                r = +h.apply(this, arguments),
                i = +f.apply(this, arguments),
                o = y.apply(this, arguments) - xt,
                s = g.apply(this, arguments) - xt,
                a = Math.abs(s - o),
                m = s > o;
              if (
                (v || (v = t = e.path()),
                i < r && ((n = i), (i = r), (r = n)),
                i > bt)
              )
                if (a > Et - bt)
                  v.moveTo(i * Math.cos(o), i * Math.sin(o)),
                    v.arc(0, 0, i, o, s, !m),
                    r > bt &&
                      (v.moveTo(r * Math.cos(s), r * Math.sin(s)),
                      v.arc(0, 0, r, s, o, m));
                else {
                  var b,
                    w,
                    x = o,
                    E = s,
                    k = o,
                    S = s,
                    A = a,
                    T = a,
                    j = _.apply(this, arguments) / 2,
                    R =
                      j > bt &&
                      (d
                        ? +d.apply(this, arguments)
                        : Math.sqrt(r * r + i * i)),
                    N = Math.min(
                      Math.abs(i - r) / 2,
                      +p.apply(this, arguments)
                    ),
                    M = N,
                    B = N;
                  if (R > bt) {
                    var O = u((R / r) * Math.sin(j)),
                      I = u((R / i) * Math.sin(j));
                    (A -= 2 * O) > bt
                      ? ((O *= m ? 1 : -1), (k += O), (S -= O))
                      : ((A = 0), (k = S = (o + s) / 2)),
                      (T -= 2 * I) > bt
                        ? ((I *= m ? 1 : -1), (x += I), (E -= I))
                        : ((T = 0), (x = E = (o + s) / 2));
                  }
                  var L = i * Math.cos(x),
                    P = i * Math.sin(x),
                    D = r * Math.cos(S),
                    C = r * Math.sin(S);
                  if (N > bt) {
                    var U = i * Math.cos(E),
                      q = i * Math.sin(E),
                      W = r * Math.cos(k),
                      z = r * Math.sin(k);
                    if (a < wt) {
                      var F = A > bt ? c(L, P, W, z, U, q, D, C) : [D, C],
                        Y = L - F[0],
                        V = P - F[1],
                        K = U - F[0],
                        H = q - F[1],
                        J =
                          1 /
                          Math.sin(
                            Math.acos(
                              (Y * K + V * H) /
                                (Math.sqrt(Y * Y + V * V) *
                                  Math.sqrt(K * K + H * H))
                            ) / 2
                          ),
                        X = Math.sqrt(F[0] * F[0] + F[1] * F[1]);
                      (M = Math.min(N, (r - X) / (J - 1))),
                        (B = Math.min(N, (i - X) / (J + 1)));
                    }
                  }
                  T > bt
                    ? B > bt
                      ? ((b = l(W, z, L, P, i, B, m)),
                        (w = l(U, q, D, C, i, B, m)),
                        v.moveTo(b.cx + b.x01, b.cy + b.y01),
                        B < N
                          ? v.arc(
                              b.cx,
                              b.cy,
                              B,
                              Math.atan2(b.y01, b.x01),
                              Math.atan2(w.y01, w.x01),
                              !m
                            )
                          : (v.arc(
                              b.cx,
                              b.cy,
                              B,
                              Math.atan2(b.y01, b.x01),
                              Math.atan2(b.y11, b.x11),
                              !m
                            ),
                            v.arc(
                              0,
                              0,
                              i,
                              Math.atan2(b.cy + b.y11, b.cx + b.x11),
                              Math.atan2(w.cy + w.y11, w.cx + w.x11),
                              !m
                            ),
                            v.arc(
                              w.cx,
                              w.cy,
                              B,
                              Math.atan2(w.y11, w.x11),
                              Math.atan2(w.y01, w.x01),
                              !m
                            )))
                      : (v.moveTo(L, P), v.arc(0, 0, i, x, E, !m))
                    : v.moveTo(L, P),
                    r > bt && A > bt
                      ? M > bt
                        ? ((b = l(D, C, U, q, r, -M, m)),
                          (w = l(L, P, W, z, r, -M, m)),
                          v.lineTo(b.cx + b.x01, b.cy + b.y01),
                          M < N
                            ? v.arc(
                                b.cx,
                                b.cy,
                                M,
                                Math.atan2(b.y01, b.x01),
                                Math.atan2(w.y01, w.x01),
                                !m
                              )
                            : (v.arc(
                                b.cx,
                                b.cy,
                                M,
                                Math.atan2(b.y01, b.x01),
                                Math.atan2(b.y11, b.x11),
                                !m
                              ),
                              v.arc(
                                0,
                                0,
                                r,
                                Math.atan2(b.cy + b.y11, b.cx + b.x11),
                                Math.atan2(w.cy + w.y11, w.cx + w.x11),
                                m
                              ),
                              v.arc(
                                w.cx,
                                w.cy,
                                M,
                                Math.atan2(w.y11, w.x11),
                                Math.atan2(w.y01, w.x01),
                                !m
                              )))
                        : v.arc(0, 0, r, S, k, m)
                      : v.lineTo(D, C);
                }
              else v.moveTo(0, 0);
              if ((v.closePath(), t)) return (v = null), t + '' || null;
            }
            var h = r,
              f = i,
              p = n(0),
              d = null,
              y = o,
              g = s,
              _ = a,
              v = null;
            return (
              (t.centroid = function() {
                var t =
                    (+h.apply(this, arguments) + +f.apply(this, arguments)) / 2,
                  e =
                    (+y.apply(this, arguments) + +g.apply(this, arguments)) /
                      2 -
                    wt / 2;
                return [Math.cos(e) * t, Math.sin(e) * t];
              }),
              (t.innerRadius = function(e) {
                return arguments.length
                  ? ((h = 'function' == typeof e ? e : n(+e)), t)
                  : h;
              }),
              (t.outerRadius = function(e) {
                return arguments.length
                  ? ((f = 'function' == typeof e ? e : n(+e)), t)
                  : f;
              }),
              (t.cornerRadius = function(e) {
                return arguments.length
                  ? ((p = 'function' == typeof e ? e : n(+e)), t)
                  : p;
              }),
              (t.padRadius = function(e) {
                return arguments.length
                  ? ((d =
                      null == e ? null : 'function' == typeof e ? e : n(+e)),
                    t)
                  : d;
              }),
              (t.startAngle = function(e) {
                return arguments.length
                  ? ((y = 'function' == typeof e ? e : n(+e)), t)
                  : y;
              }),
              (t.endAngle = function(e) {
                return arguments.length
                  ? ((g = 'function' == typeof e ? e : n(+e)), t)
                  : g;
              }),
              (t.padAngle = function(e) {
                return arguments.length
                  ? ((_ = 'function' == typeof e ? e : n(+e)), t)
                  : _;
              }),
              (t.context = function(e) {
                return arguments.length ? ((v = null == e ? null : e), t) : v;
              }),
              t
            );
          }
          function f(t) {
            this._context = t;
          }
          function p(t) {
            return new f(t);
          }
          function d(t) {
            return t[0];
          }
          function y(t) {
            return t[1];
          }
          function g() {
            function t(t) {
              var n,
                c,
                l,
                h = t.length,
                f = !1;
              for (null == s && (u = a((l = e.path()))), n = 0; n <= h; ++n)
                !(n < h && o((c = t[n]), n, t)) === f &&
                  ((f = !f) ? u.lineStart() : u.lineEnd()),
                  f && u.point(+r(c, n, t), +i(c, n, t));
              if (l) return (u = null), l + '' || null;
            }
            var r = d,
              i = y,
              o = n(!0),
              s = null,
              a = p,
              u = null;
            return (
              (t.x = function(e) {
                return arguments.length
                  ? ((r = 'function' == typeof e ? e : n(+e)), t)
                  : r;
              }),
              (t.y = function(e) {
                return arguments.length
                  ? ((i = 'function' == typeof e ? e : n(+e)), t)
                  : i;
              }),
              (t.defined = function(e) {
                return arguments.length
                  ? ((o = 'function' == typeof e ? e : n(!!e)), t)
                  : o;
              }),
              (t.curve = function(e) {
                return arguments.length
                  ? ((a = e), null != s && (u = a(s)), t)
                  : a;
              }),
              (t.context = function(e) {
                return arguments.length
                  ? (null == e ? (s = u = null) : (u = a((s = e))), t)
                  : s;
              }),
              t
            );
          }
          function _() {
            function t(t) {
              var n,
                r,
                f,
                p,
                d,
                y = t.length,
                g = !1,
                _ = new Array(y),
                v = new Array(y);
              for (null == c && (h = l((d = e.path()))), n = 0; n <= y; ++n) {
                if (!(n < y && u((p = t[n]), n, t)) === g)
                  if ((g = !g)) (r = n), h.areaStart(), h.lineStart();
                  else {
                    for (h.lineEnd(), h.lineStart(), f = n - 1; f >= r; --f)
                      h.point(_[f], v[f]);
                    h.lineEnd(), h.areaEnd();
                  }
                g &&
                  ((_[n] = +i(p, n, t)),
                  (v[n] = +s(p, n, t)),
                  h.point(o ? +o(p, n, t) : _[n], a ? +a(p, n, t) : v[n]));
              }
              if (d) return (h = null), d + '' || null;
            }
            function r() {
              return g()
                .defined(u)
                .curve(l)
                .context(c);
            }
            var i = d,
              o = null,
              s = n(0),
              a = y,
              u = n(!0),
              c = null,
              l = p,
              h = null;
            return (
              (t.x = function(e) {
                return arguments.length
                  ? ((i = 'function' == typeof e ? e : n(+e)), (o = null), t)
                  : i;
              }),
              (t.x0 = function(e) {
                return arguments.length
                  ? ((i = 'function' == typeof e ? e : n(+e)), t)
                  : i;
              }),
              (t.x1 = function(e) {
                return arguments.length
                  ? ((o =
                      null == e ? null : 'function' == typeof e ? e : n(+e)),
                    t)
                  : o;
              }),
              (t.y = function(e) {
                return arguments.length
                  ? ((s = 'function' == typeof e ? e : n(+e)), (a = null), t)
                  : s;
              }),
              (t.y0 = function(e) {
                return arguments.length
                  ? ((s = 'function' == typeof e ? e : n(+e)), t)
                  : s;
              }),
              (t.y1 = function(e) {
                return arguments.length
                  ? ((a =
                      null == e ? null : 'function' == typeof e ? e : n(+e)),
                    t)
                  : a;
              }),
              (t.lineX0 = t.lineY0 = function() {
                return r()
                  .x(i)
                  .y(s);
              }),
              (t.lineY1 = function() {
                return r()
                  .x(i)
                  .y(a);
              }),
              (t.lineX1 = function() {
                return r()
                  .x(o)
                  .y(s);
              }),
              (t.defined = function(e) {
                return arguments.length
                  ? ((u = 'function' == typeof e ? e : n(!!e)), t)
                  : u;
              }),
              (t.curve = function(e) {
                return arguments.length
                  ? ((l = e), null != c && (h = l(c)), t)
                  : l;
              }),
              (t.context = function(e) {
                return arguments.length
                  ? (null == e ? (c = h = null) : (h = l((c = e))), t)
                  : c;
              }),
              t
            );
          }
          function v(t, e) {
            return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
          }
          function m(t) {
            return t;
          }
          function b() {
            function t(t) {
              var n,
                u,
                c,
                l,
                h,
                f = t.length,
                p = 0,
                d = new Array(f),
                y = new Array(f),
                g = +o.apply(this, arguments),
                _ = Math.min(Et, Math.max(-Et, s.apply(this, arguments) - g)),
                v = Math.min(Math.abs(_) / f, a.apply(this, arguments)),
                m = v * (_ < 0 ? -1 : 1);
              for (n = 0; n < f; ++n)
                (h = y[(d[n] = n)] = +e(t[n], n, t)) > 0 && (p += h);
              for (
                null != r
                  ? d.sort(function(t, e) {
                      return r(y[t], y[e]);
                    })
                  : null != i &&
                    d.sort(function(e, n) {
                      return i(t[e], t[n]);
                    }),
                  n = 0,
                  c = p ? (_ - f * m) / p : 0;
                n < f;
                ++n, g = l
              )
                (u = d[n]),
                  (h = y[u]),
                  (l = g + (h > 0 ? h * c : 0) + m),
                  (y[u] = {
                    data: t[u],
                    index: n,
                    value: h,
                    startAngle: g,
                    endAngle: l,
                    padAngle: v
                  });
              return y;
            }
            var e = m,
              r = v,
              i = null,
              o = n(0),
              s = n(Et),
              a = n(0);
            return (
              (t.value = function(r) {
                return arguments.length
                  ? ((e = 'function' == typeof r ? r : n(+r)), t)
                  : e;
              }),
              (t.sortValues = function(e) {
                return arguments.length ? ((r = e), (i = null), t) : r;
              }),
              (t.sort = function(e) {
                return arguments.length ? ((i = e), (r = null), t) : i;
              }),
              (t.startAngle = function(e) {
                return arguments.length
                  ? ((o = 'function' == typeof e ? e : n(+e)), t)
                  : o;
              }),
              (t.endAngle = function(e) {
                return arguments.length
                  ? ((s = 'function' == typeof e ? e : n(+e)), t)
                  : s;
              }),
              (t.padAngle = function(e) {
                return arguments.length
                  ? ((a = 'function' == typeof e ? e : n(+e)), t)
                  : a;
              }),
              t
            );
          }
          function w(t) {
            this._curve = t;
          }
          function x(t) {
            function e(e) {
              return new w(t(e));
            }
            return (e._curve = t), e;
          }
          function E(t) {
            var e = t.curve;
            return (
              (t.angle = t.x),
              delete t.x,
              (t.radius = t.y),
              delete t.y,
              (t.curve = function(t) {
                return arguments.length ? e(x(t)) : e()._curve;
              }),
              t
            );
          }
          function k() {
            return E(g().curve(kt));
          }
          function S() {
            var t = _().curve(kt),
              e = t.curve,
              n = t.lineX0,
              r = t.lineX1,
              i = t.lineY0,
              o = t.lineY1;
            return (
              (t.angle = t.x),
              delete t.x,
              (t.startAngle = t.x0),
              delete t.x0,
              (t.endAngle = t.x1),
              delete t.x1,
              (t.radius = t.y),
              delete t.y,
              (t.innerRadius = t.y0),
              delete t.y0,
              (t.outerRadius = t.y1),
              delete t.y1,
              (t.lineStartAngle = function() {
                return E(n());
              }),
              delete t.lineX0,
              (t.lineEndAngle = function() {
                return E(r());
              }),
              delete t.lineX1,
              (t.lineInnerRadius = function() {
                return E(i());
              }),
              delete t.lineY0,
              (t.lineOuterRadius = function() {
                return E(o());
              }),
              delete t.lineY1,
              (t.curve = function(t) {
                return arguments.length ? e(x(t)) : e()._curve;
              }),
              t
            );
          }
          function A() {
            function t() {
              var t;
              if (
                (o || (o = t = e.path()),
                r.apply(this, arguments).draw(o, +i.apply(this, arguments)),
                t)
              )
                return (o = null), t + '' || null;
            }
            var r = n(St),
              i = n(64),
              o = null;
            return (
              (t.type = function(e) {
                return arguments.length
                  ? ((r = 'function' == typeof e ? e : n(e)), t)
                  : r;
              }),
              (t.size = function(e) {
                return arguments.length
                  ? ((i = 'function' == typeof e ? e : n(+e)), t)
                  : i;
              }),
              (t.context = function(e) {
                return arguments.length ? ((o = null == e ? null : e), t) : o;
              }),
              t
            );
          }
          function T() {}
          function j(t, e, n) {
            t._context.bezierCurveTo(
              (2 * t._x0 + t._x1) / 3,
              (2 * t._y0 + t._y1) / 3,
              (t._x0 + 2 * t._x1) / 3,
              (t._y0 + 2 * t._y1) / 3,
              (t._x0 + 4 * t._x1 + e) / 6,
              (t._y0 + 4 * t._y1 + n) / 6
            );
          }
          function R(t) {
            this._context = t;
          }
          function N(t) {
            return new R(t);
          }
          function M(t) {
            this._context = t;
          }
          function B(t) {
            return new M(t);
          }
          function O(t) {
            this._context = t;
          }
          function I(t) {
            return new O(t);
          }
          function L(t, e) {
            (this._basis = new R(t)), (this._beta = e);
          }
          function P(t, e, n) {
            t._context.bezierCurveTo(
              t._x1 + t._k * (t._x2 - t._x0),
              t._y1 + t._k * (t._y2 - t._y0),
              t._x2 + t._k * (t._x1 - e),
              t._y2 + t._k * (t._y1 - n),
              t._x2,
              t._y2
            );
          }
          function D(t, e) {
            (this._context = t), (this._k = (1 - e) / 6);
          }
          function C(t, e) {
            (this._context = t), (this._k = (1 - e) / 6);
          }
          function U(t, e) {
            (this._context = t), (this._k = (1 - e) / 6);
          }
          function q(t, e, n) {
            var r = t._x1,
              i = t._y1,
              o = t._x2,
              s = t._y2;
            if (t._l01_a > bt) {
              var a = 2 * t._l01_2a + 3 * t._l01_a * t._l12_a + t._l12_2a,
                u = 3 * t._l01_a * (t._l01_a + t._l12_a);
              (r = (r * a - t._x0 * t._l12_2a + t._x2 * t._l01_2a) / u),
                (i = (i * a - t._y0 * t._l12_2a + t._y2 * t._l01_2a) / u);
            }
            if (t._l23_a > bt) {
              var c = 2 * t._l23_2a + 3 * t._l23_a * t._l12_a + t._l12_2a,
                l = 3 * t._l23_a * (t._l23_a + t._l12_a);
              (o = (o * c + t._x1 * t._l23_2a - e * t._l12_2a) / l),
                (s = (s * c + t._y1 * t._l23_2a - n * t._l12_2a) / l);
            }
            t._context.bezierCurveTo(r, i, o, s, t._x2, t._y2);
          }
          function W(t, e) {
            (this._context = t), (this._alpha = e);
          }
          function z(t, e) {
            (this._context = t), (this._alpha = e);
          }
          function F(t, e) {
            (this._context = t), (this._alpha = e);
          }
          function Y(t) {
            this._context = t;
          }
          function V(t) {
            return new Y(t);
          }
          function K(t) {
            return t < 0 ? -1 : 1;
          }
          function H(t, e, n) {
            var r = t._x1 - t._x0,
              i = e - t._x1,
              o = (t._y1 - t._y0) / (r || (i < 0 && -0)),
              s = (n - t._y1) / (i || (r < 0 && -0)),
              a = (o * i + s * r) / (r + i);
            return (
              (K(o) + K(s)) *
                Math.min(Math.abs(o), Math.abs(s), 0.5 * Math.abs(a)) || 0
            );
          }
          function J(t, e) {
            var n = t._x1 - t._x0;
            return n ? ((3 * (t._y1 - t._y0)) / n - e) / 2 : e;
          }
          function X(t, e, n) {
            var r = t._x0,
              i = t._y0,
              o = t._x1,
              s = t._y1,
              a = (o - r) / 3;
            t._context.bezierCurveTo(r + a, i + a * e, o - a, s - a * n, o, s);
          }
          function G(t) {
            this._context = t;
          }
          function Z(t) {
            this._context = new $(t);
          }
          function $(t) {
            this._context = t;
          }
          function Q(t) {
            return new G(t);
          }
          function tt(t) {
            return new Z(t);
          }
          function et(t) {
            this._context = t;
          }
          function nt(t) {
            var e,
              n,
              r = t.length - 1,
              i = new Array(r),
              o = new Array(r),
              s = new Array(r);
            for (
              i[0] = 0, o[0] = 2, s[0] = t[0] + 2 * t[1], e = 1;
              e < r - 1;
              ++e
            )
              (i[e] = 1), (o[e] = 4), (s[e] = 4 * t[e] + 2 * t[e + 1]);
            for (
              i[r - 1] = 2, o[r - 1] = 7, s[r - 1] = 8 * t[r - 1] + t[r], e = 1;
              e < r;
              ++e
            )
              (n = i[e] / o[e - 1]), (o[e] -= n), (s[e] -= n * s[e - 1]);
            for (i[r - 1] = s[r - 1] / o[r - 1], e = r - 2; e >= 0; --e)
              i[e] = (s[e] - i[e + 1]) / o[e];
            for (o[r - 1] = (t[r] + i[r - 1]) / 2, e = 0; e < r - 1; ++e)
              o[e] = 2 * t[e + 1] - i[e + 1];
            return [i, o];
          }
          function rt(t) {
            return new et(t);
          }
          function it(t, e) {
            (this._context = t), (this._t = e);
          }
          function ot(t) {
            return new it(t, 0.5);
          }
          function st(t) {
            return new it(t, 0);
          }
          function at(t) {
            return new it(t, 1);
          }
          function ut(t, e) {
            if ((r = t.length) > 1)
              for (var n, r, i = 1, o = t[e[0]], s = o.length; i < r; ++i) {
                (n = o), (o = t[e[i]]);
                for (var a = 0; a < s; ++a)
                  o[a][1] += o[a][0] = isNaN(n[a][1]) ? n[a][0] : n[a][1];
              }
          }
          function ct(t) {
            for (var e = t.length, n = new Array(e); --e >= 0; ) n[e] = e;
            return n;
          }
          function lt(t, e) {
            return t[e];
          }
          function ht() {
            function t(t) {
              var n,
                s,
                a = e.apply(this, arguments),
                u = t.length,
                c = a.length,
                l = new Array(c);
              for (n = 0; n < c; ++n) {
                for (
                  var h, f = a[n], p = (l[n] = new Array(u)), d = 0;
                  d < u;
                  ++d
                )
                  (p[d] = h = [0, +o(t[d], f, d, t)]), (h.data = t[d]);
                p.key = f;
              }
              for (n = 0, s = r(l); n < c; ++n) l[s[n]].index = n;
              return i(l, s), l;
            }
            var e = n([]),
              r = ct,
              i = ut,
              o = lt;
            return (
              (t.keys = function(r) {
                return arguments.length
                  ? ((e = 'function' == typeof r ? r : n(Zt.call(r))), t)
                  : e;
              }),
              (t.value = function(e) {
                return arguments.length
                  ? ((o = 'function' == typeof e ? e : n(+e)), t)
                  : o;
              }),
              (t.order = function(e) {
                return arguments.length
                  ? ((r =
                      null == e
                        ? ct
                        : 'function' == typeof e
                        ? e
                        : n(Zt.call(e))),
                    t)
                  : r;
              }),
              (t.offset = function(e) {
                return arguments.length ? ((i = null == e ? ut : e), t) : i;
              }),
              t
            );
          }
          function ft(t, e) {
            if ((r = t.length) > 0) {
              for (var n, r, i, o = 0, s = t[0].length; o < s; ++o) {
                for (i = n = 0; n < r; ++n) i += t[n][o][1] || 0;
                if (i) for (n = 0; n < r; ++n) t[n][o][1] /= i;
              }
              ut(t, e);
            }
          }
          function pt(t, e) {
            if ((n = t.length) > 0) {
              for (var n, r = 0, i = t[e[0]], o = i.length; r < o; ++r) {
                for (var s = 0, a = 0; s < n; ++s) a += t[s][r][1] || 0;
                i[r][1] += i[r][0] = -a / 2;
              }
              ut(t, e);
            }
          }
          function dt(t, e) {
            if ((i = t.length) > 0 && (r = (n = t[e[0]]).length) > 0) {
              for (var n, r, i, o = 0, s = 1; s < r; ++s) {
                for (var a = 0, u = 0, c = 0; a < i; ++a) {
                  for (
                    var l = t[e[a]],
                      h = l[s][1] || 0,
                      f = l[s - 1][1] || 0,
                      p = (h - f) / 2,
                      d = 0;
                    d < a;
                    ++d
                  ) {
                    var y = t[e[d]],
                      g = y[s][1] || 0,
                      _ = y[s - 1][1] || 0;
                    p += g - _;
                  }
                  (u += h), (c += p * h);
                }
                (n[s - 1][1] += n[s - 1][0] = o), u && (o -= c / u);
              }
              (n[s - 1][1] += n[s - 1][0] = o), ut(t, e);
            }
          }
          function yt(t) {
            var e = t.map(gt);
            return ct(t).sort(function(t, n) {
              return e[t] - e[n];
            });
          }
          function gt(t) {
            for (var e, n = 0, r = -1, i = t.length; ++r < i; )
              (e = +t[r][1]) && (n += e);
            return n;
          }
          function _t(t) {
            return yt(t).reverse();
          }
          function vt(t) {
            var e,
              n,
              r = t.length,
              i = t.map(gt),
              o = ct(t).sort(function(t, e) {
                return i[e] - i[t];
              }),
              s = 0,
              a = 0,
              u = [],
              c = [];
            for (e = 0; e < r; ++e)
              (n = o[e]),
                s < a ? ((s += i[n]), u.push(n)) : ((a += i[n]), c.push(n));
            return c.reverse().concat(u);
          }
          function mt(t) {
            return ct(t).reverse();
          }
          var bt = 1e-12,
            wt = Math.PI,
            xt = wt / 2,
            Et = 2 * wt;
          f.prototype = {
            areaStart: function() {
              this._line = 0;
            },
            areaEnd: function() {
              this._line = NaN;
            },
            lineStart: function() {
              this._point = 0;
            },
            lineEnd: function() {
              (this._line || (0 !== this._line && 1 === this._point)) &&
                this._context.closePath(),
                (this._line = 1 - this._line);
            },
            point: function(t, e) {
              switch (((t = +t), (e = +e), this._point)) {
                case 0:
                  (this._point = 1),
                    this._line
                      ? this._context.lineTo(t, e)
                      : this._context.moveTo(t, e);
                  break;
                case 1:
                  this._point = 2;
                default:
                  this._context.lineTo(t, e);
              }
            }
          };
          var kt = x(p);
          w.prototype = {
            areaStart: function() {
              this._curve.areaStart();
            },
            areaEnd: function() {
              this._curve.areaEnd();
            },
            lineStart: function() {
              this._curve.lineStart();
            },
            lineEnd: function() {
              this._curve.lineEnd();
            },
            point: function(t, e) {
              this._curve.point(e * Math.sin(t), e * -Math.cos(t));
            }
          };
          var St = {
              draw: function(t, e) {
                var n = Math.sqrt(e / wt);
                t.moveTo(n, 0), t.arc(0, 0, n, 0, Et);
              }
            },
            At = {
              draw: function(t, e) {
                var n = Math.sqrt(e / 5) / 2;
                t.moveTo(-3 * n, -n),
                  t.lineTo(-n, -n),
                  t.lineTo(-n, -3 * n),
                  t.lineTo(n, -3 * n),
                  t.lineTo(n, -n),
                  t.lineTo(3 * n, -n),
                  t.lineTo(3 * n, n),
                  t.lineTo(n, n),
                  t.lineTo(n, 3 * n),
                  t.lineTo(-n, 3 * n),
                  t.lineTo(-n, n),
                  t.lineTo(-3 * n, n),
                  t.closePath();
              }
            },
            Tt = Math.sqrt(1 / 3),
            jt = 2 * Tt,
            Rt = {
              draw: function(t, e) {
                var n = Math.sqrt(e / jt),
                  r = n * Tt;
                t.moveTo(0, -n),
                  t.lineTo(r, 0),
                  t.lineTo(0, n),
                  t.lineTo(-r, 0),
                  t.closePath();
              }
            },
            Nt = 0.8908130915292852,
            Mt = Math.sin(wt / 10) / Math.sin((7 * wt) / 10),
            Bt = Math.sin(Et / 10) * Mt,
            Ot = -Math.cos(Et / 10) * Mt,
            It = {
              draw: function(t, e) {
                var n = Math.sqrt(e * Nt),
                  r = Bt * n,
                  i = Ot * n;
                t.moveTo(0, -n), t.lineTo(r, i);
                for (var o = 1; o < 5; ++o) {
                  var s = (Et * o) / 5,
                    a = Math.cos(s),
                    u = Math.sin(s);
                  t.lineTo(u * n, -a * n),
                    t.lineTo(a * r - u * i, u * r + a * i);
                }
                t.closePath();
              }
            },
            Lt = {
              draw: function(t, e) {
                var n = Math.sqrt(e),
                  r = -n / 2;
                t.rect(r, r, n, n);
              }
            },
            Pt = Math.sqrt(3),
            Dt = {
              draw: function(t, e) {
                var n = -Math.sqrt(e / (3 * Pt));
                t.moveTo(0, 2 * n),
                  t.lineTo(-Pt * n, -n),
                  t.lineTo(Pt * n, -n),
                  t.closePath();
              }
            },
            Ct = -0.5,
            Ut = Math.sqrt(3) / 2,
            qt = 1 / Math.sqrt(12),
            Wt = 3 * (qt / 2 + 1),
            zt = {
              draw: function(t, e) {
                var n = Math.sqrt(e / Wt),
                  r = n / 2,
                  i = n * qt,
                  o = r,
                  s = n * qt + n,
                  a = -o,
                  u = s;
                t.moveTo(r, i),
                  t.lineTo(o, s),
                  t.lineTo(a, u),
                  t.lineTo(Ct * r - Ut * i, Ut * r + Ct * i),
                  t.lineTo(Ct * o - Ut * s, Ut * o + Ct * s),
                  t.lineTo(Ct * a - Ut * u, Ut * a + Ct * u),
                  t.lineTo(Ct * r + Ut * i, Ct * i - Ut * r),
                  t.lineTo(Ct * o + Ut * s, Ct * s - Ut * o),
                  t.lineTo(Ct * a + Ut * u, Ct * u - Ut * a),
                  t.closePath();
              }
            },
            Ft = [St, At, Rt, Lt, It, Dt, zt];
          (R.prototype = {
            areaStart: function() {
              this._line = 0;
            },
            areaEnd: function() {
              this._line = NaN;
            },
            lineStart: function() {
              (this._x0 = this._x1 = this._y0 = this._y1 = NaN),
                (this._point = 0);
            },
            lineEnd: function() {
              switch (this._point) {
                case 3:
                  j(this, this._x1, this._y1);
                case 2:
                  this._context.lineTo(this._x1, this._y1);
              }
              (this._line || (0 !== this._line && 1 === this._point)) &&
                this._context.closePath(),
                (this._line = 1 - this._line);
            },
            point: function(t, e) {
              switch (((t = +t), (e = +e), this._point)) {
                case 0:
                  (this._point = 1),
                    this._line
                      ? this._context.lineTo(t, e)
                      : this._context.moveTo(t, e);
                  break;
                case 1:
                  this._point = 2;
                  break;
                case 2:
                  (this._point = 3),
                    this._context.lineTo(
                      (5 * this._x0 + this._x1) / 6,
                      (5 * this._y0 + this._y1) / 6
                    );
                default:
                  j(this, t, e);
              }
              (this._x0 = this._x1),
                (this._x1 = t),
                (this._y0 = this._y1),
                (this._y1 = e);
            }
          }),
            (M.prototype = {
              areaStart: T,
              areaEnd: T,
              lineStart: function() {
                (this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN),
                  (this._point = 0);
              },
              lineEnd: function() {
                switch (this._point) {
                  case 1:
                    this._context.moveTo(this._x2, this._y2),
                      this._context.closePath();
                    break;
                  case 2:
                    this._context.moveTo(
                      (this._x2 + 2 * this._x3) / 3,
                      (this._y2 + 2 * this._y3) / 3
                    ),
                      this._context.lineTo(
                        (this._x3 + 2 * this._x2) / 3,
                        (this._y3 + 2 * this._y2) / 3
                      ),
                      this._context.closePath();
                    break;
                  case 3:
                    this.point(this._x2, this._y2),
                      this.point(this._x3, this._y3),
                      this.point(this._x4, this._y4);
                }
              },
              point: function(t, e) {
                switch (((t = +t), (e = +e), this._point)) {
                  case 0:
                    (this._point = 1), (this._x2 = t), (this._y2 = e);
                    break;
                  case 1:
                    (this._point = 2), (this._x3 = t), (this._y3 = e);
                    break;
                  case 2:
                    (this._point = 3),
                      (this._x4 = t),
                      (this._y4 = e),
                      this._context.moveTo(
                        (this._x0 + 4 * this._x1 + t) / 6,
                        (this._y0 + 4 * this._y1 + e) / 6
                      );
                    break;
                  default:
                    j(this, t, e);
                }
                (this._x0 = this._x1),
                  (this._x1 = t),
                  (this._y0 = this._y1),
                  (this._y1 = e);
              }
            }),
            (O.prototype = {
              areaStart: function() {
                this._line = 0;
              },
              areaEnd: function() {
                this._line = NaN;
              },
              lineStart: function() {
                (this._x0 = this._x1 = this._y0 = this._y1 = NaN),
                  (this._point = 0);
              },
              lineEnd: function() {
                (this._line || (0 !== this._line && 3 === this._point)) &&
                  this._context.closePath(),
                  (this._line = 1 - this._line);
              },
              point: function(t, e) {
                switch (((t = +t), (e = +e), this._point)) {
                  case 0:
                    this._point = 1;
                    break;
                  case 1:
                    this._point = 2;
                    break;
                  case 2:
                    this._point = 3;
                    var n = (this._x0 + 4 * this._x1 + t) / 6,
                      r = (this._y0 + 4 * this._y1 + e) / 6;
                    this._line
                      ? this._context.lineTo(n, r)
                      : this._context.moveTo(n, r);
                    break;
                  case 3:
                    this._point = 4;
                  default:
                    j(this, t, e);
                }
                (this._x0 = this._x1),
                  (this._x1 = t),
                  (this._y0 = this._y1),
                  (this._y1 = e);
              }
            }),
            (L.prototype = {
              lineStart: function() {
                (this._x = []), (this._y = []), this._basis.lineStart();
              },
              lineEnd: function() {
                var t = this._x,
                  e = this._y,
                  n = t.length - 1;
                if (n > 0)
                  for (
                    var r,
                      i = t[0],
                      o = e[0],
                      s = t[n] - i,
                      a = e[n] - o,
                      u = -1;
                    ++u <= n;

                  )
                    (r = u / n),
                      this._basis.point(
                        this._beta * t[u] + (1 - this._beta) * (i + r * s),
                        this._beta * e[u] + (1 - this._beta) * (o + r * a)
                      );
                (this._x = this._y = null), this._basis.lineEnd();
              },
              point: function(t, e) {
                this._x.push(+t), this._y.push(+e);
              }
            });
          var Yt = (function t(e) {
            function n(t) {
              return 1 === e ? new R(t) : new L(t, e);
            }
            return (
              (n.beta = function(e) {
                return t(+e);
              }),
              n
            );
          })(0.85);
          D.prototype = {
            areaStart: function() {
              this._line = 0;
            },
            areaEnd: function() {
              this._line = NaN;
            },
            lineStart: function() {
              (this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN),
                (this._point = 0);
            },
            lineEnd: function() {
              switch (this._point) {
                case 2:
                  this._context.lineTo(this._x2, this._y2);
                  break;
                case 3:
                  P(this, this._x1, this._y1);
              }
              (this._line || (0 !== this._line && 1 === this._point)) &&
                this._context.closePath(),
                (this._line = 1 - this._line);
            },
            point: function(t, e) {
              switch (((t = +t), (e = +e), this._point)) {
                case 0:
                  (this._point = 1),
                    this._line
                      ? this._context.lineTo(t, e)
                      : this._context.moveTo(t, e);
                  break;
                case 1:
                  (this._point = 2), (this._x1 = t), (this._y1 = e);
                  break;
                case 2:
                  this._point = 3;
                default:
                  P(this, t, e);
              }
              (this._x0 = this._x1),
                (this._x1 = this._x2),
                (this._x2 = t),
                (this._y0 = this._y1),
                (this._y1 = this._y2),
                (this._y2 = e);
            }
          };
          var Vt = (function t(e) {
            function n(t) {
              return new D(t, e);
            }
            return (
              (n.tension = function(e) {
                return t(+e);
              }),
              n
            );
          })(0);
          C.prototype = {
            areaStart: T,
            areaEnd: T,
            lineStart: function() {
              (this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN),
                (this._point = 0);
            },
            lineEnd: function() {
              switch (this._point) {
                case 1:
                  this._context.moveTo(this._x3, this._y3),
                    this._context.closePath();
                  break;
                case 2:
                  this._context.lineTo(this._x3, this._y3),
                    this._context.closePath();
                  break;
                case 3:
                  this.point(this._x3, this._y3),
                    this.point(this._x4, this._y4),
                    this.point(this._x5, this._y5);
              }
            },
            point: function(t, e) {
              switch (((t = +t), (e = +e), this._point)) {
                case 0:
                  (this._point = 1), (this._x3 = t), (this._y3 = e);
                  break;
                case 1:
                  (this._point = 2),
                    this._context.moveTo((this._x4 = t), (this._y4 = e));
                  break;
                case 2:
                  (this._point = 3), (this._x5 = t), (this._y5 = e);
                  break;
                default:
                  P(this, t, e);
              }
              (this._x0 = this._x1),
                (this._x1 = this._x2),
                (this._x2 = t),
                (this._y0 = this._y1),
                (this._y1 = this._y2),
                (this._y2 = e);
            }
          };
          var Kt = (function t(e) {
            function n(t) {
              return new C(t, e);
            }
            return (
              (n.tension = function(e) {
                return t(+e);
              }),
              n
            );
          })(0);
          U.prototype = {
            areaStart: function() {
              this._line = 0;
            },
            areaEnd: function() {
              this._line = NaN;
            },
            lineStart: function() {
              (this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN),
                (this._point = 0);
            },
            lineEnd: function() {
              (this._line || (0 !== this._line && 3 === this._point)) &&
                this._context.closePath(),
                (this._line = 1 - this._line);
            },
            point: function(t, e) {
              switch (((t = +t), (e = +e), this._point)) {
                case 0:
                  this._point = 1;
                  break;
                case 1:
                  this._point = 2;
                  break;
                case 2:
                  (this._point = 3),
                    this._line
                      ? this._context.lineTo(this._x2, this._y2)
                      : this._context.moveTo(this._x2, this._y2);
                  break;
                case 3:
                  this._point = 4;
                default:
                  P(this, t, e);
              }
              (this._x0 = this._x1),
                (this._x1 = this._x2),
                (this._x2 = t),
                (this._y0 = this._y1),
                (this._y1 = this._y2),
                (this._y2 = e);
            }
          };
          var Ht = (function t(e) {
            function n(t) {
              return new U(t, e);
            }
            return (
              (n.tension = function(e) {
                return t(+e);
              }),
              n
            );
          })(0);
          W.prototype = {
            areaStart: function() {
              this._line = 0;
            },
            areaEnd: function() {
              this._line = NaN;
            },
            lineStart: function() {
              (this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN),
                (this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0);
            },
            lineEnd: function() {
              switch (this._point) {
                case 2:
                  this._context.lineTo(this._x2, this._y2);
                  break;
                case 3:
                  this.point(this._x2, this._y2);
              }
              (this._line || (0 !== this._line && 1 === this._point)) &&
                this._context.closePath(),
                (this._line = 1 - this._line);
            },
            point: function(t, e) {
              if (((t = +t), (e = +e), this._point)) {
                var n = this._x2 - t,
                  r = this._y2 - e;
                this._l23_a = Math.sqrt(
                  (this._l23_2a = Math.pow(n * n + r * r, this._alpha))
                );
              }
              switch (this._point) {
                case 0:
                  (this._point = 1),
                    this._line
                      ? this._context.lineTo(t, e)
                      : this._context.moveTo(t, e);
                  break;
                case 1:
                  this._point = 2;
                  break;
                case 2:
                  this._point = 3;
                default:
                  q(this, t, e);
              }
              (this._l01_a = this._l12_a),
                (this._l12_a = this._l23_a),
                (this._l01_2a = this._l12_2a),
                (this._l12_2a = this._l23_2a),
                (this._x0 = this._x1),
                (this._x1 = this._x2),
                (this._x2 = t),
                (this._y0 = this._y1),
                (this._y1 = this._y2),
                (this._y2 = e);
            }
          };
          var Jt = (function t(e) {
            function n(t) {
              return e ? new W(t, e) : new D(t, 0);
            }
            return (
              (n.alpha = function(e) {
                return t(+e);
              }),
              n
            );
          })(0.5);
          z.prototype = {
            areaStart: T,
            areaEnd: T,
            lineStart: function() {
              (this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN),
                (this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0);
            },
            lineEnd: function() {
              switch (this._point) {
                case 1:
                  this._context.moveTo(this._x3, this._y3),
                    this._context.closePath();
                  break;
                case 2:
                  this._context.lineTo(this._x3, this._y3),
                    this._context.closePath();
                  break;
                case 3:
                  this.point(this._x3, this._y3),
                    this.point(this._x4, this._y4),
                    this.point(this._x5, this._y5);
              }
            },
            point: function(t, e) {
              if (((t = +t), (e = +e), this._point)) {
                var n = this._x2 - t,
                  r = this._y2 - e;
                this._l23_a = Math.sqrt(
                  (this._l23_2a = Math.pow(n * n + r * r, this._alpha))
                );
              }
              switch (this._point) {
                case 0:
                  (this._point = 1), (this._x3 = t), (this._y3 = e);
                  break;
                case 1:
                  (this._point = 2),
                    this._context.moveTo((this._x4 = t), (this._y4 = e));
                  break;
                case 2:
                  (this._point = 3), (this._x5 = t), (this._y5 = e);
                  break;
                default:
                  q(this, t, e);
              }
              (this._l01_a = this._l12_a),
                (this._l12_a = this._l23_a),
                (this._l01_2a = this._l12_2a),
                (this._l12_2a = this._l23_2a),
                (this._x0 = this._x1),
                (this._x1 = this._x2),
                (this._x2 = t),
                (this._y0 = this._y1),
                (this._y1 = this._y2),
                (this._y2 = e);
            }
          };
          var Xt = (function t(e) {
            function n(t) {
              return e ? new z(t, e) : new C(t, 0);
            }
            return (
              (n.alpha = function(e) {
                return t(+e);
              }),
              n
            );
          })(0.5);
          F.prototype = {
            areaStart: function() {
              this._line = 0;
            },
            areaEnd: function() {
              this._line = NaN;
            },
            lineStart: function() {
              (this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN),
                (this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0);
            },
            lineEnd: function() {
              (this._line || (0 !== this._line && 3 === this._point)) &&
                this._context.closePath(),
                (this._line = 1 - this._line);
            },
            point: function(t, e) {
              if (((t = +t), (e = +e), this._point)) {
                var n = this._x2 - t,
                  r = this._y2 - e;
                this._l23_a = Math.sqrt(
                  (this._l23_2a = Math.pow(n * n + r * r, this._alpha))
                );
              }
              switch (this._point) {
                case 0:
                  this._point = 1;
                  break;
                case 1:
                  this._point = 2;
                  break;
                case 2:
                  (this._point = 3),
                    this._line
                      ? this._context.lineTo(this._x2, this._y2)
                      : this._context.moveTo(this._x2, this._y2);
                  break;
                case 3:
                  this._point = 4;
                default:
                  q(this, t, e);
              }
              (this._l01_a = this._l12_a),
                (this._l12_a = this._l23_a),
                (this._l01_2a = this._l12_2a),
                (this._l12_2a = this._l23_2a),
                (this._x0 = this._x1),
                (this._x1 = this._x2),
                (this._x2 = t),
                (this._y0 = this._y1),
                (this._y1 = this._y2),
                (this._y2 = e);
            }
          };
          var Gt = (function t(e) {
            function n(t) {
              return e ? new F(t, e) : new U(t, 0);
            }
            return (
              (n.alpha = function(e) {
                return t(+e);
              }),
              n
            );
          })(0.5);
          (Y.prototype = {
            areaStart: T,
            areaEnd: T,
            lineStart: function() {
              this._point = 0;
            },
            lineEnd: function() {
              this._point && this._context.closePath();
            },
            point: function(t, e) {
              (t = +t),
                (e = +e),
                this._point
                  ? this._context.lineTo(t, e)
                  : ((this._point = 1), this._context.moveTo(t, e));
            }
          }),
            (G.prototype = {
              areaStart: function() {
                this._line = 0;
              },
              areaEnd: function() {
                this._line = NaN;
              },
              lineStart: function() {
                (this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN),
                  (this._point = 0);
              },
              lineEnd: function() {
                switch (this._point) {
                  case 2:
                    this._context.lineTo(this._x1, this._y1);
                    break;
                  case 3:
                    X(this, this._t0, J(this, this._t0));
                }
                (this._line || (0 !== this._line && 1 === this._point)) &&
                  this._context.closePath(),
                  (this._line = 1 - this._line);
              },
              point: function(t, e) {
                var n = NaN;
                if (((t = +t), (e = +e), t !== this._x1 || e !== this._y1)) {
                  switch (this._point) {
                    case 0:
                      (this._point = 1),
                        this._line
                          ? this._context.lineTo(t, e)
                          : this._context.moveTo(t, e);
                      break;
                    case 1:
                      this._point = 2;
                      break;
                    case 2:
                      (this._point = 3),
                        X(this, J(this, (n = H(this, t, e))), n);
                      break;
                    default:
                      X(this, this._t0, (n = H(this, t, e)));
                  }
                  (this._x0 = this._x1),
                    (this._x1 = t),
                    (this._y0 = this._y1),
                    (this._y1 = e),
                    (this._t0 = n);
                }
              }
            }),
            ((Z.prototype = Object.create(G.prototype)).point = function(t, e) {
              G.prototype.point.call(this, e, t);
            }),
            ($.prototype = {
              moveTo: function(t, e) {
                this._context.moveTo(e, t);
              },
              closePath: function() {
                this._context.closePath();
              },
              lineTo: function(t, e) {
                this._context.lineTo(e, t);
              },
              bezierCurveTo: function(t, e, n, r, i, o) {
                this._context.bezierCurveTo(e, t, r, n, o, i);
              }
            }),
            (et.prototype = {
              areaStart: function() {
                this._line = 0;
              },
              areaEnd: function() {
                this._line = NaN;
              },
              lineStart: function() {
                (this._x = []), (this._y = []);
              },
              lineEnd: function() {
                var t = this._x,
                  e = this._y,
                  n = t.length;
                if (n)
                  if (
                    (this._line
                      ? this._context.lineTo(t[0], e[0])
                      : this._context.moveTo(t[0], e[0]),
                    2 === n)
                  )
                    this._context.lineTo(t[1], e[1]);
                  else
                    for (
                      var r = nt(t), i = nt(e), o = 0, s = 1;
                      s < n;
                      ++o, ++s
                    )
                      this._context.bezierCurveTo(
                        r[0][o],
                        i[0][o],
                        r[1][o],
                        i[1][o],
                        t[s],
                        e[s]
                      );
                (this._line || (0 !== this._line && 1 === n)) &&
                  this._context.closePath(),
                  (this._line = 1 - this._line),
                  (this._x = this._y = null);
              },
              point: function(t, e) {
                this._x.push(+t), this._y.push(+e);
              }
            }),
            (it.prototype = {
              areaStart: function() {
                this._line = 0;
              },
              areaEnd: function() {
                this._line = NaN;
              },
              lineStart: function() {
                (this._x = this._y = NaN), (this._point = 0);
              },
              lineEnd: function() {
                0 < this._t &&
                  this._t < 1 &&
                  2 === this._point &&
                  this._context.lineTo(this._x, this._y),
                  (this._line || (0 !== this._line && 1 === this._point)) &&
                    this._context.closePath(),
                  this._line >= 0 &&
                    ((this._t = 1 - this._t), (this._line = 1 - this._line));
              },
              point: function(t, e) {
                switch (((t = +t), (e = +e), this._point)) {
                  case 0:
                    (this._point = 1),
                      this._line
                        ? this._context.lineTo(t, e)
                        : this._context.moveTo(t, e);
                    break;
                  case 1:
                    this._point = 2;
                  default:
                    if (this._t <= 0)
                      this._context.lineTo(this._x, e),
                        this._context.lineTo(t, e);
                    else {
                      var n = this._x * (1 - this._t) + t * this._t;
                      this._context.lineTo(n, this._y),
                        this._context.lineTo(n, e);
                    }
                }
                (this._x = t), (this._y = e);
              }
            });
          var Zt = Array.prototype.slice;
          (t.arc = h),
            (t.area = _),
            (t.line = g),
            (t.pie = b),
            (t.radialArea = S),
            (t.radialLine = k),
            (t.symbol = A),
            (t.symbols = Ft),
            (t.symbolCircle = St),
            (t.symbolCross = At),
            (t.symbolDiamond = Rt),
            (t.symbolSquare = Lt),
            (t.symbolStar = It),
            (t.symbolTriangle = Dt),
            (t.symbolWye = zt),
            (t.curveBasisClosed = B),
            (t.curveBasisOpen = I),
            (t.curveBasis = N),
            (t.curveBundle = Yt),
            (t.curveCardinalClosed = Kt),
            (t.curveCardinalOpen = Ht),
            (t.curveCardinal = Vt),
            (t.curveCatmullRomClosed = Xt),
            (t.curveCatmullRomOpen = Gt),
            (t.curveCatmullRom = Jt),
            (t.curveLinearClosed = V),
            (t.curveLinear = p),
            (t.curveMonotoneX = Q),
            (t.curveMonotoneY = tt),
            (t.curveNatural = rt),
            (t.curveStep = ot),
            (t.curveStepAfter = at),
            (t.curveStepBefore = st),
            (t.stack = ht),
            (t.stackOffsetExpand = ft),
            (t.stackOffsetNone = ut),
            (t.stackOffsetSilhouette = pt),
            (t.stackOffsetWiggle = dt),
            (t.stackOrderAscending = yt),
            (t.stackOrderDescending = _t),
            (t.stackOrderInsideOut = vt),
            (t.stackOrderNone = ct),
            (t.stackOrderReverse = mt),
            Object.defineProperty(t, '__esModule', { value: !0 });
        });
      },
      { 'd3-path': 23 }
    ],
    26: [
      function(t, e, n) {
        function r(t) {
          o.call(this, t),
            (this._options = t),
            (this._iterator = null),
            (this._operations = []);
        }
        var i = t('util'),
          o = t('abstract-leveldown').AbstractIterator;
        i.inherits(r, o),
          (r.prototype.setDb = function(t) {
            var e = (this._iterator = t.iterator(this._options));
            this._operations.forEach(function(t) {
              e[t.method].apply(e, t.args);
            });
          }),
          (r.prototype._operation = function(t, e) {
            return this._iterator
              ? this._iterator[t].apply(this._iterator, e)
              : void this._operations.push({ method: t, args: e });
          }),
          'next end'.split(' ').forEach(function(t) {
            r.prototype['_' + t] = function() {
              this._operation(t, arguments);
            };
          }),
          (e.exports = r);
      },
      { 'abstract-leveldown': 31, util: 105 }
    ],
    27: [
      function(t, e, n) {
        (function(n, r) {
          function i(t) {
            s.call(this, 'string' == typeof t ? t : ''),
              (this._db = void 0),
              (this._operations = []),
              (this._iterators = []);
          }
          var o = t('util'),
            s = t('abstract-leveldown').AbstractLevelDOWN,
            a = t('./deferred-iterator');
          o.inherits(i, s),
            (i.prototype.setDb = function(t) {
              (this._db = t),
                this._operations.forEach(function(e) {
                  t[e.method].apply(t, e.args);
                }),
                this._iterators.forEach(function(e) {
                  e.setDb(t);
                });
            }),
            (i.prototype._open = function(t, e) {
              return r.nextTick(e);
            }),
            (i.prototype._operation = function(t, e) {
              return this._db
                ? this._db[t].apply(this._db, e)
                : void this._operations.push({ method: t, args: e });
            }),
            'put get del batch approximateSize'.split(' ').forEach(function(t) {
              i.prototype['_' + t] = function() {
                this._operation(t, arguments);
              };
            }),
            (i.prototype._isBuffer = function(t) {
              return n.isBuffer(t);
            }),
            (i.prototype._iterator = function(t) {
              if (this._db) return this._db.iterator.apply(this._db, arguments);
              var e = new a(t);
              return this._iterators.push(e), e;
            }),
            (e.exports = i),
            (e.exports.DeferredIterator = a);
        }.call(this, { isBuffer: t('../is-buffer/index.js') }, t('_process')));
      },
      {
        '../is-buffer/index.js': 43,
        './deferred-iterator': 26,
        _process: 87,
        'abstract-leveldown': 31,
        util: 105
      }
    ],
    28: [
      function(t, e, n) {
        (function(t) {
          function n(t) {
            (this._db = t), (this._operations = []), (this._written = !1);
          }
          (n.prototype._checkWritten = function() {
            if (this._written)
              throw new Error('write() already called on this batch');
          }),
            (n.prototype.put = function(t, e) {
              this._checkWritten();
              var n = this._db._checkKey(t, 'key', this._db._isBuffer);
              if (n) throw n;
              return (
                this._db._isBuffer(t) || (t = String(t)),
                this._db._isBuffer(e) || (e = String(e)),
                'function' == typeof this._put
                  ? this._put(t, e)
                  : this._operations.push({ type: 'put', key: t, value: e }),
                this
              );
            }),
            (n.prototype.del = function(t) {
              this._checkWritten();
              var e = this._db._checkKey(t, 'key', this._db._isBuffer);
              if (e) throw e;
              return (
                this._db._isBuffer(t) || (t = String(t)),
                'function' == typeof this._del
                  ? this._del(t)
                  : this._operations.push({ type: 'del', key: t }),
                this
              );
            }),
            (n.prototype.clear = function() {
              return (
                this._checkWritten(),
                (this._operations = []),
                'function' == typeof this._clear && this._clear(),
                this
              );
            }),
            (n.prototype.write = function(e, n) {
              if (
                (this._checkWritten(),
                'function' == typeof e && (n = e),
                'function' != typeof n)
              )
                throw new Error('write() requires a callback argument');
              return (
                'object' != typeof e && (e = {}),
                (this._written = !0),
                'function' == typeof this._write
                  ? this._write(n)
                  : 'function' == typeof this._db._batch
                  ? this._db._batch(this._operations, e, n)
                  : void t.nextTick(n)
              );
            }),
            (e.exports = n);
        }.call(this, t('_process')));
      },
      { _process: 87 }
    ],
    29: [
      function(t, e, n) {
        arguments[4][12][0].apply(n, arguments);
      },
      { _process: 87, dup: 12 }
    ],
    30: [
      function(t, e, n) {
        (function(n, r) {
          function i(t) {
            if (!arguments.length || void 0 === t)
              throw new Error(
                'constructor requires at least a location argument'
              );
            if ('string' != typeof t)
              throw new Error(
                'constructor requires a location string argument'
              );
            (this.location = t), (this.status = 'new');
          }
          var o = t('xtend'),
            s = t('./abstract-iterator'),
            a = t('./abstract-chained-batch');
          (i.prototype.open = function(t, e) {
            var n = this,
              i = this.status;
            if (('function' == typeof t && (e = t), 'function' != typeof e))
              throw new Error('open() requires a callback argument');
            'object' != typeof t && (t = {}),
              (t.createIfMissing = 0 != t.createIfMissing),
              (t.errorIfExists = !!t.errorIfExists),
              'function' == typeof this._open
                ? ((this.status = 'opening'),
                  this._open(t, function(t) {
                    return t
                      ? ((n.status = i), e(t))
                      : ((n.status = 'open'), void e());
                  }))
                : ((this.status = 'open'), r.nextTick(e));
          }),
            (i.prototype.close = function(t) {
              var e = this,
                n = this.status;
              if ('function' != typeof t)
                throw new Error('close() requires a callback argument');
              'function' == typeof this._close
                ? ((this.status = 'closing'),
                  this._close(function(r) {
                    return r
                      ? ((e.status = n), t(r))
                      : ((e.status = 'closed'), void t());
                  }))
                : ((this.status = 'closed'), r.nextTick(t));
            }),
            (i.prototype.get = function(t, e, n) {
              var i;
              if (('function' == typeof e && (n = e), 'function' != typeof n))
                throw new Error('get() requires a callback argument');
              return (i = this._checkKey(t, 'key', this._isBuffer))
                ? n(i)
                : (this._isBuffer(t) || (t = String(t)),
                  'object' != typeof e && (e = {}),
                  (e.asBuffer = 0 != e.asBuffer),
                  'function' == typeof this._get
                    ? this._get(t, e, n)
                    : void r.nextTick(function() {
                        n(new Error('NotFound'));
                      }));
            }),
            (i.prototype.put = function(t, e, n, i) {
              var o;
              if (('function' == typeof n && (i = n), 'function' != typeof i))
                throw new Error('put() requires a callback argument');
              return (o = this._checkKey(t, 'key', this._isBuffer))
                ? i(o)
                : (this._isBuffer(t) || (t = String(t)),
                  null == e ||
                    this._isBuffer(e) ||
                    r.browser ||
                    (e = String(e)),
                  'object' != typeof n && (n = {}),
                  'function' == typeof this._put
                    ? this._put(t, e, n, i)
                    : void r.nextTick(i));
            }),
            (i.prototype.del = function(t, e, n) {
              var i;
              if (('function' == typeof e && (n = e), 'function' != typeof n))
                throw new Error('del() requires a callback argument');
              return (i = this._checkKey(t, 'key', this._isBuffer))
                ? n(i)
                : (this._isBuffer(t) || (t = String(t)),
                  'object' != typeof e && (e = {}),
                  'function' == typeof this._del
                    ? this._del(t, e, n)
                    : void r.nextTick(n));
            }),
            (i.prototype.batch = function(t, e, n) {
              if (!arguments.length) return this._chainedBatch();
              if (
                ('function' == typeof e && (n = e),
                'function' == typeof t && (n = t),
                'function' != typeof n)
              )
                throw new Error('batch(array) requires a callback argument');
              if (!Array.isArray(t))
                return n(new Error('batch(array) requires an array argument'));
              (e && 'object' == typeof e) || (e = {});
              for (var i, o, s = 0, a = t.length; s < a; s++)
                if (((i = t[s]), 'object' == typeof i)) {
                  if ((o = this._checkKey(i.type, 'type', this._isBuffer)))
                    return n(o);
                  if ((o = this._checkKey(i.key, 'key', this._isBuffer)))
                    return n(o);
                }
              return 'function' == typeof this._batch
                ? this._batch(t, e, n)
                : void r.nextTick(n);
            }),
            (i.prototype.approximateSize = function(t, e, n) {
              if (
                null == t ||
                null == e ||
                'function' == typeof t ||
                'function' == typeof e
              )
                throw new Error(
                  'approximateSize() requires valid `start`, `end` and `callback` arguments'
                );
              if ('function' != typeof n)
                throw new Error(
                  'approximateSize() requires a callback argument'
                );
              return (
                this._isBuffer(t) || (t = String(t)),
                this._isBuffer(e) || (e = String(e)),
                'function' == typeof this._approximateSize
                  ? this._approximateSize(t, e, n)
                  : void r.nextTick(function() {
                      n(null, 0);
                    })
              );
            }),
            (i.prototype._setupIteratorOptions = function(t) {
              var e = this;
              return (
                (t = o(t)),
                ['start', 'end', 'gt', 'gte', 'lt', 'lte'].forEach(function(n) {
                  t[n] && e._isBuffer(t[n]) && 0 === t[n].length && delete t[n];
                }),
                (t.reverse = !!t.reverse),
                (t.keys = 0 != t.keys),
                (t.values = 0 != t.values),
                (t.limit = 'limit' in t ? t.limit : -1),
                (t.keyAsBuffer = 0 != t.keyAsBuffer),
                (t.valueAsBuffer = 0 != t.valueAsBuffer),
                t
              );
            }),
            (i.prototype.iterator = function(t) {
              return (
                'object' != typeof t && (t = {}),
                (t = this._setupIteratorOptions(t)),
                'function' == typeof this._iterator
                  ? this._iterator(t)
                  : new s(this)
              );
            }),
            (i.prototype._chainedBatch = function() {
              return new a(this);
            }),
            (i.prototype._isBuffer = function(t) {
              return n.isBuffer(t);
            }),
            (i.prototype._checkKey = function(t, e) {
              if (null === t || void 0 === t)
                return new Error(e + ' cannot be `null` or `undefined`');
              if (this._isBuffer(t)) {
                if (0 === t.length)
                  return new Error(e + ' cannot be an empty Buffer');
              } else if ('' === String(t))
                return new Error(e + ' cannot be an empty String');
            }),
            (e.exports = i);
        }.call(
          this,
          { isBuffer: t('../../../is-buffer/index.js') },
          t('_process')
        ));
      },
      {
        '../../../is-buffer/index.js': 43,
        './abstract-chained-batch': 28,
        './abstract-iterator': 29,
        _process: 87,
        xtend: 33
      }
    ],
    31: [
      function(t, e, n) {
        (n.AbstractLevelDOWN = t('./abstract-leveldown')),
          (n.AbstractIterator = t('./abstract-iterator')),
          (n.AbstractChainedBatch = t('./abstract-chained-batch')),
          (n.isLevelDOWN = t('./is-leveldown'));
      },
      {
        './abstract-chained-batch': 28,
        './abstract-iterator': 29,
        './abstract-leveldown': 30,
        './is-leveldown': 32
      }
    ],
    32: [
      function(t, e, n) {
        function r(t) {
          return (
            !(!t || 'object' != typeof t) &&
            Object.keys(i.prototype)
              .filter(function(t) {
                return '_' != t[0] && 'approximateSize' != t;
              })
              .every(function(e) {
                return 'function' == typeof t[e];
              })
          );
        }
        var i = t('./abstract-leveldown');
        e.exports = r;
      },
      { './abstract-leveldown': 30 }
    ],
    33: [
      function(t, e, n) {
        function r() {
          for (var t = {}, e = 0; e < arguments.length; e++) {
            var n = arguments[e];
            for (var r in n) i.call(n, r) && (t[r] = n[r]);
          }
          return t;
        }
        e.exports = r;
        var i = Object.prototype.hasOwnProperty;
      },
      {}
    ],
    34: [
      function(t, e, n) {
        !(function(t) {
          function e() {
            return '' === c.hash || '#' === c.hash;
          }
          function n(t, e) {
            for (var n = 0; n < t.length; n += 1)
              if (e(t[n], n, t) === !1) return;
          }
          function r(t) {
            for (var e = [], n = 0, r = t.length; n < r; n++)
              e = e.concat(t[n]);
            return e;
          }
          function i(t, e, n) {
            if (!t.length) return n();
            var r = 0;
            !(function i() {
              e(t[r], function(e) {
                e || e === !1
                  ? (n(e), (n = function() {}))
                  : ((r += 1), r === t.length ? n() : i());
              });
            })();
          }
          function o(t, e, n) {
            n = t;
            for (var r in e)
              if (e.hasOwnProperty(r) && ((n = e[r](t)), n !== t)) break;
            return n === t ? '([._a-zA-Z0-9-%()]+)' : n;
          }
          function a(t, e) {
            for (
              var n, r = 0, i = '';
              (n = t.substr(r).match(/[^\w\d\- %@&]*\*[^\w\d\- %@&]*/));

            )
              (r = n.index + n[0].length),
                (n[0] = n[0].replace(/^\*/, '([_.()!\\ %@&a-zA-Z0-9-]+)')),
                (i += t.substr(0, n.index) + n[0]);
            t = i += t.substr(r);
            var s,
              a,
              u = t.match(/:([^\/]+)/gi);
            if (u) {
              a = u.length;
              for (var c = 0; c < a; c++)
                (s = u[c]),
                  (t =
                    '::' === s.slice(0, 2)
                      ? s.slice(1)
                      : t.replace(s, o(s, e)));
            }
            return t;
          }
          function u(t, e, n, r) {
            var i,
              o = 0,
              s = 0,
              a = 0,
              n = (n || '(').toString(),
              r = (r || ')').toString();
            for (i = 0; i < t.length; i++) {
              var u = t[i];
              if (
                u.indexOf(n, o) > u.indexOf(r, o) ||
                (~u.indexOf(n, o) && !~u.indexOf(r, o)) ||
                (!~u.indexOf(n, o) && ~u.indexOf(r, o))
              ) {
                if (
                  ((s = u.indexOf(n, o)),
                  (a = u.indexOf(r, o)),
                  (~s && !~a) || (!~s && ~a))
                ) {
                  var c = t.slice(0, (i || 1) + 1).join(e);
                  t = [c].concat(t.slice((i || 1) + 1));
                }
                (o = (a > s ? a : s) + 1), (i = 0);
              } else o = 0;
            }
            return t;
          }
          var c = document.location,
            l = {
              mode: 'modern',
              hash: c.hash,
              history: !1,
              check: function() {
                var t = c.hash;
                t != this.hash && ((this.hash = t), this.onHashChanged());
              },
              fire: function() {
                'modern' === this.mode
                  ? this.history === !0
                    ? window.onpopstate()
                    : window.onhashchange()
                  : this.onHashChanged();
              },
              init: function(t, e) {
                function n(t) {
                  for (var e = 0, n = h.listeners.length; e < n; e++)
                    h.listeners[e](t);
                }
                var r = this;
                if (
                  ((this.history = e),
                  h.listeners || (h.listeners = []),
                  'onhashchange' in window &&
                    (void 0 === document.documentMode ||
                      document.documentMode > 7))
                )
                  this.history === !0
                    ? setTimeout(function() {
                        window.onpopstate = n;
                      }, 500)
                    : (window.onhashchange = n),
                    (this.mode = 'modern');
                else {
                  var i = document.createElement('iframe');
                  (i.id = 'state-frame'),
                    (i.style.display = 'none'),
                    document.body.appendChild(i),
                    this.writeFrame(''),
                    'onpropertychange' in document &&
                      'attachEvent' in document &&
                      document.attachEvent('onpropertychange', function() {
                        'location' === event.propertyName && r.check();
                      }),
                    window.setInterval(function() {
                      r.check();
                    }, 50),
                    (this.onHashChanged = n),
                    (this.mode = 'legacy');
                }
                return h.listeners.push(t), this.mode;
              },
              destroy: function(t) {
                if (h && h.listeners)
                  for (var e = h.listeners, n = e.length - 1; n >= 0; n--)
                    e[n] === t && e.splice(n, 1);
              },
              setHash: function(t) {
                return (
                  'legacy' === this.mode && this.writeFrame(t),
                  this.history === !0
                    ? (window.history.pushState({}, document.title, t),
                      this.fire())
                    : (c.hash = '/' === t[0] ? t : '/' + t),
                  this
                );
              },
              writeFrame: function(t) {
                var e = document.getElementById('state-frame'),
                  n = e.contentDocument || e.contentWindow.document;
                n.open(),
                  n.write(
                    "<script>_hash = '" +
                      t +
                      "'; onload = parent.listener.syncHash;<script>"
                  ),
                  n.close();
              },
              syncHash: function() {
                var t = this._hash;
                return t != c.hash && (c.hash = t), this;
              },
              onHashChanged: function() {}
            },
            h = (t.Router = function(t) {
              return this instanceof h
                ? ((this.params = {}),
                  (this.routes = {}),
                  (this.methods = ['on', 'once', 'after', 'before']),
                  (this.scope = []),
                  (this._methods = {}),
                  (this._insert = this.insert),
                  (this.insert = this.insertEx),
                  (this.historySupport =
                    null !=
                    (null != window.history ? window.history.pushState : null)),
                  this.configure(),
                  void this.mount(t || {}))
                : new h(t);
            });
          (h.prototype.init = function(t) {
            var n,
              r = this;
            return (
              (this.handler = function(t) {
                var e = (t && t.newURL) || window.location.hash,
                  n = r.history === !0 ? r.getPath() : e.replace(/.*#/, '');
                r.dispatch('on', '/' === n.charAt(0) ? n : '/' + n);
              }),
              l.init(this.handler, this.history),
              this.history === !1
                ? e() && t
                  ? (c.hash = t)
                  : e() ||
                    r.dispatch('on', '/' + c.hash.replace(/^(#\/|#|\/)/, ''))
                : (this.convert_hash_in_init
                    ? ((n =
                        e() && t ? t : e() ? null : c.hash.replace(/^#/, '')),
                      n && window.history.replaceState({}, document.title, n))
                    : (n = this.getPath()),
                  (n || this.run_in_init === !0) && this.handler()),
              this
            );
          }),
            (h.prototype.explode = function() {
              var t = this.history === !0 ? this.getPath() : c.hash;
              return (
                '/' === t.charAt(1) && (t = t.slice(1)),
                t.slice(1, t.length).split('/')
              );
            }),
            (h.prototype.setRoute = function(t, e, n) {
              var r = this.explode();
              return (
                'number' == typeof t && 'string' == typeof e
                  ? (r[t] = e)
                  : 'string' == typeof n
                  ? r.splice(t, e, s)
                  : (r = [t]),
                l.setHash(r.join('/')),
                r
              );
            }),
            (h.prototype.insertEx = function(t, e, n, r) {
              return (
                'once' === t &&
                  ((t = 'on'),
                  (n = (function(t) {
                    var e = !1;
                    return function() {
                      if (!e) return (e = !0), t.apply(this, arguments);
                    };
                  })(n))),
                this._insert(t, e, n, r)
              );
            }),
            (h.prototype.getRoute = function(t) {
              var e = t;
              if ('number' == typeof t) e = this.explode()[t];
              else if ('string' == typeof t) {
                var n = this.explode();
                e = n.indexOf(t);
              } else e = this.explode();
              return e;
            }),
            (h.prototype.destroy = function() {
              return l.destroy(this.handler), this;
            }),
            (h.prototype.getPath = function() {
              var t = window.location.pathname;
              return '/' !== t.substr(0, 1) && (t = '/' + t), t;
            });
          var f = /\?.*/;
          (h.prototype.configure = function(t) {
            t = t || {};
            for (var e = 0; e < this.methods.length; e++)
              this._methods[this.methods[e]] = !0;
            return (
              (this.recurse = t.recurse || this.recurse || !1),
              (this.async = t.async || !1),
              (this.delimiter = t.delimiter || '/'),
              (this.strict = 'undefined' == typeof t.strict || t.strict),
              (this.notfound = t.notfound),
              (this.resource = t.resource),
              (this.history = (t.html5history && this.historySupport) || !1),
              (this.run_in_init =
                this.history === !0 && t.run_handler_in_init !== !1),
              (this.convert_hash_in_init =
                this.history === !0 && t.convert_hash_in_init !== !1),
              (this.every = {
                after: t.after || null,
                before: t.before || null,
                on: t.on || null
              }),
              this
            );
          }),
            (h.prototype.param = function(t, e) {
              ':' !== t[0] && (t = ':' + t);
              var n = new RegExp(t, 'g');
              return (
                (this.params[t] = function(t) {
                  return t.replace(n, e.source || e);
                }),
                this
              );
            }),
            (h.prototype.on = h.prototype.route = function(t, e, n) {
              var r = this;
              return (
                n || 'function' != typeof e || ((n = e), (e = t), (t = 'on')),
                Array.isArray(e)
                  ? e.forEach(function(e) {
                      r.on(t, e, n);
                    })
                  : (e.source && (e = e.source.replace(/\\\//gi, '/')),
                    Array.isArray(t)
                      ? t.forEach(function(t) {
                          r.on(t.toLowerCase(), e, n);
                        })
                      : ((e = e.split(new RegExp(this.delimiter))),
                        (e = u(e, this.delimiter)),
                        void this.insert(t, this.scope.concat(e), n)))
              );
            }),
            (h.prototype.path = function(t, e) {
              var n = this.scope.length;
              t.source && (t = t.source.replace(/\\\//gi, '/')),
                (t = t.split(new RegExp(this.delimiter))),
                (t = u(t, this.delimiter)),
                (this.scope = this.scope.concat(t)),
                e.call(this, this),
                this.scope.splice(n, t.length);
            }),
            (h.prototype.dispatch = function(t, e, n) {
              function r() {
                (o.last = s.after), o.invoke(o.runlist(s), o, n);
              }
              var i,
                o = this,
                s = this.traverse(t, e.replace(f, ''), this.routes, ''),
                a = this._invoked;
              return (
                (this._invoked = !0),
                s && 0 !== s.length
                  ? ('forward' === this.recurse && (s = s.reverse()),
                    (i =
                      this.every && this.every.after
                        ? [this.every.after].concat(this.last)
                        : [this.last]),
                    i && i.length > 0 && a
                      ? (this.async
                          ? this.invoke(i, this, r)
                          : (this.invoke(i, this), r()),
                        !0)
                      : (r(), !0))
                  : ((this.last = []),
                    'function' == typeof this.notfound &&
                      this.invoke([this.notfound], { method: t, path: e }, n),
                    !1)
              );
            }),
            (h.prototype.invoke = function(t, e, r) {
              var o,
                s = this;
              this.async
                ? ((o = function(n, r) {
                    return Array.isArray(n)
                      ? i(n, o, r)
                      : void (
                          'function' == typeof n &&
                          n.apply(e, (t.captures || []).concat(r))
                        );
                  }),
                  i(t, o, function() {
                    r && r.apply(e, arguments);
                  }))
                : ((o = function(r) {
                    return Array.isArray(r)
                      ? n(r, o)
                      : 'function' == typeof r
                      ? r.apply(e, t.captures || [])
                      : void (
                          'string' == typeof r &&
                          s.resource &&
                          s.resource[r].apply(e, t.captures || [])
                        );
                  }),
                  n(t, o));
            }),
            (h.prototype.traverse = function(t, e, n, r, i) {
              function o(t) {
                function e(t) {
                  for (var n = [], r = 0; r < t.length; r++)
                    n[r] = Array.isArray(t[r]) ? e(t[r]) : t[r];
                  return n;
                }
                function n(t) {
                  for (var e = t.length - 1; e >= 0; e--)
                    Array.isArray(t[e])
                      ? (n(t[e]), 0 === t[e].length && t.splice(e, 1))
                      : i(t[e]) || t.splice(e, 1);
                }
                if (!i) return t;
                var r = e(t);
                return (
                  (r.matched = t.matched),
                  (r.captures = t.captures),
                  (r.after = t.after.filter(i)),
                  n(r),
                  r
                );
              }
              var s,
                a,
                u,
                c,
                l = [];
              if (e === this.delimiter && n[t])
                return (
                  (c = [[n.before, n[t]].filter(Boolean)]),
                  (c.after = [n.after].filter(Boolean)),
                  (c.matched = !0),
                  (c.captures = []),
                  o(c)
                );
              for (var h in n)
                if (
                  n.hasOwnProperty(h) &&
                  (!this._methods[h] ||
                    (this._methods[h] &&
                      'object' == typeof n[h] &&
                      !Array.isArray(n[h])))
                ) {
                  if (
                    ((s = a = r + this.delimiter + h),
                    this.strict || (a += '[' + this.delimiter + ']?'),
                    (u = e.match(new RegExp('^' + a))),
                    !u)
                  )
                    continue;
                  if (u[0] && u[0] == e && n[h][t])
                    return (
                      (c = [[n[h].before, n[h][t]].filter(Boolean)]),
                      (c.after = [n[h].after].filter(Boolean)),
                      (c.matched = !0),
                      (c.captures = u.slice(1)),
                      this.recurse &&
                        n === this.routes &&
                        (c.push([n.before, n.on].filter(Boolean)),
                        (c.after = c.after.concat([n.after].filter(Boolean)))),
                      o(c)
                    );
                  if (((c = this.traverse(t, e, n[h], s)), c.matched))
                    return (
                      c.length > 0 && (l = l.concat(c)),
                      this.recurse &&
                        (l.push([n[h].before, n[h].on].filter(Boolean)),
                        (c.after = c.after.concat(
                          [n[h].after].filter(Boolean)
                        )),
                        n === this.routes &&
                          (l.push([n.before, n.on].filter(Boolean)),
                          (c.after = c.after.concat(
                            [n.after].filter(Boolean)
                          )))),
                      (l.matched = !0),
                      (l.captures = c.captures),
                      (l.after = c.after),
                      o(l)
                    );
                }
              return !1;
            }),
            (h.prototype.insert = function(t, e, n, r) {
              var i, o, s, u, c;
              if (
                ((e = e.filter(function(t) {
                  return t && t.length > 0;
                })),
                (r = r || this.routes),
                (c = e.shift()),
                /\:|\*/.test(c) &&
                  !/\\d|\\w/.test(c) &&
                  (c = a(c, this.params)),
                e.length > 0)
              )
                return (r[c] = r[c] || {}), this.insert(t, e, n, r[c]);
              if (c || e.length || r !== this.routes) {
                if (
                  ((o = typeof r[c]),
                  (s = Array.isArray(r[c])),
                  r[c] && !s && 'object' == o)
                )
                  switch ((i = typeof r[c][t])) {
                    case 'function':
                      return void (r[c][t] = [r[c][t], n]);
                    case 'object':
                      return void r[c][t].push(n);
                    case 'undefined':
                      return void (r[c][t] = n);
                  }
                else if ('undefined' == o)
                  return (u = {}), (u[t] = n), void (r[c] = u);
                throw new Error('Invalid route context: ' + o);
              }
              switch ((i = typeof r[t])) {
                case 'function':
                  return void (r[t] = [r[t], n]);
                case 'object':
                  return void r[t].push(n);
                case 'undefined':
                  return void (r[t] = n);
              }
            }),
            (h.prototype.extend = function(t) {
              function e(t) {
                (r._methods[t] = !0),
                  (r[t] = function() {
                    var e = 1 === arguments.length ? [t, ''] : [t];
                    r.on.apply(
                      r,
                      e.concat(Array.prototype.slice.call(arguments))
                    );
                  });
              }
              var n,
                r = this,
                i = t.length;
              for (n = 0; n < i; n++) e(t[n]);
            }),
            (h.prototype.runlist = function(t) {
              var e =
                this.every && this.every.before
                  ? [this.every.before].concat(r(t))
                  : r(t);
              return (
                this.every && this.every.on && e.push(this.every.on),
                (e.captures = t.captures),
                (e.source = t.source),
                e
              );
            }),
            (h.prototype.mount = function(t, e) {
              function n(e, n) {
                var i = e,
                  o = e.split(r.delimiter),
                  s = typeof t[e],
                  a = '' === o[0] || !r._methods[o[0]],
                  c = a ? 'on' : i;
                return (
                  a &&
                    ((i = i.slice(
                      (i.match(new RegExp('^' + r.delimiter)) || [''])[0].length
                    )),
                    o.shift()),
                  a && 'object' === s && !Array.isArray(t[e])
                    ? ((n = n.concat(o)), void r.mount(t[e], n))
                    : (a &&
                        ((n = n.concat(i.split(r.delimiter))),
                        (n = u(n, r.delimiter))),
                      void r.insert(c, n, t[e]))
                );
              }
              if (t && 'object' == typeof t && !Array.isArray(t)) {
                var r = this;
                (e = e || []), Array.isArray(e) || (e = e.split(r.delimiter));
                for (var i in t) t.hasOwnProperty(i) && n(i, e.slice(0));
              }
            });
        })('object' == typeof n ? n : window);
      },
      {}
    ],
    35: [
      function(t, e, n) {
        function r(t, e, n) {
          s(
            this,
            {
              type: t,
              name: t,
              cause: 'string' != typeof e ? e : n,
              message: e && 'string' != typeof e ? e.message : e
            },
            'ewr'
          );
        }
        function i(t, e) {
          Error.call(this),
            Error.captureStackTrace &&
              Error.captureStackTrace(this, arguments.callee),
            r.call(this, 'CustomError', t, e);
        }
        function o(t, e, n) {
          var o = function(n, i) {
            r.call(this, e, n, i),
              'FilesystemError' == e &&
                ((this.code = this.cause.code),
                (this.path = this.cause.path),
                (this.errno = this.cause.errno),
                (this.message =
                  (t.errno[this.cause.errno]
                    ? t.errno[this.cause.errno].description
                    : this.cause.message) +
                  (this.cause.path ? ' [' + this.cause.path + ']' : ''))),
              Error.call(this),
              Error.captureStackTrace &&
                Error.captureStackTrace(this, arguments.callee);
          };
          return (o.prototype = n ? new n() : new i()), o;
        }
        var s = t('prr');
        (i.prototype = new Error()),
          (e.exports = function(t) {
            var e = function(e, n) {
              return o(t, e, n);
            };
            return {
              CustomError: i,
              FilesystemError: e('FilesystemError'),
              createError: e
            };
          });
      },
      { prr: 37 }
    ],
    36: [
      function(t, e, n) {
        var r = (e.exports.all = [
          {
            errno: -2,
            code: 'ENOENT',
            description: 'no such file or directory'
          },
          { errno: -1, code: 'UNKNOWN', description: 'unknown error' },
          { errno: 0, code: 'OK', description: 'success' },
          { errno: 1, code: 'EOF', description: 'end of file' },
          { errno: 2, code: 'EADDRINFO', description: 'getaddrinfo error' },
          { errno: 3, code: 'EACCES', description: 'permission denied' },
          {
            errno: 4,
            code: 'EAGAIN',
            description: 'resource temporarily unavailable'
          },
          {
            errno: 5,
            code: 'EADDRINUSE',
            description: 'address already in use'
          },
          {
            errno: 6,
            code: 'EADDRNOTAVAIL',
            description: 'address not available'
          },
          {
            errno: 7,
            code: 'EAFNOSUPPORT',
            description: 'address family not supported'
          },
          {
            errno: 8,
            code: 'EALREADY',
            description: 'connection already in progress'
          },
          { errno: 9, code: 'EBADF', description: 'bad file descriptor' },
          { errno: 10, code: 'EBUSY', description: 'resource busy or locked' },
          {
            errno: 11,
            code: 'ECONNABORTED',
            description: 'software caused connection abort'
          },
          {
            errno: 12,
            code: 'ECONNREFUSED',
            description: 'connection refused'
          },
          {
            errno: 13,
            code: 'ECONNRESET',
            description: 'connection reset by peer'
          },
          {
            errno: 14,
            code: 'EDESTADDRREQ',
            description: 'destination address required'
          },
          {
            errno: 15,
            code: 'EFAULT',
            description: 'bad address in system call argument'
          },
          {
            errno: 16,
            code: 'EHOSTUNREACH',
            description: 'host is unreachable'
          },
          { errno: 17, code: 'EINTR', description: 'interrupted system call' },
          { errno: 18, code: 'EINVAL', description: 'invalid argument' },
          {
            errno: 19,
            code: 'EISCONN',
            description: 'socket is already connected'
          },
          { errno: 20, code: 'EMFILE', description: 'too many open files' },
          { errno: 21, code: 'EMSGSIZE', description: 'message too long' },
          { errno: 22, code: 'ENETDOWN', description: 'network is down' },
          {
            errno: 23,
            code: 'ENETUNREACH',
            description: 'network is unreachable'
          },
          { errno: 24, code: 'ENFILE', description: 'file table overflow' },
          {
            errno: 25,
            code: 'ENOBUFS',
            description: 'no buffer space available'
          },
          { errno: 26, code: 'ENOMEM', description: 'not enough memory' },
          { errno: 27, code: 'ENOTDIR', description: 'not a directory' },
          {
            errno: 28,
            code: 'EISDIR',
            description: 'illegal operation on a directory'
          },
          {
            errno: 29,
            code: 'ENONET',
            description: 'machine is not on the network'
          },
          {
            errno: 31,
            code: 'ENOTCONN',
            description: 'socket is not connected'
          },
          {
            errno: 32,
            code: 'ENOTSOCK',
            description: 'socket operation on non-socket'
          },
          {
            errno: 33,
            code: 'ENOTSUP',
            description: 'operation not supported on socket'
          },
          {
            errno: 34,
            code: 'ENOENT',
            description: 'no such file or directory'
          },
          {
            errno: 35,
            code: 'ENOSYS',
            description: 'function not implemented'
          },
          { errno: 36, code: 'EPIPE', description: 'broken pipe' },
          { errno: 37, code: 'EPROTO', description: 'protocol error' },
          {
            errno: 38,
            code: 'EPROTONOSUPPORT',
            description: 'protocol not supported'
          },
          {
            errno: 39,
            code: 'EPROTOTYPE',
            description: 'protocol wrong type for socket'
          },
          { errno: 40, code: 'ETIMEDOUT', description: 'connection timed out' },
          {
            errno: 41,
            code: 'ECHARSET',
            description: 'invalid Unicode character'
          },
          {
            errno: 42,
            code: 'EAIFAMNOSUPPORT',
            description: 'address family for hostname not supported'
          },
          {
            errno: 44,
            code: 'EAISERVICE',
            description: 'servname not supported for ai_socktype'
          },
          {
            errno: 45,
            code: 'EAISOCKTYPE',
            description: 'ai_socktype not supported'
          },
          {
            errno: 46,
            code: 'ESHUTDOWN',
            description: 'cannot send after transport endpoint shutdown'
          },
          { errno: 47, code: 'EEXIST', description: 'file already exists' },
          { errno: 48, code: 'ESRCH', description: 'no such process' },
          { errno: 49, code: 'ENAMETOOLONG', description: 'name too long' },
          { errno: 50, code: 'EPERM', description: 'operation not permitted' },
          {
            errno: 51,
            code: 'ELOOP',
            description: 'too many symbolic links encountered'
          },
          {
            errno: 52,
            code: 'EXDEV',
            description: 'cross-device link not permitted'
          },
          { errno: 53, code: 'ENOTEMPTY', description: 'directory not empty' },
          { errno: 54, code: 'ENOSPC', description: 'no space left on device' },
          { errno: 55, code: 'EIO', description: 'i/o error' },
          { errno: 56, code: 'EROFS', description: 'read-only file system' },
          { errno: 57, code: 'ENODEV', description: 'no such device' },
          { errno: 58, code: 'ESPIPE', description: 'invalid seek' },
          { errno: 59, code: 'ECANCELED', description: 'operation canceled' }
        ]);
        (e.exports.errno = {}),
          (e.exports.code = {}),
          r.forEach(function(t) {
            (e.exports.errno[t.errno] = t), (e.exports.code[t.code] = t);
          }),
          (e.exports.custom = t('./custom')(e.exports)),
          (e.exports.create = e.exports.custom.createError);
      },
      { './custom': 35 }
    ],
    37: [
      function(t, e, n) {
        !(function(t, n, r) {
          'undefined' != typeof e && e.exports
            ? (e.exports = r())
            : (n[t] = r());
        })('prr', this, function() {
          var t =
              'function' == typeof Object.defineProperty
                ? function(t, e, n) {
                    return Object.defineProperty(t, e, n), t;
                  }
                : function(t, e, n) {
                    return (t[e] = n.value), t;
                  },
            e = function(t, e) {
              var n = 'object' == typeof e,
                r = !n && 'string' == typeof e,
                i = function(t) {
                  return n ? !!e[t] : !!r && e.indexOf(t[0]) > -1;
                };
              return {
                enumerable: i('enumerable'),
                configurable: i('configurable'),
                writable: i('writable'),
                value: t
              };
            },
            n = function(n, r, i, o) {
              var s;
              if (((o = e(i, o)), 'object' == typeof r)) {
                for (s in r)
                  Object.hasOwnProperty.call(r, s) &&
                    ((o.value = r[s]), t(n, s, o));
                return n;
              }
              return t(n, r, o);
            };
          return n;
        });
      },
      {}
    ],
    38: [
      function(t, e, n) {
        function r() {
          (this._events = this._events || {}),
            (this._maxListeners = this._maxListeners || void 0);
        }
        function i(t) {
          return 'function' == typeof t;
        }
        function o(t) {
          return 'number' == typeof t;
        }
        function s(t) {
          return 'object' == typeof t && null !== t;
        }
        function a(t) {
          return void 0 === t;
        }
        (e.exports = r),
          (r.EventEmitter = r),
          (r.prototype._events = void 0),
          (r.prototype._maxListeners = void 0),
          (r.defaultMaxListeners = 10),
          (r.prototype.setMaxListeners = function(t) {
            if (!o(t) || t < 0 || isNaN(t))
              throw TypeError('n must be a positive number');
            return (this._maxListeners = t), this;
          }),
          (r.prototype.emit = function(t) {
            var e, n, r, o, u, c;
            if (
              (this._events || (this._events = {}),
              'error' === t &&
                (!this._events.error ||
                  (s(this._events.error) && !this._events.error.length)))
            ) {
              if (((e = arguments[1]), e instanceof Error)) throw e;
              throw TypeError('Uncaught, unspecified "error" event.');
            }
            if (((n = this._events[t]), a(n))) return !1;
            if (i(n))
              switch (arguments.length) {
                case 1:
                  n.call(this);
                  break;
                case 2:
                  n.call(this, arguments[1]);
                  break;
                case 3:
                  n.call(this, arguments[1], arguments[2]);
                  break;
                default:
                  for (
                    r = arguments.length, o = new Array(r - 1), u = 1;
                    u < r;
                    u++
                  )
                    o[u - 1] = arguments[u];
                  n.apply(this, o);
              }
            else if (s(n)) {
              for (
                r = arguments.length, o = new Array(r - 1), u = 1;
                u < r;
                u++
              )
                o[u - 1] = arguments[u];
              for (c = n.slice(), r = c.length, u = 0; u < r; u++)
                c[u].apply(this, o);
            }
            return !0;
          }),
          (r.prototype.addListener = function(t, e) {
            var n;
            if (!i(e)) throw TypeError('listener must be a function');
            if (
              (this._events || (this._events = {}),
              this._events.newListener &&
                this.emit('newListener', t, i(e.listener) ? e.listener : e),
              this._events[t]
                ? s(this._events[t])
                  ? this._events[t].push(e)
                  : (this._events[t] = [this._events[t], e])
                : (this._events[t] = e),
              s(this._events[t]) && !this._events[t].warned)
            ) {
              var n;
              (n = a(this._maxListeners)
                ? r.defaultMaxListeners
                : this._maxListeners),
                n &&
                  n > 0 &&
                  this._events[t].length > n &&
                  ((this._events[t].warned = !0),
                  console.error(
                    '(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.',
                    this._events[t].length
                  ),
                  'function' == typeof console.trace && console.trace());
            }
            return this;
          }),
          (r.prototype.on = r.prototype.addListener),
          (r.prototype.once = function(t, e) {
            function n() {
              this.removeListener(t, n),
                r || ((r = !0), e.apply(this, arguments));
            }
            if (!i(e)) throw TypeError('listener must be a function');
            var r = !1;
            return (n.listener = e), this.on(t, n), this;
          }),
          (r.prototype.removeListener = function(t, e) {
            var n, r, o, a;
            if (!i(e)) throw TypeError('listener must be a function');
            if (!this._events || !this._events[t]) return this;
            if (
              ((n = this._events[t]),
              (o = n.length),
              (r = -1),
              n === e || (i(n.listener) && n.listener === e))
            )
              delete this._events[t],
                this._events.removeListener &&
                  this.emit('removeListener', t, e);
            else if (s(n)) {
              for (a = o; a-- > 0; )
                if (n[a] === e || (n[a].listener && n[a].listener === e)) {
                  r = a;
                  break;
                }
              if (r < 0) return this;
              1 === n.length
                ? ((n.length = 0), delete this._events[t])
                : n.splice(r, 1),
                this._events.removeListener &&
                  this.emit('removeListener', t, e);
            }
            return this;
          }),
          (r.prototype.removeAllListeners = function(t) {
            var e, n;
            if (!this._events) return this;
            if (!this._events.removeListener)
              return (
                0 === arguments.length
                  ? (this._events = {})
                  : this._events[t] && delete this._events[t],
                this
              );
            if (0 === arguments.length) {
              for (e in this._events)
                'removeListener' !== e && this.removeAllListeners(e);
              return (
                this.removeAllListeners('removeListener'),
                (this._events = {}),
                this
              );
            }
            if (((n = this._events[t]), i(n))) this.removeListener(t, n);
            else for (; n.length; ) this.removeListener(t, n[n.length - 1]);
            return delete this._events[t], this;
          }),
          (r.prototype.listeners = function(t) {
            var e;
            return (e =
              this._events && this._events[t]
                ? i(this._events[t])
                  ? [this._events[t]]
                  : this._events[t].slice()
                : []);
          }),
          (r.listenerCount = function(t, e) {
            var n;
            return (n =
              t._events && t._events[e]
                ? i(t._events[e])
                  ? 1
                  : t._events[e].length
                : 0);
          });
      },
      {}
    ],
    39: [
      function(t, e, n) {
        !(function(t, n, r) {
          'use strict';
          'function' == typeof define
            ? define(n)
            : 'undefined' != typeof e && e.exports
            ? (e.exports = n())
            : (r[t] = n());
        })(
          'IDBStore',
          function() {
            'use strict';
            function t(t, e) {
              var n, r;
              for (n in e) (r = e[n]), r !== a[n] && r !== t[n] && (t[n] = r);
              return t;
            }
            function e(t) {
              return 'error' in t.target
                ? 'VersionError' == t.target.error.name
                : 'errorCode' in t.target && 12 == t.target.errorCode;
            }
            var n = function(t) {
                throw t;
              },
              r = function() {},
              i = {
                storeName: 'Store',
                storePrefix: 'IDBWrapper-',
                dbVersion: 1,
                keyPath: 'id',
                autoIncrement: !0,
                onStoreReady: function() {},
                onError: n,
                indexes: [],
                implementationPreference: [
                  'indexedDB',
                  'webkitIndexedDB',
                  'mozIndexedDB',
                  'shimIndexedDB'
                ]
              },
              o = function(t, e) {
                'undefined' == typeof e && 'function' == typeof t && (e = t),
                  '[object Object]' != Object.prototype.toString.call(t) &&
                    (t = {});
                for (var n in i)
                  this[n] = 'undefined' != typeof t[n] ? t[n] : i[n];
                (this.dbName = this.storePrefix + this.storeName),
                  (this.dbVersion = parseInt(this.dbVersion, 10) || 1),
                  e && (this.onStoreReady = e);
                var r = 'object' == typeof window ? window : self,
                  o = this.implementationPreference.filter(function(t) {
                    return t in r;
                  });
                (this.implementation = o[0]),
                  (this.idb = r[this.implementation]),
                  (this.keyRange =
                    r.IDBKeyRange || r.webkitIDBKeyRange || r.mozIDBKeyRange),
                  (this.consts = {
                    READ_ONLY: 'readonly',
                    READ_WRITE: 'readwrite',
                    VERSION_CHANGE: 'versionchange',
                    NEXT: 'next',
                    NEXT_NO_DUPLICATE: 'nextunique',
                    PREV: 'prev',
                    PREV_NO_DUPLICATE: 'prevunique'
                  }),
                  this.openDB();
              },
              s = {
                constructor: o,
                version: '1.7.1',
                db: null,
                dbName: null,
                dbVersion: null,
                store: null,
                storeName: null,
                storePrefix: null,
                keyPath: null,
                autoIncrement: null,
                indexes: null,
                implementationPreference: null,
                implementation: '',
                onStoreReady: null,
                onError: null,
                _insertIdCount: 0,
                openDB: function() {
                  var t = this.idb.open(this.dbName, this.dbVersion),
                    n = !1;
                  (t.onerror = function(t) {
                    if (e(t))
                      this.onError(
                        new Error(
                          'The version number provided is lower than the existing one.'
                        )
                      );
                    else {
                      var n;
                      if (t.target.error) n = t.target.error;
                      else {
                        var r =
                          'IndexedDB unknown error occurred when opening DB ' +
                          this.dbName +
                          ' version ' +
                          this.dbVersion;
                        'errorCode' in t.target &&
                          (r += ' with error code ' + t.target.errorCode),
                          (n = new Error(r));
                      }
                      this.onError(n);
                    }
                  }.bind(this)),
                    (t.onsuccess = function(t) {
                      if (!n) {
                        if (this.db) return void this.onStoreReady();
                        if (
                          ((this.db = t.target.result),
                          'string' == typeof this.db.version)
                        )
                          return void this.onError(
                            new Error(
                              'The IndexedDB implementation in this browser is outdated. Please upgrade your browser.'
                            )
                          );
                        if (!this.db.objectStoreNames.contains(this.storeName))
                          return void this.onError(
                            new Error("Object store couldn't be created.")
                          );
                        var e = this.db.transaction(
                          [this.storeName],
                          this.consts.READ_ONLY
                        );
                        this.store = e.objectStore(this.storeName);
                        var r = Array.prototype.slice.call(this.getIndexList());
                        this.indexes.forEach(function(t) {
                          var e = t.name;
                          if (!e)
                            return (
                              (n = !0),
                              void this.onError(
                                new Error(
                                  'Cannot create index: No index name given.'
                                )
                              )
                            );
                          if ((this.normalizeIndexData(t), this.hasIndex(e))) {
                            var i = this.store.index(e),
                              o = this.indexComplies(i, t);
                            o ||
                              ((n = !0),
                              this.onError(
                                new Error(
                                  'Cannot modify index "' +
                                    e +
                                    '" for current version. Please bump version number to ' +
                                    (this.dbVersion + 1) +
                                    '.'
                                )
                              )),
                              r.splice(r.indexOf(e), 1);
                          } else (n = !0), this.onError(new Error('Cannot create new index "' + e + '" for current version. Please bump version number to ' + (this.dbVersion + 1) + '.'));
                        }, this),
                          r.length &&
                            ((n = !0),
                            this.onError(
                              new Error(
                                'Cannot delete index(es) "' +
                                  r.toString() +
                                  '" for current version. Please bump version number to ' +
                                  (this.dbVersion + 1) +
                                  '.'
                              )
                            )),
                          n || this.onStoreReady();
                      }
                    }.bind(this)),
                    (t.onupgradeneeded = function(t) {
                      if (
                        ((this.db = t.target.result),
                        this.db.objectStoreNames.contains(this.storeName))
                      )
                        this.store = t.target.transaction.objectStore(
                          this.storeName
                        );
                      else {
                        var e = { autoIncrement: this.autoIncrement };
                        null !== this.keyPath && (e.keyPath = this.keyPath),
                          (this.store = this.db.createObjectStore(
                            this.storeName,
                            e
                          ));
                      }
                      var r = Array.prototype.slice.call(this.getIndexList());
                      this.indexes.forEach(function(t) {
                        var e = t.name;
                        if (
                          (e ||
                            ((n = !0),
                            this.onError(
                              new Error(
                                'Cannot create index: No index name given.'
                              )
                            )),
                          this.normalizeIndexData(t),
                          this.hasIndex(e))
                        ) {
                          var i = this.store.index(e),
                            o = this.indexComplies(i, t);
                          o ||
                            (this.store.deleteIndex(e),
                            this.store.createIndex(e, t.keyPath, {
                              unique: t.unique,
                              multiEntry: t.multiEntry
                            })),
                            r.splice(r.indexOf(e), 1);
                        } else this.store.createIndex(e, t.keyPath, { unique: t.unique, multiEntry: t.multiEntry });
                      }, this),
                        r.length &&
                          r.forEach(function(t) {
                            this.store.deleteIndex(t);
                          }, this);
                    }.bind(this));
                },
                deleteDatabase: function(t, e) {
                  if (this.idb.deleteDatabase) {
                    this.db.close();
                    var n = this.idb.deleteDatabase(this.dbName);
                    (n.onsuccess = t), (n.onerror = e);
                  } else
                    e(
                      new Error(
                        'Browser does not support IndexedDB deleteDatabase!'
                      )
                    );
                },
                put: function(t, e, i, o) {
                  null !== this.keyPath && ((o = i), (i = e), (e = t)),
                    o || (o = n),
                    i || (i = r);
                  var s,
                    a = !1,
                    u = null,
                    c = this.db.transaction(
                      [this.storeName],
                      this.consts.READ_WRITE
                    );
                  return (
                    (c.oncomplete = function() {
                      var t = a ? i : o;
                      t(u);
                    }),
                    (c.onabort = o),
                    (c.onerror = o),
                    null !== this.keyPath
                      ? (this._addIdPropertyIfNeeded(e),
                        (s = c.objectStore(this.storeName).put(e)))
                      : (s = c.objectStore(this.storeName).put(e, t)),
                    (s.onsuccess = function(t) {
                      (a = !0), (u = t.target.result);
                    }),
                    (s.onerror = o),
                    c
                  );
                },
                get: function(t, e, i) {
                  i || (i = n), e || (e = r);
                  var o = !1,
                    s = null,
                    a = this.db.transaction(
                      [this.storeName],
                      this.consts.READ_ONLY
                    );
                  (a.oncomplete = function() {
                    var t = o ? e : i;
                    t(s);
                  }),
                    (a.onabort = i),
                    (a.onerror = i);
                  var u = a.objectStore(this.storeName).get(t);
                  return (
                    (u.onsuccess = function(t) {
                      (o = !0), (s = t.target.result);
                    }),
                    (u.onerror = i),
                    a
                  );
                },
                remove: function(t, e, i) {
                  i || (i = n), e || (e = r);
                  var o = !1,
                    s = null,
                    a = this.db.transaction(
                      [this.storeName],
                      this.consts.READ_WRITE
                    );
                  (a.oncomplete = function() {
                    var t = o ? e : i;
                    t(s);
                  }),
                    (a.onabort = i),
                    (a.onerror = i);
                  var u = a.objectStore(this.storeName).delete(t);
                  return (
                    (u.onsuccess = function(t) {
                      (o = !0), (s = t.target.result);
                    }),
                    (u.onerror = i),
                    a
                  );
                },
                batch: function(t, e, i) {
                  if (
                    (i || (i = n),
                    e || (e = r),
                    '[object Array]' != Object.prototype.toString.call(t))
                  )
                    i(new Error('dataArray argument must be of type Array.'));
                  else if (0 === t.length) return e(!0);
                  var o = t.length,
                    s = !1,
                    a = !1,
                    u = this.db.transaction(
                      [this.storeName],
                      this.consts.READ_WRITE
                    );
                  (u.oncomplete = function() {
                    var t = a ? e : i;
                    t(a);
                  }),
                    (u.onabort = i),
                    (u.onerror = i);
                  var c = function() {
                    o--, 0 !== o || s || ((s = !0), (a = !0));
                  };
                  return (
                    t.forEach(function(t) {
                      var e = t.type,
                        n = t.key,
                        r = t.value,
                        o = function(t) {
                          u.abort(), s || ((s = !0), i(t, e, n));
                        };
                      if ('remove' == e) {
                        var a = u.objectStore(this.storeName).delete(n);
                        (a.onsuccess = c), (a.onerror = o);
                      } else if ('put' == e) {
                        var l;
                        null !== this.keyPath
                          ? (this._addIdPropertyIfNeeded(r),
                            (l = u.objectStore(this.storeName).put(r)))
                          : (l = u.objectStore(this.storeName).put(r, n)),
                          (l.onsuccess = c),
                          (l.onerror = o);
                      }
                    }, this),
                    u
                  );
                },
                putBatch: function(t, e, n) {
                  var r = t.map(function(t) {
                    return { type: 'put', value: t };
                  });
                  return this.batch(r, e, n);
                },
                upsertBatch: function(t, e, i, o) {
                  'function' == typeof e && ((i = e), (o = i), (e = {})),
                    o || (o = n),
                    i || (i = r),
                    e || (e = {}),
                    '[object Array]' != Object.prototype.toString.call(t) &&
                      o(new Error('dataArray argument must be of type Array.'));
                  var s = e.keyField || this.keyPath,
                    a = t.length,
                    u = !1,
                    c = !1,
                    l = 0,
                    h = this.db.transaction(
                      [this.storeName],
                      this.consts.READ_WRITE
                    );
                  (h.oncomplete = function() {
                    c ? i(t) : o(!1);
                  }),
                    (h.onabort = o),
                    (h.onerror = o);
                  var f = function(e) {
                    var n = t[l++];
                    (n[s] = e.target.result),
                      a--,
                      0 !== a || u || ((u = !0), (c = !0));
                  };
                  return (
                    t.forEach(function(t) {
                      var e,
                        n = t.key,
                        r = function(t) {
                          h.abort(), u || ((u = !0), o(t));
                        };
                      null !== this.keyPath
                        ? (this._addIdPropertyIfNeeded(t),
                          (e = h.objectStore(this.storeName).put(t)))
                        : (e = h.objectStore(this.storeName).put(t, n)),
                        (e.onsuccess = f),
                        (e.onerror = r);
                    }, this),
                    h
                  );
                },
                removeBatch: function(t, e, n) {
                  var r = t.map(function(t) {
                    return { type: 'remove', key: t };
                  });
                  return this.batch(r, e, n);
                },
                getBatch: function(t, e, i, o) {
                  if (
                    (i || (i = n),
                    e || (e = r),
                    o || (o = 'sparse'),
                    '[object Array]' != Object.prototype.toString.call(t))
                  )
                    i(new Error('keyArray argument must be of type Array.'));
                  else if (0 === t.length) return e([]);
                  var s = [],
                    a = t.length,
                    u = !1,
                    c = !1,
                    l = null,
                    h = this.db.transaction(
                      [this.storeName],
                      this.consts.READ_ONLY
                    );
                  (h.oncomplete = function() {
                    var t = c ? e : i;
                    t(l);
                  }),
                    (h.onabort = i),
                    (h.onerror = i);
                  var f = function(t) {
                    t.target.result || 'dense' == o
                      ? s.push(t.target.result)
                      : 'sparse' == o && s.length++,
                      a--,
                      0 === a && ((u = !0), (c = !0), (l = s));
                  };
                  return (
                    t.forEach(function(t) {
                      var e = function(t) {
                          (u = !0), (l = t), i(t), h.abort();
                        },
                        n = h.objectStore(this.storeName).get(t);
                      (n.onsuccess = f), (n.onerror = e);
                    }, this),
                    h
                  );
                },
                getAll: function(t, e) {
                  e || (e = n), t || (t = r);
                  var i = this.db.transaction(
                      [this.storeName],
                      this.consts.READ_ONLY
                    ),
                    o = i.objectStore(this.storeName);
                  return (
                    o.getAll
                      ? this._getAllNative(i, o, t, e)
                      : this._getAllCursor(i, o, t, e),
                    i
                  );
                },
                _getAllNative: function(t, e, n, r) {
                  var i = !1,
                    o = null;
                  (t.oncomplete = function() {
                    var t = i ? n : r;
                    t(o);
                  }),
                    (t.onabort = r),
                    (t.onerror = r);
                  var s = e.getAll();
                  (s.onsuccess = function(t) {
                    (i = !0), (o = t.target.result);
                  }),
                    (s.onerror = r);
                },
                _getAllCursor: function(t, e, n, r) {
                  var i = [],
                    o = !1,
                    s = null;
                  (t.oncomplete = function() {
                    var t = o ? n : r;
                    t(s);
                  }),
                    (t.onabort = r),
                    (t.onerror = r);
                  var a = e.openCursor();
                  (a.onsuccess = function(t) {
                    var e = t.target.result;
                    e ? (i.push(e.value), e.continue()) : ((o = !0), (s = i));
                  }),
                    (a.onError = r);
                },
                clear: function(t, e) {
                  e || (e = n), t || (t = r);
                  var i = !1,
                    o = null,
                    s = this.db.transaction(
                      [this.storeName],
                      this.consts.READ_WRITE
                    );
                  (s.oncomplete = function() {
                    var n = i ? t : e;
                    n(o);
                  }),
                    (s.onabort = e),
                    (s.onerror = e);
                  var a = s.objectStore(this.storeName).clear();
                  return (
                    (a.onsuccess = function(t) {
                      (i = !0), (o = t.target.result);
                    }),
                    (a.onerror = e),
                    s
                  );
                },
                _addIdPropertyIfNeeded: function(t) {
                  'undefined' == typeof t[this.keyPath] &&
                    (t[this.keyPath] = this._insertIdCount++ + Date.now());
                },
                getIndexList: function() {
                  return this.store.indexNames;
                },
                hasIndex: function(t) {
                  return this.store.indexNames.contains(t);
                },
                normalizeIndexData: function(t) {
                  (t.keyPath = t.keyPath || t.name),
                    (t.unique = !!t.unique),
                    (t.multiEntry = !!t.multiEntry);
                },
                indexComplies: function(t, e) {
                  var n = ['keyPath', 'unique', 'multiEntry'].every(function(
                    n
                  ) {
                    if ('multiEntry' == n && void 0 === t[n] && e[n] === !1)
                      return !0;
                    if (
                      'keyPath' == n &&
                      '[object Array]' == Object.prototype.toString.call(e[n])
                    ) {
                      var r = e.keyPath,
                        i = t.keyPath;
                      if ('string' == typeof i) return r.toString() == i;
                      if (
                        'function' != typeof i.contains &&
                        'function' != typeof i.indexOf
                      )
                        return !1;
                      if (i.length !== r.length) return !1;
                      for (var o = 0, s = r.length; o < s; o++)
                        if (
                          !(
                            (i.contains && i.contains(r[o])) ||
                            i.indexOf(r[o] !== -1)
                          )
                        )
                          return !1;
                      return !0;
                    }
                    return e[n] == t[n];
                  });
                  return n;
                },
                iterate: function(e, r) {
                  r = t(
                    {
                      index: null,
                      order: 'ASC',
                      autoContinue: !0,
                      filterDuplicates: !1,
                      keyRange: null,
                      writeAccess: !1,
                      onEnd: null,
                      onError: n,
                      limit: 1 / 0,
                      offset: 0,
                      allowItemRejection: !1
                    },
                    r || {}
                  );
                  var i = 'desc' == r.order.toLowerCase() ? 'PREV' : 'NEXT';
                  r.filterDuplicates && (i += '_NO_DUPLICATE');
                  var o = !1,
                    s = this.db.transaction(
                      [this.storeName],
                      this.consts[r.writeAccess ? 'READ_WRITE' : 'READ_ONLY']
                    ),
                    a = s.objectStore(this.storeName);
                  r.index && (a = a.index(r.index));
                  var u = 0;
                  (s.oncomplete = function() {
                    return o
                      ? void (r.onEnd ? r.onEnd() : e(null))
                      : void r.onError(null);
                  }),
                    (s.onabort = r.onError),
                    (s.onerror = r.onError);
                  var c = a.openCursor(r.keyRange, this.consts[i]);
                  return (
                    (c.onerror = r.onError),
                    (c.onsuccess = function(t) {
                      var n = t.target.result;
                      if (n)
                        if (r.offset) n.advance(r.offset), (r.offset = 0);
                        else {
                          var i = e(n.value, n, s);
                          (r.allowItemRejection && i === !1) || u++,
                            r.autoContinue &&
                              (u + r.offset < r.limit
                                ? n.continue()
                                : (o = !0));
                        }
                      else o = !0;
                    }),
                    s
                  );
                },
                query: function(t, e) {
                  var n = [],
                    r = 0;
                  return (
                    (e = e || {}),
                    (e.autoContinue = !0),
                    (e.writeAccess = !1),
                    (e.allowItemRejection = !!e.filter),
                    (e.onEnd = function() {
                      t(n, r);
                    }),
                    this.iterate(function(t) {
                      r++;
                      var i = !e.filter || e.filter(t);
                      return i !== !1 && n.push(t), i;
                    }, e)
                  );
                },
                count: function(e, r) {
                  r = t({ index: null, keyRange: null }, r || {});
                  var i = r.onError || n,
                    o = !1,
                    s = null,
                    a = this.db.transaction(
                      [this.storeName],
                      this.consts.READ_ONLY
                    );
                  (a.oncomplete = function() {
                    var t = o ? e : i;
                    t(s);
                  }),
                    (a.onabort = i),
                    (a.onerror = i);
                  var u = a.objectStore(this.storeName);
                  r.index && (u = u.index(r.index));
                  var c = u.count(r.keyRange);
                  return (
                    (c.onsuccess = function(t) {
                      (o = !0), (s = t.target.result);
                    }),
                    (c.onError = i),
                    a
                  );
                },
                makeKeyRange: function(t) {
                  var e,
                    n = 'undefined' != typeof t.lower,
                    r = 'undefined' != typeof t.upper,
                    i = 'undefined' != typeof t.only;
                  switch (!0) {
                    case i:
                      e = this.keyRange.only(t.only);
                      break;
                    case n && r:
                      e = this.keyRange.bound(
                        t.lower,
                        t.upper,
                        t.excludeLower,
                        t.excludeUpper
                      );
                      break;
                    case n:
                      e = this.keyRange.lowerBound(t.lower, t.excludeLower);
                      break;
                    case r:
                      e = this.keyRange.upperBound(t.upper, t.excludeUpper);
                      break;
                    default:
                      throw new Error(
                        'Cannot create KeyRange. Provide one or both of "lower" or "upper" value, or an "only" value.'
                      );
                  }
                  return e;
                }
              },
              a = {};
            return (o.prototype = s), (o.version = s.version), o;
          },
          this
        );
      },
      {}
    ],
    40: [
      function(t, e, n) {
        function r() {
          function t(t) {
            return t[~~(Math.random() * t.length)];
          }
          function e(e) {
            for (var r = '', i = 0; i < e; ++i) r += t(n);
            return r;
          }
          var n = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split(
            ''
          );
          return { randomId: e };
        }
        'object' == typeof e &&
          'object' == typeof e.exports &&
          (e.exports = r());
      },
      {}
    ],
    41: [
      function(t, e, n) {
        (n.read = function(t, e, n, r, i) {
          var o,
            s,
            a = 8 * i - r - 1,
            u = (1 << a) - 1,
            c = u >> 1,
            l = -7,
            h = n ? i - 1 : 0,
            f = n ? -1 : 1,
            p = t[e + h];
          for (
            h += f, o = p & ((1 << -l) - 1), p >>= -l, l += a;
            l > 0;
            o = 256 * o + t[e + h], h += f, l -= 8
          );
          for (
            s = o & ((1 << -l) - 1), o >>= -l, l += r;
            l > 0;
            s = 256 * s + t[e + h], h += f, l -= 8
          );
          if (0 === o) o = 1 - c;
          else {
            if (o === u) return s ? NaN : (p ? -1 : 1) * (1 / 0);
            (s += Math.pow(2, r)), (o -= c);
          }
          return (p ? -1 : 1) * s * Math.pow(2, o - r);
        }),
          (n.write = function(t, e, n, r, i, o) {
            var s,
              a,
              u,
              c = 8 * o - i - 1,
              l = (1 << c) - 1,
              h = l >> 1,
              f = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
              p = r ? 0 : o - 1,
              d = r ? 1 : -1,
              y = e < 0 || (0 === e && 1 / e < 0) ? 1 : 0;
            for (
              e = Math.abs(e),
                isNaN(e) || e === 1 / 0
                  ? ((a = isNaN(e) ? 1 : 0), (s = l))
                  : ((s = Math.floor(Math.log(e) / Math.LN2)),
                    e * (u = Math.pow(2, -s)) < 1 && (s--, (u *= 2)),
                    (e += s + h >= 1 ? f / u : f * Math.pow(2, 1 - h)),
                    e * u >= 2 && (s++, (u /= 2)),
                    s + h >= l
                      ? ((a = 0), (s = l))
                      : s + h >= 1
                      ? ((a = (e * u - 1) * Math.pow(2, i)), (s += h))
                      : ((a = e * Math.pow(2, h - 1) * Math.pow(2, i)),
                        (s = 0)));
              i >= 8;
              t[n + p] = 255 & a, p += d, a /= 256, i -= 8
            );
            for (
              s = (s << i) | a, c += i;
              c > 0;
              t[n + p] = 255 & s, p += d, s /= 256, c -= 8
            );
            t[n + p - d] |= 128 * y;
          });
      },
      {}
    ],
    42: [
      function(t, e, n) {
        'function' == typeof Object.create
          ? (e.exports = function(t, e) {
              (t.super_ = e),
                (t.prototype = Object.create(e.prototype, {
                  constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                  }
                }));
            })
          : (e.exports = function(t, e) {
              t.super_ = e;
              var n = function() {};
              (n.prototype = e.prototype),
                (t.prototype = new n()),
                (t.prototype.constructor = t);
            });
      },
      {}
    ],
    43: [
      function(t, e, n) {
        function r(t) {
          return (
            !!t.constructor &&
            'function' == typeof t.constructor.isBuffer &&
            t.constructor.isBuffer(t)
          );
        }
        function i(t) {
          return (
            'function' == typeof t.readFloatLE &&
            'function' == typeof t.slice &&
            r(t.slice(0, 0))
          );
        }
        e.exports = function(t) {
          return null != t && (r(t) || i(t) || !!t._isBuffer);
        };
      },
      {}
    ],
    44: [
      function(t, e, n) {
        e.exports =
          Array.isArray ||
          function(t) {
            return '[object Array]' == Object.prototype.toString.call(t);
          };
      },
      {}
    ],
    45: [
      function(t, e, n) {
        function r(t) {
          return (
            i.isBuffer(t) ||
            /\[object (.+Array|Array.+)\]/.test(
              Object.prototype.toString.call(t)
            )
          );
        }
        var i = t('buffer').Buffer;
        e.exports = r;
      },
      { buffer: 18 }
    ],
    46: [
      function(t, e, n) {
        function r(t) {
          (this.opts = t || {}), (this.encodings = i);
        }
        var i = t('./lib/encodings');
        (e.exports = r),
          (r.prototype._encoding = function(t) {
            return 'string' == typeof t && (t = i[t]), t || (t = i.id), t;
          }),
          (r.prototype._keyEncoding = function(t, e) {
            return this._encoding(
              (e && e.keyEncoding) ||
                (t && t.keyEncoding) ||
                this.opts.keyEncoding
            );
          }),
          (r.prototype._valueEncoding = function(t, e) {
            return this._encoding(
              (e && (e.valueEncoding || e.encoding)) ||
                (t && (t.valueEncoding || t.encoding)) ||
                this.opts.valueEncoding ||
                this.opts.encoding
            );
          }),
          (r.prototype.encodeKey = function(t, e, n) {
            return this._keyEncoding(e, n).encode(t);
          }),
          (r.prototype.encodeValue = function(t, e, n) {
            return this._valueEncoding(e, n).encode(t);
          }),
          (r.prototype.decodeKey = function(t, e) {
            return this._keyEncoding(e).decode(t);
          }),
          (r.prototype.decodeValue = function(t, e) {
            return this._valueEncoding(e).decode(t);
          }),
          (r.prototype.encodeBatch = function(t, e) {
            var n = this;
            return t.map(function(t) {
              var r = { type: t.type, key: n.encodeKey(t.key, e, t) };
              return (
                n.keyAsBuffer(e, t) && (r.keyEncoding = 'binary'),
                t.prefix && (r.prefix = t.prefix),
                'value' in t &&
                  ((r.value = n.encodeValue(t.value, e, t)),
                  n.valueAsBuffer(e, t) && (r.valueEncoding = 'binary')),
                r
              );
            });
          });
        var o = ['lt', 'gt', 'lte', 'gte', 'start', 'end'];
        (r.prototype.encodeLtgt = function(t) {
          var e = this,
            n = {};
          return (
            Object.keys(t).forEach(function(r) {
              n[r] = o.indexOf(r) > -1 ? e.encodeKey(t[r], t) : t[r];
            }),
            n
          );
        }),
          (r.prototype.createStreamDecoder = function(t) {
            var e = this;
            return t.keys && t.values
              ? function(n, r) {
                  return { key: e.decodeKey(n, t), value: e.decodeValue(r, t) };
                }
              : t.keys
              ? function(n) {
                  return e.decodeKey(n, t);
                }
              : t.values
              ? function(n, r) {
                  return e.decodeValue(r, t);
                }
              : function() {};
          }),
          (r.prototype.keyAsBuffer = function(t) {
            return this._keyEncoding(t).buffer;
          }),
          (r.prototype.valueAsBuffer = function(t) {
            return this._valueEncoding(t).buffer;
          });
      },
      { './lib/encodings': 47 }
    ],
    47: [
      function(t, e, n) {
        (function(t) {
          function e(t) {
            return t;
          }
          function r(e) {
            return void 0 === e || null === e || t.isBuffer(e);
          }
          (n.utf8 = n['utf-8'] = {
            encode: function(t) {
              return r(t) ? t : String(t);
            },
            decode: e,
            buffer: !1,
            type: 'utf8'
          }),
            (n.json = {
              encode: JSON.stringify,
              decode: JSON.parse,
              buffer: !1,
              type: 'json'
            }),
            (n.binary = {
              encode: function(e) {
                return r(e) ? e : new t(e);
              },
              decode: e,
              buffer: !0,
              type: 'binary'
            }),
            (n.id = {
              encode: function(t) {
                return t;
              },
              decode: function(t) {
                return t;
              },
              buffer: !1,
              type: 'id'
            });
          var i = [
            'hex',
            'ascii',
            'base64',
            'ucs2',
            'ucs-2',
            'utf16le',
            'utf-16le'
          ];
          i.forEach(function(e) {
            n[e] = {
              encode: function(n) {
                return r(n) ? n : new t(n, e);
              },
              decode: function(t) {
                return t.toString(e);
              },
              buffer: !0,
              type: e
            };
          });
        }.call(this, t('buffer').Buffer));
      },
      { buffer: 18 }
    ],
    48: [
      function(t, e, n) {
        var r = t('errno').create,
          i = r('LevelUPError'),
          o = r('NotFoundError', i);
        (o.prototype.notFound = !0),
          (o.prototype.status = 404),
          (e.exports = {
            LevelUPError: i,
            InitializationError: r('InitializationError', i),
            OpenError: r('OpenError', i),
            ReadError: r('ReadError', i),
            WriteError: r('WriteError', i),
            NotFoundError: o,
            EncodingError: r('EncodingError', i)
          });
      },
      { errno: 36 }
    ],
    49: [
      function(t, e, n) {
        function r(t, e) {
          return this instanceof r
            ? (o.call(this, s(e, { objectMode: !0 })),
              (this._iterator = t),
              (this._destroyed = !1),
              (this._decoder = null),
              e && e.decoder && (this._decoder = e.decoder),
              void this.on('end', this._cleanup.bind(this)))
            : new r(t, e);
        }
        var i = t('inherits'),
          o = t('readable-stream').Readable,
          s = t('xtend'),
          a = t('level-errors').EncodingError;
        (e.exports = r),
          i(r, o),
          (r.prototype._read = function() {
            var t = this;
            this._destroyed ||
              this._iterator.next(function(e, n, r) {
                if (!t._destroyed) {
                  if (e) return t.emit('error', e);
                  if (void 0 === n && void 0 === r) t.push(null);
                  else {
                    if (!t._decoder) return t.push({ key: n, value: r });
                    try {
                      var r = t._decoder(n, r);
                    } catch (e) {
                      return t.emit('error', new a(e)), void t.push(null);
                    }
                    t.push(r);
                  }
                }
              });
          }),
          (r.prototype.destroy = r.prototype._cleanup = function() {
            var t = this;
            this._destroyed ||
              ((this._destroyed = !0),
              this._iterator.end(function(e) {
                return e ? t.emit('error', e) : void t.emit('close');
              }));
          });
      },
      { inherits: 42, 'level-errors': 48, 'readable-stream': 96, xtend: 50 }
    ],
    50: [
      function(t, e, n) {
        arguments[4][33][0].apply(n, arguments);
      },
      { dup: 33 }
    ],
    51: [
      function(t, e, n) {
        (function(n) {
          function r(t) {
            if (!(this instanceof r)) return new r(t);
            if (!t)
              throw new Error(
                'constructor requires at least a location argument'
              );
            (this.IDBOptions = {}), (this.location = t);
          }
          e.exports = r;
          var i = t('idb-wrapper'),
            o = t('abstract-leveldown').AbstractLevelDOWN,
            s = t('util'),
            a = t('./iterator'),
            u = t('isbuffer'),
            c = t('xtend'),
            l = t('typedarray-to-buffer');
          s.inherits(r, o),
            (r.prototype._open = function(t, e) {
              var n = this,
                r = {
                  storeName: this.location,
                  autoIncrement: !1,
                  keyPath: null,
                  onStoreReady: function() {
                    e && e(null, n.idb);
                  },
                  onError: function(t) {
                    e && e(t);
                  }
                };
              c(r, t), (this.IDBOptions = r), (this.idb = new i(r));
            }),
            (r.prototype._get = function(t, e, r) {
              this.idb.get(
                t,
                function(i) {
                  if (void 0 === i) return r(new Error('NotFound'));
                  var o = !0;
                  return (
                    e.asBuffer === !1 && (o = !1),
                    e.raw && (o = !1),
                    o &&
                      (i = i instanceof Uint8Array ? l(i) : new n(String(i))),
                    r(null, i, t)
                  );
                },
                r
              );
            }),
            (r.prototype._del = function(t, e, n) {
              this.idb.remove(t, n, n);
            }),
            (r.prototype._put = function(t, e, r, i) {
              e instanceof ArrayBuffer && (e = l(new Uint8Array(e)));
              var o = this.convertEncoding(t, e, r);
              n.isBuffer(o.value) &&
                ('function' == typeof e.toArrayBuffer
                  ? (o.value = new Uint8Array(e.toArrayBuffer()))
                  : (o.value = new Uint8Array(e))),
                this.idb.put(
                  o.key,
                  o.value,
                  function() {
                    i();
                  },
                  i
                );
            }),
            (r.prototype.convertEncoding = function(t, e, n) {
              if (n.raw) return { key: t, value: e };
              if (e) {
                var r = e.toString();
                'NaN' === r && (e = 'NaN');
              }
              var i = n.valueEncoding,
                o = { key: t, value: e };
              return (
                !e ||
                  (i && 'binary' === i) ||
                  ('object' != typeof o.value && (o.value = r)),
                o
              );
            }),
            (r.prototype.iterator = function(t) {
              return 'object' != typeof t && (t = {}), new a(this.idb, t);
            }),
            (r.prototype._batch = function(t, e, n) {
              var r,
                i,
                o,
                s,
                a = [];
              if (0 === t.length) return setTimeout(n, 0);
              for (r = 0; r < t.length; r++) {
                (o = {}), (s = t[r]), (a[r] = o);
                var u = this.convertEncoding(s.key, s.value, e);
                (s.key = u.key), (s.value = u.value);
                for (i in s)
                  'type' === i && 'del' == s[i]
                    ? (o[i] = 'remove')
                    : (o[i] = s[i]);
              }
              return this.idb.batch(
                a,
                function() {
                  n();
                },
                n
              );
            }),
            (r.prototype._close = function(t) {
              this.idb.db.close(), t();
            }),
            (r.prototype._approximateSize = function(t, e, n) {
              var r = new Error('Not implemented');
              if (n) return n(r);
              throw r;
            }),
            (r.prototype._isBuffer = function(t) {
              return n.isBuffer(t);
            }),
            (r.destroy = function(t, e) {
              if ('object' == typeof t)
                var n = t.IDBOptions.storePrefix || 'IDBWrapper-',
                  r = t.location;
              else
                var n = 'IDBWrapper-',
                  r = t;
              var i = indexedDB.deleteDatabase(n + r);
              (i.onsuccess = function() {
                e();
              }),
                (i.onerror = function(t) {
                  e(t);
                });
            });
          r.prototype._checkKeyValue = function(t, e) {
            return null === t || void 0 === t
              ? new Error(e + ' cannot be `null` or `undefined`')
              : null === t || void 0 === t
              ? new Error(e + ' cannot be `null` or `undefined`')
              : u(t) && 0 === t.byteLength
              ? new Error(e + ' cannot be an empty ArrayBuffer')
              : '' === String(t)
              ? new Error(e + ' cannot be an empty String')
              : 0 === t.length
              ? new Error(e + ' cannot be an empty Array')
              : void 0;
          };
        }.call(this, t('buffer').Buffer));
      },
      {
        './iterator': 52,
        'abstract-leveldown': 13,
        buffer: 18,
        'idb-wrapper': 39,
        isbuffer: 45,
        'typedarray-to-buffer': 102,
        util: 105,
        xtend: 54
      }
    ],
    52: [
      function(t, e, n) {
        function r(t, e) {
          e || (e = {}),
            (this.options = e),
            o.call(this, t),
            (this._order = e.reverse ? 'DESC' : 'ASC'),
            (this._limit = e.limit),
            (this._count = 0),
            (this._done = !1);
          var n = s.lowerBound(e),
            r = s.upperBound(e);
          try {
            this._keyRange =
              n || r
                ? this.db.makeKeyRange({
                    lower: n,
                    upper: r,
                    excludeLower: s.lowerBoundExclusive(e),
                    excludeUpper: s.upperBoundExclusive(e)
                  })
                : null;
          } catch (t) {
            this._keyRangeError = !0;
          }
          this.callback = null;
        }
        var i = t('util'),
          o = t('abstract-leveldown').AbstractIterator,
          s = t('ltgt');
        (e.exports = r),
          i.inherits(r, o),
          (r.prototype.createIterator = function() {
            var t = this;
            t.iterator = t.db.iterate(
              function() {
                t.onItem.apply(t, arguments);
              },
              {
                keyRange: t._keyRange,
                autoContinue: !1,
                order: t._order,
                onError: function(t) {
                  console.log('horrible error', t);
                }
              }
            );
          }),
          (r.prototype.onItem = function(t, e, n) {
            if (!e && this.callback)
              return this.callback(), void (this.callback = !1);
            var r = !0;
            this._limit &&
              this._limit > 0 &&
              this._count++ >= this._limit &&
              (r = !1),
              r && this.callback(!1, e.key, e.value),
              e && e.continue();
          }),
          (r.prototype._next = function(t) {
            return t
              ? this._keyRangeError
                ? t()
                : (this._started ||
                    (this.createIterator(), (this._started = !0)),
                  void (this.callback = t))
              : new Error('next() requires a callback argument');
          });
      },
      { 'abstract-leveldown': 13, ltgt: 81, util: 105 }
    ],
    53: [
      function(t, e, n) {
        function r(t) {
          return null !== t && ('object' == typeof t || 'function' == typeof t);
        }
        e.exports = r;
      },
      {}
    ],
    54: [
      function(t, e, n) {
        function r() {
          for (var t = {}, e = 0; e < arguments.length; e++) {
            var n = arguments[e];
            if (o(n))
              for (var r = i(n), s = 0; s < r.length; s++) {
                var a = r[s];
                t[a] = n[a];
              }
          }
          return t;
        }
        var i = t('object-keys'),
          o = t('./has-keys');
        e.exports = r;
      },
      { './has-keys': 53, 'object-keys': 83 }
    ],
    55: [
      function(t, e, n) {
        var r = '#',
          i = '!';
        (n.encode = function(t) {
          return i + t[0].join(r) + i + t[1];
        }),
          (n.decode = function(t) {
            var e = t.indexOf(i, 1);
            return [
              t
                .substring(1, e)
                .split(r)
                .filter(Boolean),
              t.substring(++e)
            ];
          }),
          (n.buffer = !1),
          (n.lowerBound = '\0'),
          (n.upperBound = '￿');
      },
      {}
    ],
    56: [
      function(t, e, n) {
        var r = t('./range');
        e.exports = function(t) {
          var e = [];
          return {
            add: function(t, n) {
              var r = { range: t, hook: n };
              return (
                e.push(r),
                function() {
                  var t = e.indexOf(r);
                  if (~t) return e.splice(t, 1);
                }
              );
            },
            removeAll: function(t) {
              throw new Error('not implemented');
            },
            trigger: function(n, i) {
              for (var o = 0; o < e.length; o++) {
                var s = e[o];
                r(s.range, n, t) && s.hook.apply(this, i);
              }
            }
          };
        };
      },
      { './range': 74 }
    ],
    57: [
      function(t, e, n) {
        'use strict';
        var r = t('./nut'),
          i = t('./shell'),
          o = t('./codec'),
          s = t('levelup/lib/codec'),
          a = t('xtend'),
          u = t('levelup/lib/read-stream'),
          c = function(t, e) {
            return (e = a(t.options, e)), i(r(t, o, s), [], u, e);
          };
        e.exports = function(t, e) {
          return 'function' == typeof t.sublevel && 'function' == typeof t.clone
            ? t.clone(e)
            : c(t, e);
        };
      },
      {
        './codec': 55,
        './nut': 72,
        './shell': 75,
        'levelup/lib/codec': 58,
        'levelup/lib/read-stream': 61,
        xtend: 71
      }
    ],
    58: [
      function(t, e, n) {
        function r(t, e) {
          var n = (e && e.keyEncoding) || t.keyEncoding || 'utf8';
          return h[n] || n;
        }
        function i(t, e) {
          var n =
            (e && (e.valueEncoding || e.encoding)) ||
            t.valueEncoding ||
            t.encoding ||
            'utf8';
          return h[n] || n;
        }
        function o(t, e, n) {
          return r(e, n).encode(t);
        }
        function s(t, e, n) {
          return i(e, n).encode(t);
        }
        function a(t, e) {
          return r(e).decode(t);
        }
        function u(t, e) {
          return i(e).decode(t);
        }
        function c(t, e) {
          return i(t, e).buffer;
        }
        function l(t, e) {
          return r(t, e).buffer;
        }
        var h = t('./encodings');
        e.exports = {
          encodeKey: o,
          encodeValue: s,
          isValueAsBuffer: c,
          isKeyAsBuffer: l,
          decodeValue: u,
          decodeKey: a
        };
      },
      { './encodings': 59 }
    ],
    59: [
      function(t, e, n) {
        (function(t) {
          var n = [
            'hex',
            'utf8',
            'utf-8',
            'ascii',
            'binary',
            'base64',
            'ucs2',
            'ucs-2',
            'utf16le',
            'utf-16le'
          ];
          e.exports = (function() {
            function e(e) {
              return void 0 === e || null === e || t.isBuffer(e);
            }
            var r = {};
            return (
              (r.utf8 = r['utf-8'] = {
                encode: function(t) {
                  return e(t) ? t : String(t);
                },
                decode: function(t) {
                  return t;
                },
                buffer: !1,
                type: 'utf8'
              }),
              (r.json = {
                encode: JSON.stringify,
                decode: JSON.parse,
                buffer: !1,
                type: 'json'
              }),
              (r.binary = {
                encode: function(n) {
                  return e(n) ? n : new t(n);
                },
                decode: function(t) {
                  return t;
                },
                buffer: !0,
                type: 'binary'
              }),
              n.forEach(function(n) {
                r[n] ||
                  (r[n] = {
                    encode: function(r) {
                      return e(r) ? r : new t(r, n);
                    },
                    decode: function(t) {
                      return t.toString(n);
                    },
                    buffer: !0,
                    type: n
                  });
              }),
              r
            );
          })();
        }.call(this, t('buffer').Buffer));
      },
      { buffer: 18 }
    ],
    60: [
      function(t, e, n) {
        var r = t('errno').create,
          i = r('LevelUPError'),
          o = r('NotFoundError', i);
        (o.prototype.notFound = !0),
          (o.prototype.status = 404),
          (e.exports = {
            LevelUPError: i,
            InitializationError: r('InitializationError', i),
            OpenError: r('OpenError', i),
            ReadError: r('ReadError', i),
            WriteError: r('WriteError', i),
            NotFoundError: o,
            EncodingError: r('EncodingError', i)
          });
      },
      { errno: 36 }
    ],
    61: [
      function(t, e, n) {
        function r(t, e) {
          return this instanceof r
            ? (i.call(this, { objectMode: !0, highWaterMark: t.highWaterMark }),
              (this._waiting = !1),
              (this._options = t),
              void (this._makeData = e))
            : new r(t, e);
        }
        var i = t('readable-stream').Readable,
          o = t('util').inherits,
          s = (t('xtend'), t('./errors').EncodingError);
        t('./util');
        o(r, i),
          (r.prototype.setIterator = function(t) {
            return (
              (this._iterator = t),
              this._destroyed
                ? t.end(function() {})
                : this._waiting
                ? ((this._waiting = !1), this._read())
                : this
            );
          }),
          (r.prototype._read = function() {
            var t = this;
            if (!t._destroyed)
              return t._iterator
                ? void t._iterator.next(function(e, n, r) {
                    if (e || (void 0 === n && void 0 === r))
                      return e || t._destroyed || t.push(null), t._cleanup(e);
                    try {
                      r = t._makeData(n, r);
                    } catch (e) {
                      return t._cleanup(new s(e));
                    }
                    t._destroyed || t.push(r);
                  })
                : (this._waiting = !0);
          }),
          (r.prototype._cleanup = function(t) {
            if (!this._destroyed) {
              this._destroyed = !0;
              var e = this;
              t && e.emit('error', t),
                e._iterator
                  ? e._iterator.end(function() {
                      (e._iterator = null), e.emit('close');
                    })
                  : e.emit('close');
            }
          }),
          (r.prototype.destroy = function() {
            this._cleanup();
          }),
          (r.prototype.toString = function() {
            return 'LevelUP.ReadStream';
          }),
          (e.exports = r);
      },
      {
        './errors': 60,
        './util': 62,
        'readable-stream': 70,
        util: 105,
        xtend: 63
      }
    ],
    62: [
      function(t, e, n) {
        function r(t, e, n) {
          t.readStream()
            .pipe(e.writeStream())
            .on('close', n ? n : function() {})
            .on(
              'error',
              n
                ? n
                : function(t) {
                    throw t;
                  }
            );
        }
        function i(t, e) {
          var n = 'string' == typeof e;
          return (
            !n &&
              e &&
              e.encoding &&
              !e.valueEncoding &&
              (e.valueEncoding = e.encoding),
            c((t && t.options) || {}, n ? p[e] || p[f.valueEncoding] : e)
          );
        }
        function o() {
          if (u) return u;
          var e,
            n = t('../package.json').devDependencies.leveldown,
            r = 'Could not locate LevelDOWN, try `npm install leveldown`';
          try {
            e = t('leveldown/package').version;
          } catch (t) {
            throw new l(r);
          }
          if (!t('semver').satisfies(e, n))
            throw new l(
              'Installed version of LevelDOWN (' +
                e +
                ') does not match required version (' +
                n +
                ')'
            );
          try {
            return (u = t('leveldown'));
          } catch (t) {
            throw new l(r);
          }
        }
        function s(t, e, n) {
          return 'function' == typeof n ? n(e) : t.emit('error', e);
        }
        function a(t) {
          return 'undefined' != typeof t;
        }
        var u,
          c = t('xtend'),
          l = t('./errors').LevelUPError,
          h = t('./encodings'),
          f = {
            createIfMissing: !0,
            errorIfExists: !1,
            keyEncoding: 'utf8',
            valueEncoding: 'utf8',
            compression: !0
          },
          p = (function() {
            var t = {};
            for (var e in h) t[e] = { valueEncoding: h[e] };
            return t;
          })();
        e.exports = {
          defaultOptions: f,
          copy: r,
          getOptions: i,
          getLevelDOWN: o,
          dispatchError: s,
          isDefined: a
        };
      },
      {
        '../package.json': 64,
        './encodings': 59,
        './errors': 60,
        leveldown: 17,
        'leveldown/package': 17,
        semver: 17,
        xtend: 63
      }
    ],
    63: [
      function(t, e, n) {
        function r() {
          for (var t = {}, e = 0; e < arguments.length; e++) {
            var n = arguments[e];
            for (var r in n) n.hasOwnProperty(r) && (t[r] = n[r]);
          }
          return t;
        }
        e.exports = r;
      },
      {}
    ],
    64: [
      function(t, e, n) {
        e.exports = {
          _args: [
            [
              {
                raw: 'levelup@~0.19.0',
                scope: null,
                escapedName: 'levelup',
                name: 'levelup',
                rawSpec: '~0.19.0',
                spec: '>=0.19.0 <0.20.0',
                type: 'range'
              },
              '/Users/jimkang/gcw/council/node_modules/level-sublevel'
            ]
          ],
          _from: 'levelup@>=0.19.0 <0.20.0',
          _id: 'levelup@0.19.1',
          _inCache: !0,
          _installable: !0,
          _location: '/level-sublevel/levelup',
          _nodeVersion: '5.5.0',
          _npmUser: {
            name: 'ralphtheninja',
            email: 'ralphtheninja@riseup.net'
          },
          _npmVersion: '3.3.12',
          _phantomChildren: {},
          _requested: {
            raw: 'levelup@~0.19.0',
            scope: null,
            escapedName: 'levelup',
            name: 'levelup',
            rawSpec: '~0.19.0',
            spec: '>=0.19.0 <0.20.0',
            type: 'range'
          },
          _requiredBy: ['/level-sublevel'],
          _resolved: 'https://registry.npmjs.org/levelup/-/levelup-0.19.1.tgz',
          _shasum: 'f3a6a7205272c4b5f35e412ff004a03a0aedf50b',
          _shrinkwrap: null,
          _spec: 'levelup@~0.19.0',
          _where: '/Users/jimkang/gcw/council/node_modules/level-sublevel',
          browser: { leveldown: !1, 'leveldown/package': !1, semver: !1 },
          bugs: { url: 'https://github.com/rvagg/node-levelup/issues' },
          contributors: [
            {
              name: 'Rod Vagg',
              email: 'r@va.gg',
              url: 'https://github.com/rvagg'
            },
            {
              name: 'John Chesley',
              email: 'john@chesl.es',
              url: 'https://github.com/chesles/'
            },
            {
              name: 'Jake Verbaten',
              email: 'raynos2@gmail.com',
              url: 'https://github.com/raynos'
            },
            {
              name: 'Dominic Tarr',
              email: 'dominic.tarr@gmail.com',
              url: 'https://github.com/dominictarr'
            },
            {
              name: 'Max Ogden',
              email: 'max@maxogden.com',
              url: 'https://github.com/maxogden'
            },
            {
              name: 'Lars-Magnus Skog',
              email: 'lars.magnus.skog@gmail.com',
              url: 'https://github.com/ralphtheninja'
            },
            {
              name: 'David Björklund',
              email: 'david.bjorklund@gmail.com',
              url: 'https://github.com/kesla'
            },
            {
              name: 'Julian Gruber',
              email: 'julian@juliangruber.com',
              url: 'https://github.com/juliangruber'
            },
            {
              name: 'Paolo Fragomeni',
              email: 'paolo@async.ly',
              url: 'https://github.com/hij1nx'
            },
            {
              name: 'Anton Whalley',
              email: 'anton.whalley@nearform.com',
              url: 'https://github.com/No9'
            },
            {
              name: 'Matteo Collina',
              email: 'matteo.collina@gmail.com',
              url: 'https://github.com/mcollina'
            },
            {
              name: 'Pedro Teixeira',
              email: 'pedro.teixeira@gmail.com',
              url: 'https://github.com/pgte'
            },
            {
              name: 'James Halliday',
              email: 'mail@substack.net',
              url: 'https://github.com/substack'
            }
          ],
          dependencies: {
            bl: '~0.8.1',
            'deferred-leveldown': '~0.2.0',
            errno: '~0.1.1',
            prr: '~0.0.0',
            'readable-stream': '~1.0.26',
            semver: '~5.1.0',
            xtend: '~3.0.0'
          },
          description:
            'Fast & simple storage - a Node.js-style LevelDB wrapper',
          devDependencies: {
            async: '*',
            boganipsum: '*',
            bustermove: '~1.0.1',
            delayed: '*',
            du: '*',
            fstream: '*',
            leveldown: '~0.10.0',
            memdown: '^0.11.0',
            mkfiletree: '*',
            'msgpack-js': '*',
            readfiletree: '*',
            referee: '*',
            rimraf: '*',
            'slow-stream': '>=0.0.4',
            tap: '2.x.x',
            tape: '4.x.x',
            tar: '*'
          },
          directories: {},
          dist: {
            shasum: 'f3a6a7205272c4b5f35e412ff004a03a0aedf50b',
            tarball: 'https://registry.npmjs.org/levelup/-/levelup-0.19.1.tgz'
          },
          gitHead: '2847795d54c6eceb865e2c6b5157bccf68132c55',
          homepage: 'https://github.com/rvagg/node-levelup',
          keywords: [
            'leveldb',
            'stream',
            'database',
            'db',
            'store',
            'storage',
            'json'
          ],
          license: 'MIT',
          main: 'lib/levelup.js',
          maintainers: [
            { name: 'rvagg', email: 'rod@vagg.org' },
            { name: 'ralphtheninja', email: 'ralphtheninja@riseup.net' },
            { name: 'juliangruber', email: 'julian@juliangruber.com' }
          ],
          name: 'levelup',
          optionalDependencies: {},
          readme: 'ERROR: No README data found!',
          repository: {
            type: 'git',
            url: 'git+https://github.com/rvagg/node-levelup.git'
          },
          scripts: {
            alltests: 'npm test && npm run-script functionaltests',
            functionaltests:
              'node ./test/functional/fstream-test.js && node ./test/functional/binary-data-test.js && node ./test/functional/compat-test.js',
            test: 'tap test/*-test.js'
          },
          version: '0.19.1'
        };
      },
      {}
    ],
    65: [
      function(t, e, n) {
        (function(n) {
          function r(t) {
            return this instanceof r
              ? (u.call(this, t),
                c.call(this, t),
                t && t.readable === !1 && (this.readable = !1),
                t && t.writable === !1 && (this.writable = !1),
                (this.allowHalfOpen = !0),
                t && t.allowHalfOpen === !1 && (this.allowHalfOpen = !1),
                void this.once('end', i))
              : new r(t);
          }
          function i() {
            this.allowHalfOpen ||
              this._writableState.ended ||
              n.nextTick(this.end.bind(this));
          }
          function o(t, e) {
            for (var n = 0, r = t.length; n < r; n++) e(t[n], n);
          }
          e.exports = r;
          var s =
              Object.keys ||
              function(t) {
                var e = [];
                for (var n in t) e.push(n);
                return e;
              },
            a = t('core-util-is');
          a.inherits = t('inherits');
          var u = t('./_stream_readable'),
            c = t('./_stream_writable');
          a.inherits(r, u),
            o(s(c.prototype), function(t) {
              r.prototype[t] || (r.prototype[t] = c.prototype[t]);
            });
        }.call(this, t('_process')));
      },
      {
        './_stream_readable': 67,
        './_stream_writable': 69,
        _process: 87,
        'core-util-is': 21,
        inherits: 42
      }
    ],
    66: [
      function(t, e, n) {
        function r(t) {
          return this instanceof r ? void i.call(this, t) : new r(t);
        }
        e.exports = r;
        var i = t('./_stream_transform'),
          o = t('core-util-is');
        (o.inherits = t('inherits')),
          o.inherits(r, i),
          (r.prototype._transform = function(t, e, n) {
            n(null, t);
          });
      },
      { './_stream_transform': 68, 'core-util-is': 21, inherits: 42 }
    ],
    67: [
      function(t, e, n) {
        (function(n) {
          function r(e, n) {
            e = e || {};
            var r = e.highWaterMark;
            (this.highWaterMark = r || 0 === r ? r : 16384),
              (this.highWaterMark = ~~this.highWaterMark),
              (this.buffer = []),
              (this.length = 0),
              (this.pipes = null),
              (this.pipesCount = 0),
              (this.flowing = !1),
              (this.ended = !1),
              (this.endEmitted = !1),
              (this.reading = !1),
              (this.calledRead = !1),
              (this.sync = !0),
              (this.needReadable = !1),
              (this.emittedReadable = !1),
              (this.readableListening = !1),
              (this.objectMode = !!e.objectMode),
              (this.defaultEncoding = e.defaultEncoding || 'utf8'),
              (this.ranOut = !1),
              (this.awaitDrain = 0),
              (this.readingMore = !1),
              (this.decoder = null),
              (this.encoding = null),
              e.encoding &&
                (j || (j = t('string_decoder/').StringDecoder),
                (this.decoder = new j(e.encoding)),
                (this.encoding = e.encoding));
          }
          function i(t) {
            return this instanceof i
              ? ((this._readableState = new r(t, this)),
                (this.readable = !0),
                void A.call(this))
              : new i(t);
          }
          function o(t, e, n, r, i) {
            var o = c(e, n);
            if (o) t.emit('error', o);
            else if (null === n || void 0 === n)
              (e.reading = !1), e.ended || l(t, e);
            else if (e.objectMode || (n && n.length > 0))
              if (e.ended && !i) {
                var a = new Error('stream.push() after EOF');
                t.emit('error', a);
              } else if (e.endEmitted && i) {
                var a = new Error('stream.unshift() after end event');
                t.emit('error', a);
              } else
                !e.decoder || i || r || (n = e.decoder.write(n)),
                  (e.length += e.objectMode ? 1 : n.length),
                  i
                    ? e.buffer.unshift(n)
                    : ((e.reading = !1), e.buffer.push(n)),
                  e.needReadable && h(t),
                  p(t, e);
            else i || (e.reading = !1);
            return s(e);
          }
          function s(t) {
            return (
              !t.ended &&
              (t.needReadable || t.length < t.highWaterMark || 0 === t.length)
            );
          }
          function a(t) {
            if (t >= R) t = R;
            else {
              t--;
              for (var e = 1; e < 32; e <<= 1) t |= t >> e;
              t++;
            }
            return t;
          }
          function u(t, e) {
            return 0 === e.length && e.ended
              ? 0
              : e.objectMode
              ? 0 === t
                ? 0
                : 1
              : null === t || isNaN(t)
              ? e.flowing && e.buffer.length
                ? e.buffer[0].length
                : e.length
              : t <= 0
              ? 0
              : (t > e.highWaterMark && (e.highWaterMark = a(t)),
                t > e.length
                  ? e.ended
                    ? e.length
                    : ((e.needReadable = !0), 0)
                  : t);
          }
          function c(t, e) {
            var n = null;
            return (
              k.isBuffer(e) ||
                'string' == typeof e ||
                null === e ||
                void 0 === e ||
                t.objectMode ||
                (n = new TypeError('Invalid non-string/buffer chunk')),
              n
            );
          }
          function l(t, e) {
            if (e.decoder && !e.ended) {
              var n = e.decoder.end();
              n &&
                n.length &&
                (e.buffer.push(n), (e.length += e.objectMode ? 1 : n.length));
            }
            (e.ended = !0), e.length > 0 ? h(t) : b(t);
          }
          function h(t) {
            var e = t._readableState;
            (e.needReadable = !1),
              e.emittedReadable ||
                ((e.emittedReadable = !0),
                e.sync
                  ? n.nextTick(function() {
                      f(t);
                    })
                  : f(t));
          }
          function f(t) {
            t.emit('readable');
          }
          function p(t, e) {
            e.readingMore ||
              ((e.readingMore = !0),
              n.nextTick(function() {
                d(t, e);
              }));
          }
          function d(t, e) {
            for (
              var n = e.length;
              !e.reading &&
              !e.flowing &&
              !e.ended &&
              e.length < e.highWaterMark &&
              (t.read(0), n !== e.length);

            )
              n = e.length;
            e.readingMore = !1;
          }
          function y(t) {
            return function() {
              var e = t._readableState;
              e.awaitDrain--, 0 === e.awaitDrain && g(t);
            };
          }
          function g(t) {
            function e(t, e, i) {
              var o = t.write(n);
              !1 === o && r.awaitDrain++;
            }
            var n,
              r = t._readableState;
            for (r.awaitDrain = 0; r.pipesCount && null !== (n = t.read()); )
              if (
                (1 === r.pipesCount ? e(r.pipes, 0, null) : w(r.pipes, e),
                t.emit('data', n),
                r.awaitDrain > 0)
              )
                return;
            return 0 === r.pipesCount
              ? ((r.flowing = !1),
                void (S.listenerCount(t, 'data') > 0 && v(t)))
              : void (r.ranOut = !0);
          }
          function _() {
            this._readableState.ranOut &&
              ((this._readableState.ranOut = !1), g(this));
          }
          function v(t, e) {
            var r = t._readableState;
            if (r.flowing) throw new Error('Cannot switch to old mode now.');
            var i = e || !1,
              o = !1;
            (t.readable = !0),
              (t.pipe = A.prototype.pipe),
              (t.on = t.addListener = A.prototype.on),
              t.on('readable', function() {
                o = !0;
                for (var e; !i && null !== (e = t.read()); ) t.emit('data', e);
                null === e && ((o = !1), (t._readableState.needReadable = !0));
              }),
              (t.pause = function() {
                (i = !0), this.emit('pause');
              }),
              (t.resume = function() {
                (i = !1),
                  o
                    ? n.nextTick(function() {
                        t.emit('readable');
                      })
                    : this.read(0),
                  this.emit('resume');
              }),
              t.emit('readable');
          }
          function m(t, e) {
            var n,
              r = e.buffer,
              i = e.length,
              o = !!e.decoder,
              s = !!e.objectMode;
            if (0 === r.length) return null;
            if (0 === i) n = null;
            else if (s) n = r.shift();
            else if (!t || t >= i)
              (n = o ? r.join('') : k.concat(r, i)), (r.length = 0);
            else if (t < r[0].length) {
              var a = r[0];
              (n = a.slice(0, t)), (r[0] = a.slice(t));
            } else if (t === r[0].length) n = r.shift();
            else {
              n = o ? '' : new k(t);
              for (var u = 0, c = 0, l = r.length; c < l && u < t; c++) {
                var a = r[0],
                  h = Math.min(t - u, a.length);
                o ? (n += a.slice(0, h)) : a.copy(n, u, 0, h),
                  h < a.length ? (r[0] = a.slice(h)) : r.shift(),
                  (u += h);
              }
            }
            return n;
          }
          function b(t) {
            var e = t._readableState;
            if (e.length > 0)
              throw new Error('endReadable called on non-empty stream');
            !e.endEmitted &&
              e.calledRead &&
              ((e.ended = !0),
              n.nextTick(function() {
                e.endEmitted ||
                  0 !== e.length ||
                  ((e.endEmitted = !0), (t.readable = !1), t.emit('end'));
              }));
          }
          function w(t, e) {
            for (var n = 0, r = t.length; n < r; n++) e(t[n], n);
          }
          function x(t, e) {
            for (var n = 0, r = t.length; n < r; n++) if (t[n] === e) return n;
            return -1;
          }
          e.exports = i;
          var E = t('isarray'),
            k = t('buffer').Buffer;
          i.ReadableState = r;
          var S = t('events').EventEmitter;
          S.listenerCount ||
            (S.listenerCount = function(t, e) {
              return t.listeners(e).length;
            });
          var A = t('stream'),
            T = t('core-util-is');
          T.inherits = t('inherits');
          var j;
          T.inherits(i, A),
            (i.prototype.push = function(t, e) {
              var n = this._readableState;
              return (
                'string' != typeof t ||
                  n.objectMode ||
                  ((e = e || n.defaultEncoding),
                  e !== n.encoding && ((t = new k(t, e)), (e = ''))),
                o(this, n, t, e, !1)
              );
            }),
            (i.prototype.unshift = function(t) {
              var e = this._readableState;
              return o(this, e, t, '', !0);
            }),
            (i.prototype.setEncoding = function(e) {
              j || (j = t('string_decoder/').StringDecoder),
                (this._readableState.decoder = new j(e)),
                (this._readableState.encoding = e);
            });
          var R = 8388608;
          (i.prototype.read = function(t) {
            var e = this._readableState;
            e.calledRead = !0;
            var n,
              r = t;
            if (
              (('number' != typeof t || t > 0) && (e.emittedReadable = !1),
              0 === t &&
                e.needReadable &&
                (e.length >= e.highWaterMark || e.ended))
            )
              return h(this), null;
            if (((t = u(t, e)), 0 === t && e.ended))
              return (
                (n = null),
                e.length > 0 &&
                  e.decoder &&
                  ((n = m(t, e)), (e.length -= n.length)),
                0 === e.length && b(this),
                n
              );
            var i = e.needReadable;
            return (
              e.length - t <= e.highWaterMark && (i = !0),
              (e.ended || e.reading) && (i = !1),
              i &&
                ((e.reading = !0),
                (e.sync = !0),
                0 === e.length && (e.needReadable = !0),
                this._read(e.highWaterMark),
                (e.sync = !1)),
              i && !e.reading && (t = u(r, e)),
              (n = t > 0 ? m(t, e) : null),
              null === n && ((e.needReadable = !0), (t = 0)),
              (e.length -= t),
              0 !== e.length || e.ended || (e.needReadable = !0),
              e.ended && !e.endEmitted && 0 === e.length && b(this),
              n
            );
          }),
            (i.prototype._read = function(t) {
              this.emit('error', new Error('not implemented'));
            }),
            (i.prototype.pipe = function(t, e) {
              function r(t) {
                t === l && o();
              }
              function i() {
                t.end();
              }
              function o() {
                t.removeListener('close', a),
                  t.removeListener('finish', u),
                  t.removeListener('drain', d),
                  t.removeListener('error', s),
                  t.removeListener('unpipe', r),
                  l.removeListener('end', i),
                  l.removeListener('end', o),
                  (t._writableState && !t._writableState.needDrain) || d();
              }
              function s(e) {
                c(),
                  t.removeListener('error', s),
                  0 === S.listenerCount(t, 'error') && t.emit('error', e);
              }
              function a() {
                t.removeListener('finish', u), c();
              }
              function u() {
                t.removeListener('close', a), c();
              }
              function c() {
                l.unpipe(t);
              }
              var l = this,
                h = this._readableState;
              switch (h.pipesCount) {
                case 0:
                  h.pipes = t;
                  break;
                case 1:
                  h.pipes = [h.pipes, t];
                  break;
                default:
                  h.pipes.push(t);
              }
              h.pipesCount += 1;
              var f = (!e || e.end !== !1) && t !== n.stdout && t !== n.stderr,
                p = f ? i : o;
              h.endEmitted ? n.nextTick(p) : l.once('end', p),
                t.on('unpipe', r);
              var d = y(l);
              return (
                t.on('drain', d),
                t._events && t._events.error
                  ? E(t._events.error)
                    ? t._events.error.unshift(s)
                    : (t._events.error = [s, t._events.error])
                  : t.on('error', s),
                t.once('close', a),
                t.once('finish', u),
                t.emit('pipe', l),
                h.flowing ||
                  (this.on('readable', _),
                  (h.flowing = !0),
                  n.nextTick(function() {
                    g(l);
                  })),
                t
              );
            }),
            (i.prototype.unpipe = function(t) {
              var e = this._readableState;
              if (0 === e.pipesCount) return this;
              if (1 === e.pipesCount)
                return t && t !== e.pipes
                  ? this
                  : (t || (t = e.pipes),
                    (e.pipes = null),
                    (e.pipesCount = 0),
                    this.removeListener('readable', _),
                    (e.flowing = !1),
                    t && t.emit('unpipe', this),
                    this);
              if (!t) {
                var n = e.pipes,
                  r = e.pipesCount;
                (e.pipes = null),
                  (e.pipesCount = 0),
                  this.removeListener('readable', _),
                  (e.flowing = !1);
                for (var i = 0; i < r; i++) n[i].emit('unpipe', this);
                return this;
              }
              var i = x(e.pipes, t);
              return i === -1
                ? this
                : (e.pipes.splice(i, 1),
                  (e.pipesCount -= 1),
                  1 === e.pipesCount && (e.pipes = e.pipes[0]),
                  t.emit('unpipe', this),
                  this);
            }),
            (i.prototype.on = function(t, e) {
              var n = A.prototype.on.call(this, t, e);
              if (
                ('data' !== t || this._readableState.flowing || v(this),
                'readable' === t && this.readable)
              ) {
                var r = this._readableState;
                r.readableListening ||
                  ((r.readableListening = !0),
                  (r.emittedReadable = !1),
                  (r.needReadable = !0),
                  r.reading ? r.length && h(this, r) : this.read(0));
              }
              return n;
            }),
            (i.prototype.addListener = i.prototype.on),
            (i.prototype.resume = function() {
              v(this), this.read(0), this.emit('resume');
            }),
            (i.prototype.pause = function() {
              v(this, !0), this.emit('pause');
            }),
            (i.prototype.wrap = function(t) {
              var e = this._readableState,
                n = !1,
                r = this;
              t.on('end', function() {
                if (e.decoder && !e.ended) {
                  var t = e.decoder.end();
                  t && t.length && r.push(t);
                }
                r.push(null);
              }),
                t.on('data', function(i) {
                  if (
                    (e.decoder && (i = e.decoder.write(i)),
                    (!e.objectMode || (null !== i && void 0 !== i)) &&
                      (e.objectMode || (i && i.length)))
                  ) {
                    var o = r.push(i);
                    o || ((n = !0), t.pause());
                  }
                });
              for (var i in t)
                'function' == typeof t[i] &&
                  'undefined' == typeof this[i] &&
                  (this[i] = (function(e) {
                    return function() {
                      return t[e].apply(t, arguments);
                    };
                  })(i));
              var o = ['error', 'close', 'destroy', 'pause', 'resume'];
              return (
                w(o, function(e) {
                  t.on(e, r.emit.bind(r, e));
                }),
                (r._read = function(e) {
                  n && ((n = !1), t.resume());
                }),
                r
              );
            }),
            (i._fromList = m);
        }.call(this, t('_process')));
      },
      {
        _process: 87,
        buffer: 18,
        'core-util-is': 21,
        events: 38,
        inherits: 42,
        isarray: 44,
        stream: 100,
        'string_decoder/': 101
      }
    ],
    68: [
      function(t, e, n) {
        function r(t, e) {
          (this.afterTransform = function(t, n) {
            return i(e, t, n);
          }),
            (this.needTransform = !1),
            (this.transforming = !1),
            (this.writecb = null),
            (this.writechunk = null);
        }
        function i(t, e, n) {
          var r = t._transformState;
          r.transforming = !1;
          var i = r.writecb;
          if (!i)
            return t.emit('error', new Error('no writecb in Transform class'));
          (r.writechunk = null),
            (r.writecb = null),
            null !== n && void 0 !== n && t.push(n),
            i && i(e);
          var o = t._readableState;
          (o.reading = !1),
            (o.needReadable || o.length < o.highWaterMark) &&
              t._read(o.highWaterMark);
        }
        function o(t) {
          if (!(this instanceof o)) return new o(t);
          a.call(this, t);
          var e = ((this._transformState = new r(t, this)), this);
          (this._readableState.needReadable = !0),
            (this._readableState.sync = !1),
            this.once('finish', function() {
              'function' == typeof this._flush
                ? this._flush(function(t) {
                    s(e, t);
                  })
                : s(e);
            });
        }
        function s(t, e) {
          if (e) return t.emit('error', e);
          var n = t._writableState,
            r = (t._readableState, t._transformState);
          if (n.length)
            throw new Error('calling transform done when ws.length != 0');
          if (r.transforming)
            throw new Error('calling transform done when still transforming');
          return t.push(null);
        }
        e.exports = o;
        var a = t('./_stream_duplex'),
          u = t('core-util-is');
        (u.inherits = t('inherits')),
          u.inherits(o, a),
          (o.prototype.push = function(t, e) {
            return (
              (this._transformState.needTransform = !1),
              a.prototype.push.call(this, t, e)
            );
          }),
          (o.prototype._transform = function(t, e, n) {
            throw new Error('not implemented');
          }),
          (o.prototype._write = function(t, e, n) {
            var r = this._transformState;
            if (
              ((r.writecb = n),
              (r.writechunk = t),
              (r.writeencoding = e),
              !r.transforming)
            ) {
              var i = this._readableState;
              (r.needTransform ||
                i.needReadable ||
                i.length < i.highWaterMark) &&
                this._read(i.highWaterMark);
            }
          }),
          (o.prototype._read = function(t) {
            var e = this._transformState;
            null !== e.writechunk && e.writecb && !e.transforming
              ? ((e.transforming = !0),
                this._transform(
                  e.writechunk,
                  e.writeencoding,
                  e.afterTransform
                ))
              : (e.needTransform = !0);
          });
      },
      { './_stream_duplex': 65, 'core-util-is': 21, inherits: 42 }
    ],
    69: [
      function(t, e, n) {
        (function(n) {
          function r(t, e, n) {
            (this.chunk = t), (this.encoding = e), (this.callback = n);
          }
          function i(t, e) {
            t = t || {};
            var n = t.highWaterMark;
            (this.highWaterMark = n || 0 === n ? n : 16384),
              (this.objectMode = !!t.objectMode),
              (this.highWaterMark = ~~this.highWaterMark),
              (this.needDrain = !1),
              (this.ending = !1),
              (this.ended = !1),
              (this.finished = !1);
            var r = t.decodeStrings === !1;
            (this.decodeStrings = !r),
              (this.defaultEncoding = t.defaultEncoding || 'utf8'),
              (this.length = 0),
              (this.writing = !1),
              (this.sync = !0),
              (this.bufferProcessing = !1),
              (this.onwrite = function(t) {
                p(e, t);
              }),
              (this.writecb = null),
              (this.writelen = 0),
              (this.buffer = []),
              (this.errorEmitted = !1);
          }
          function o(e) {
            var n = t('./_stream_duplex');
            return this instanceof o || this instanceof n
              ? ((this._writableState = new i(e, this)),
                (this.writable = !0),
                void x.call(this))
              : new o(e);
          }
          function s(t, e, r) {
            var i = new Error('write after end');
            t.emit('error', i),
              n.nextTick(function() {
                r(i);
              });
          }
          function a(t, e, r, i) {
            var o = !0;
            if (
              !b.isBuffer(r) &&
              'string' != typeof r &&
              null !== r &&
              void 0 !== r &&
              !e.objectMode
            ) {
              var s = new TypeError('Invalid non-string/buffer chunk');
              t.emit('error', s),
                n.nextTick(function() {
                  i(s);
                }),
                (o = !1);
            }
            return o;
          }
          function u(t, e, n) {
            return (
              t.objectMode ||
                t.decodeStrings === !1 ||
                'string' != typeof e ||
                (e = new b(e, n)),
              e
            );
          }
          function c(t, e, n, i, o) {
            (n = u(e, n, i)), b.isBuffer(n) && (i = 'buffer');
            var s = e.objectMode ? 1 : n.length;
            e.length += s;
            var a = e.length < e.highWaterMark;
            return (
              a || (e.needDrain = !0),
              e.writing ? e.buffer.push(new r(n, i, o)) : l(t, e, s, n, i, o),
              a
            );
          }
          function l(t, e, n, r, i, o) {
            (e.writelen = n),
              (e.writecb = o),
              (e.writing = !0),
              (e.sync = !0),
              t._write(r, i, e.onwrite),
              (e.sync = !1);
          }
          function h(t, e, r, i, o) {
            r
              ? n.nextTick(function() {
                  o(i);
                })
              : o(i),
              (t._writableState.errorEmitted = !0),
              t.emit('error', i);
          }
          function f(t) {
            (t.writing = !1),
              (t.writecb = null),
              (t.length -= t.writelen),
              (t.writelen = 0);
          }
          function p(t, e) {
            var r = t._writableState,
              i = r.sync,
              o = r.writecb;
            if ((f(r), e)) h(t, r, i, e, o);
            else {
              var s = _(t, r);
              s || r.bufferProcessing || !r.buffer.length || g(t, r),
                i
                  ? n.nextTick(function() {
                      d(t, r, s, o);
                    })
                  : d(t, r, s, o);
            }
          }
          function d(t, e, n, r) {
            n || y(t, e), r(), n && v(t, e);
          }
          function y(t, e) {
            0 === e.length &&
              e.needDrain &&
              ((e.needDrain = !1), t.emit('drain'));
          }
          function g(t, e) {
            e.bufferProcessing = !0;
            for (var n = 0; n < e.buffer.length; n++) {
              var r = e.buffer[n],
                i = r.chunk,
                o = r.encoding,
                s = r.callback,
                a = e.objectMode ? 1 : i.length;
              if ((l(t, e, a, i, o, s), e.writing)) {
                n++;
                break;
              }
            }
            (e.bufferProcessing = !1),
              n < e.buffer.length
                ? (e.buffer = e.buffer.slice(n))
                : (e.buffer.length = 0);
          }
          function _(t, e) {
            return e.ending && 0 === e.length && !e.finished && !e.writing;
          }
          function v(t, e) {
            var n = _(t, e);
            return n && ((e.finished = !0), t.emit('finish')), n;
          }
          function m(t, e, r) {
            (e.ending = !0),
              v(t, e),
              r && (e.finished ? n.nextTick(r) : t.once('finish', r)),
              (e.ended = !0);
          }
          e.exports = o;
          var b = t('buffer').Buffer;
          o.WritableState = i;
          var w = t('core-util-is');
          w.inherits = t('inherits');
          var x = t('stream');
          w.inherits(o, x),
            (o.prototype.pipe = function() {
              this.emit('error', new Error('Cannot pipe. Not readable.'));
            }),
            (o.prototype.write = function(t, e, n) {
              var r = this._writableState,
                i = !1;
              return (
                'function' == typeof e && ((n = e), (e = null)),
                b.isBuffer(t) ? (e = 'buffer') : e || (e = r.defaultEncoding),
                'function' != typeof n && (n = function() {}),
                r.ended
                  ? s(this, r, n)
                  : a(this, r, t, n) && (i = c(this, r, t, e, n)),
                i
              );
            }),
            (o.prototype._write = function(t, e, n) {
              n(new Error('not implemented'));
            }),
            (o.prototype.end = function(t, e, n) {
              var r = this._writableState;
              'function' == typeof t
                ? ((n = t), (t = null), (e = null))
                : 'function' == typeof e && ((n = e), (e = null)),
                'undefined' != typeof t && null !== t && this.write(t, e),
                r.ending || r.finished || m(this, r, n);
            });
        }.call(this, t('_process')));
      },
      {
        './_stream_duplex': 65,
        _process: 87,
        buffer: 18,
        'core-util-is': 21,
        inherits: 42,
        stream: 100
      }
    ],
    70: [
      function(t, e, n) {
        (function(r) {
          var i = t('stream');
          (n = e.exports = t('./lib/_stream_readable.js')),
            (n.Stream = i),
            (n.Readable = n),
            (n.Writable = t('./lib/_stream_writable.js')),
            (n.Duplex = t('./lib/_stream_duplex.js')),
            (n.Transform = t('./lib/_stream_transform.js')),
            (n.PassThrough = t('./lib/_stream_passthrough.js')),
            r.browser ||
              'disable' !== r.env.READABLE_STREAM ||
              (e.exports = t('stream'));
        }.call(this, t('_process')));
      },
      {
        './lib/_stream_duplex.js': 65,
        './lib/_stream_passthrough.js': 66,
        './lib/_stream_readable.js': 67,
        './lib/_stream_transform.js': 68,
        './lib/_stream_writable.js': 69,
        _process: 87,
        stream: 100
      }
    ],
    71: [
      function(t, e, n) {
        arguments[4][33][0].apply(n, arguments);
      },
      { dup: 33 }
    ],
    72: [
      function(t, e, n) {
        function r(t) {
          return 'function' == typeof t;
        }
        function i(t) {
          return null == t ? t : r(t.prefix) ? t.prefix() : t;
        }
        function o(t) {
          var e = {};
          for (var n in t) e[n] = t[n];
          return e;
        }
        var s = t('./hooks'),
          a = t('ltgt');
        e.exports = function(t, e, n, u) {
          function c(t, r, i, o) {
            return e.encode([t, n.encodeKey(r, i, o)]);
          }
          function l(t, e) {
            return (
              e &&
                e.options &&
                ((t.keyEncoding = t.keyEncoding || e.options.keyEncoding),
                (t.valueEncoding = t.valueEncoding || e.options.valueEncoding)),
              t
            );
          }
          function h() {
            for (y = !0; d.length; ) d.shift()();
          }
          var f = s(u),
            p = s(u),
            d = [],
            y = !1;
          return (
            r(t.isOpen) && t.isOpen() ? (y = !0) : t.open(h),
            {
              apply: function(e, r, o) {
                function s(t) {
                  return t === !1 ? delete e[a] : void e.push(t);
                }
                for (var a = 0; a < e.length; a++) {
                  var u = e[a];
                  l(u, u.prefix),
                    (u.prefix = i(u.prefix)),
                    f.trigger([u.prefix, u.key], [u, s, e]);
                }
                if (((r = r || {}), 'object' != typeof r))
                  throw new Error('opts must be object, was:' + r);
                'function' == typeof r && ((o = r), (r = {})),
                  e.length
                    ? (t.db || t).batch(
                        e.map(function(t) {
                          return {
                            key: c(t.prefix, t.key, r, t),
                            value:
                              'del' !== t.type
                                ? n.encodeValue(t.value, r, t)
                                : void 0,
                            type: t.type || (void 0 === t.value ? 'del' : 'put')
                          };
                        }),
                        r,
                        function(t) {
                          return t
                            ? o(t)
                            : (e.forEach(function(t) {
                                p.trigger([t.prefix, t.key], [t]);
                              }),
                              void o());
                        }
                      )
                    : o();
              },
              get: function(e, r, i, o) {
                return (
                  (i.asBuffer = n.isValueAsBuffer(i)),
                  (t.db || t).get(c(r, e, i), i, function(t, e) {
                    t ? o(t) : o(null, n.decodeValue(e, i));
                  })
                );
              },
              pre: f.add,
              post: p.add,
              createDecoder: function(t) {
                return t.keys !== !1 && t.values !== !1
                  ? function(r, i) {
                      return {
                        key: n.decodeKey(e.decode(r)[1], t),
                        value: n.decodeValue(i, t)
                      };
                    }
                  : t.values !== !1
                  ? function(e, r) {
                      return n.decodeValue(r, t);
                    }
                  : t.keys !== !1
                  ? function(r) {
                      return n.decodeKey(e.decode(r)[1], t);
                    }
                  : function() {};
              },
              isOpen: function() {
                return t.db && r(t.db.isOpen) ? t.db.isOpen() : t.isOpen();
              },
              isClosed: function() {
                return t.db && r(t.db.isClosed)
                  ? t.db.isClosed()
                  : t.isClosed();
              },
              close: function(e) {
                return t.close(e);
              },
              iterator: function(r, i) {
                function s(t) {
                  return c(h, t, l, {});
                }
                function u(t) {
                  return {
                    next: function(e) {
                      return t.next(e);
                    },
                    end: function(e) {
                      t.end(e);
                    }
                  };
                }
                var l = o(r || {}),
                  h = r.prefix || [];
                return (
                  a.toLtgt(r, l, s, e.lowerBound, e.upperBound),
                  (l.prefix = null),
                  (l.keyAsBuffer = l.valueAsBuffer = !1),
                  'number' != typeof l.limit && (l.limit = -1),
                  (l.keyAsBuffer = e.buffer),
                  (l.valueAsBuffer = n.isValueAsBuffer(l)),
                  y
                    ? u((t.db || t).iterator(l))
                    : void d.push(function() {
                        i(null, u((t.db || t).iterator(l)));
                      })
                );
              }
            }
          );
        };
      },
      { './hooks': 56, ltgt: 81 }
    ],
    73: [
      function(t, e, n) {
        e.exports = {
          _args: [
            [
              {
                raw: 'level-sublevel',
                scope: null,
                escapedName: 'level-sublevel',
                name: 'level-sublevel',
                rawSpec: '',
                spec: 'latest',
                type: 'tag'
              },
              '/Users/jimkang/gcw/council'
            ]
          ],
          _from: 'level-sublevel@latest',
          _id: 'level-sublevel@6.5.4',
          _inCache: !0,
          _installable: !0,
          _location: '/level-sublevel',
          _nodeVersion: '5.3.0',
          _npmUser: { name: 'dominictarr', email: 'dominic.tarr@gmail.com' },
          _npmVersion: '3.3.12',
          _phantomChildren: {
            'abstract-leveldown': '0.12.4',
            'core-util-is': '1.0.2',
            errno: '0.1.4',
            inherits: '2.0.3',
            isarray: '0.0.1',
            semver: '5.1.1',
            string_decoder: '0.10.31'
          },
          _requested: {
            raw: 'level-sublevel',
            scope: null,
            escapedName: 'level-sublevel',
            name: 'level-sublevel',
            rawSpec: '',
            spec: 'latest',
            type: 'tag'
          },
          _requiredBy: ['#USER', '/'],
          _resolved:
            'https://registry.npmjs.org/level-sublevel/-/level-sublevel-6.5.4.tgz',
          _shasum: '92e6534e7ac3fa35c8bdb121b8a8094a8d1c0826',
          _shrinkwrap: null,
          _spec: 'level-sublevel',
          _where: '/Users/jimkang/gcw/council',
          author: {
            name: 'Dominic Tarr',
            email: 'dominic.tarr@gmail.com',
            url: 'http://dominictarr.com'
          },
          bugs: { url: 'https://github.com/dominictarr/level-sublevel/issues' },
          dependencies: {
            bytewise: '~1.1.0',
            levelup: '~0.19.0',
            ltgt: '~2.1.1',
            'pull-stream': '~2.21.0',
            typewiselite: '~1.0.0',
            xtend: '~4.0.0'
          },
          description: 'partition levelup databases',
          devDependencies: {
            level: '^1.4.0',
            'level-test': '^2.0.1',
            'monotonic-timestamp': '0.0.8',
            'pull-level': '~1.1.1',
            rimraf: '~2.1.4',
            shasum: '0.0.2',
            'stream-to-pull-stream': '~1.2.0',
            tape: '~2.14.0',
            through: '~2.3.4'
          },
          directories: {},
          dist: {
            shasum: '92e6534e7ac3fa35c8bdb121b8a8094a8d1c0826',
            tarball:
              'https://registry.npmjs.org/level-sublevel/-/level-sublevel-6.5.4.tgz'
          },
          gitHead: 'fa1b7121f9632b637e650cc1ec9b1723b60df864',
          homepage: 'https://github.com/dominictarr/level-sublevel',
          license: 'MIT',
          maintainers: [
            { name: 'dominictarr', email: 'dominic.tarr@gmail.com' }
          ],
          name: 'level-sublevel',
          optionalDependencies: {},
          readme: 'ERROR: No README data found!',
          repository: {
            type: 'git',
            url: 'git://github.com/dominictarr/level-sublevel.git'
          },
          scripts: { test: 'set -e; for t in test/*.js; do node $t; done' },
          stability: 'unstable',
          testling: {
            files: 'test/*.js',
            browsers: [
              'ie/8..latest',
              'firefox/17..latest',
              'firefox/nightly',
              'chrome/22..latest',
              'chrome/canary',
              'opera/12..latest',
              'opera/next',
              'safari/5.1..latest',
              'ipad/6.0..latest',
              'iphone/6.0..latest',
              'android-browser/4.2..latest'
            ]
          },
          version: '6.5.4'
        };
      },
      {}
    ],
    74: [
      function(t, e, n) {
        (function(r) {
          function i(t) {
            return Array.isArray(t) || r.isBuffer(t);
          }
          function o(t) {
            return 'string' == typeof t || 'number' == typeof t;
          }
          function s(t, e) {
            return Object.hasOwnProperty.call(t, e);
          }
          function a(t, e) {
            if (i(t) && i(e)) {
              for (var n = Math.min(t.length, e.length), r = 0; r < n; r++) {
                var s = a(t[r], e[r]);
                if (s) return s;
              }
              return t.length - e.length;
            }
            if (o(t) && o(e)) return t < e ? -1 : t > e ? 1 : 0;
            throw new Error(
              'items not comparable:' +
                JSON.stringify(t) +
                ' ' +
                JSON.stringify(e)
            );
          }
          function u(t, e) {
            if (t.length > e.length) return !1;
            var n = t.length - 1,
              r = t[n],
              o = e[n];
            if (typeof r != typeof o) return !1;
            if ('string' == typeof r && 0 != o.indexOf(r)) return !1;
            for (1 == t.length && i(r) && n++; n--; )
              if (a(t[n], e[n])) return !1;
            return !0;
          }
          function c(t, e) {
            var n = l.toLtgt(e, null, function(e) {
              return [t, e];
            });
            return s(n, 'gte') || s(n, 'lte') ? n : [t];
          }
          var l = t('ltgt');
          (n = e.exports = function(t, e, n) {
            return (n = n || a), i(t) ? u(t, e) : l.contains(t, e, n);
          }),
            (n.compare = a),
            (n.prefix = u),
            (n.addPrefix = c);
        }.call(this, { isBuffer: t('../is-buffer/index.js') }));
      },
      { '../is-buffer/index.js': 43, ltgt: 81 }
    ],
    75: [
      function(t, e, n) {
        (function(n) {
          function r(t) {
            return 'function' == typeof t;
          }
          function i(t) {
            return 'string' == typeof t;
          }
          function o(t) {
            return t && 'object' == typeof t;
          }
          var s = t('events').EventEmitter,
            a = t('./range').addPrefix,
            u = t('levelup/lib/errors'),
            c = t('./package.json').version,
            l = (e.exports = function(t, e, h, f) {
              function p(t) {
                t && y.emit('error', t);
              }
              function d(t) {
                var e = {};
                if (f) for (var n in f) void 0 != f[n] && (e[n] = f[n]);
                if (t) for (var n in t) void 0 != t[n] && (e[n] = t[n]);
                return e;
              }
              var y = new s();
              return (
                (y.sublevels = {}),
                (y.options = f),
                (y.version = c),
                (y.methods = {}),
                (e = e || []),
                (h =
                  h ||
                  function(t) {
                    return t;
                  }),
                (y.put = function(n, r, i, o) {
                  'function' == typeof i && ((o = i), (i = {})),
                    o || (o = p),
                    t.apply(
                      [{ key: n, value: r, prefix: e.slice(), type: 'put' }],
                      d(i),
                      function(t) {
                        if ((t || (y.emit('put', n, r), o(null)), t))
                          return o(t);
                      }
                    );
                }),
                (y.prefix = function() {
                  return e.slice();
                }),
                (y.del = function(n, r, i) {
                  'function' == typeof r && ((i = r), (r = {})),
                    i || (i = p),
                    t.apply(
                      [{ key: n, prefix: e.slice(), type: 'del' }],
                      d(r),
                      function(t) {
                        if ((t || (y.emit('del', n), i(null)), t)) return i(t);
                      }
                    );
                }),
                (y.batch = function(n, r, i) {
                  'function' == typeof r && ((i = r), (r = {})),
                    i || (i = p),
                    (n = n.map(function(t) {
                      return {
                        key: t.key,
                        value: t.value,
                        prefix: t.prefix || e,
                        keyEncoding: t.keyEncoding,
                        valueEncoding: t.valueEncoding,
                        type: t.type
                      };
                    })),
                    t.apply(n, d(r), function(t) {
                      if ((t || (y.emit('batch', n), i(null)), t)) return i(t);
                    });
                }),
                (y.get = function(n, r, i) {
                  'function' == typeof r && ((i = r), (r = {})),
                    t.get(n, e, d(r), function(t, e) {
                      t
                        ? i(new u.NotFoundError('Key not found in database', t))
                        : i(null, e);
                    });
                }),
                (y.clone = function(n) {
                  return l(t, e, h, d(n));
                }),
                (y.sublevel = function(n, r) {
                  return (y.sublevels[n] =
                    y.sublevels[n] || l(t, e.concat(n), h, d(r)));
                }),
                (y.pre = function(n, s) {
                  if (r(n)) return t.pre([e], n);
                  if (i(n)) return t.pre([e, n], s);
                  if (o(n)) return t.pre(a(e, n), s);
                  throw new Error('not implemented yet');
                }),
                (y.post = function(n, s) {
                  if (r(n)) return t.post([e], n);
                  if (i(n)) return t.post([e, n], s);
                  if (o(n)) return t.post(a(e, n), s);
                  throw new Error('not implemented yet');
                }),
                (y.readStream = y.createReadStream = function(n) {
                  (n = d(n)), (n.prefix = e);
                  var r,
                    i = t.iterator(n, function(t, e) {
                      r.setIterator(e);
                    });
                  return (
                    (r = h(n, t.createDecoder(n))), i && r.setIterator(i), r
                  );
                }),
                (y.valueStream = y.createValueStream = function(t) {
                  return (
                    (t = t || {}),
                    (t.values = !0),
                    (t.keys = !1),
                    y.createReadStream(t)
                  );
                }),
                (y.keyStream = y.createKeyStream = function(t) {
                  return (
                    (t = t || {}),
                    (t.values = !1),
                    (t.keys = !0),
                    y.createReadStream(t)
                  );
                }),
                (y.close = function(r) {
                  (r = r || function() {}),
                    e.length ? n.nextTick(r) : t.close(r);
                }),
                (y.isOpen = t.isOpen),
                (y.isClosed = t.isClosed),
                y
              );
            });
        }.call(this, t('_process')));
      },
      {
        './package.json': 73,
        './range': 74,
        _process: 87,
        events: 38,
        'levelup/lib/errors': 60
      }
    ],
    76: [
      function(t, e, n) {
        function r(t, e) {
          (this._levelup = t),
            (this._codec = e),
            (this.batch = t.db.batch()),
            (this.ops = []),
            (this.length = 0);
        }
        var i = t('./util'),
          o = t('level-errors').WriteError,
          s = i.getOptions,
          a = i.dispatchError;
        (r.prototype.put = function(t, e, n) {
          n = s(n);
          var r = this._codec.encodeKey(t, n),
            i = this._codec.encodeValue(e, n);
          try {
            this.batch.put(r, i);
          } catch (t) {
            throw new o(t);
          }
          return (
            this.ops.push({ type: 'put', key: r, value: i }),
            this.length++,
            this
          );
        }),
          (r.prototype.del = function(t, e) {
            e = s(e);
            var n = this._codec.encodeKey(t, e);
            try {
              this.batch.del(n);
            } catch (t) {
              throw new o(t);
            }
            return this.ops.push({ type: 'del', key: n }), this.length++, this;
          }),
          (r.prototype.clear = function() {
            try {
              this.batch.clear();
            } catch (t) {
              throw new o(t);
            }
            return (this.ops = []), (this.length = 0), this;
          }),
          (r.prototype.write = function(t) {
            var e = this._levelup,
              n = this.ops;
            try {
              this.batch.write(function(r) {
                return r
                  ? a(e, new o(r), t)
                  : (e.emit('batch', n), void (t && t()));
              });
            } catch (t) {
              throw new o(t);
            }
          }),
          (e.exports = r);
      },
      { './util': 78, 'level-errors': 48 }
    ],
    77: [
      function(t, e, n) {
        (function(n) {
          function r(t, e) {
            return 'function' == typeof t ? t : e;
          }
          function i(t, e, r) {
            if (!(this instanceof i)) return new i(t, e, r);
            var o;
            if (
              (c.call(this),
              this.setMaxListeners(1 / 0),
              'function' == typeof t
                ? ((e = 'object' == typeof e ? e : {}), (e.db = t), (t = null))
                : 'object' == typeof t &&
                  'function' == typeof t.db &&
                  ((e = t), (t = null)),
              'function' == typeof e && ((r = e), (e = {})),
              (!e || 'function' != typeof e.db) && 'string' != typeof t)
            ) {
              if (((o = new x('Must provide a location for the database')), r))
                return n.nextTick(function() {
                  r(o);
                });
              throw o;
            }
            (e = A(e)),
              (this.options = f(T, e)),
              (this._codec = new S(this.options)),
              (this._status = 'new'),
              p(this, 'location', t, 'e'),
              this.open(r);
          }
          function o(t, e, n) {
            if (!t._isOpening() && !t.isOpen())
              return R(t, new v('Database is not open'), n), !0;
          }
          function s(t, e, n) {
            R(t, new _(e), n);
          }
          function a(t, e, n) {
            R(t, new v(e), n);
          }
          function u(t) {
            return function(e, n) {
              j()[t](e, n || function() {});
            };
          }
          var c = t('events').EventEmitter,
            l = t('util').inherits,
            h = t('util').deprecate,
            f = t('xtend'),
            p = t('prr'),
            d = t('deferred-leveldown'),
            y = t('level-iterator-stream'),
            g = t('level-errors'),
            _ = g.WriteError,
            v = g.ReadError,
            m = g.NotFoundError,
            b = g.OpenError,
            w = g.EncodingError,
            x = g.InitializationError,
            E = t('./util'),
            k = t('./batch'),
            S = t('level-codec'),
            A = E.getOptions,
            T = E.defaultOptions,
            j = E.getLevelDOWN,
            R = E.dispatchError;
          E.isDefined;
          l(i, c),
            (i.prototype.open = function(t) {
              var e,
                r,
                i = this;
              return this.isOpen()
                ? (t &&
                    n.nextTick(function() {
                      t(null, i);
                    }),
                  this)
                : this._isOpening()
                ? t &&
                  this.once('open', function() {
                    t(null, i);
                  })
                : (this.emit('opening'),
                  (this._status = 'opening'),
                  (this.db = new d(this.location)),
                  (e = this.options.db || j()),
                  (r = e(this.location)),
                  void r.open(this.options, function(e) {
                    return e
                      ? R(i, new b(e), t)
                      : (i.db.setDb(r),
                        (i.db = r),
                        (i._status = 'open'),
                        t && t(null, i),
                        i.emit('open'),
                        i.emit('ready'),
                        void 0);
                  }));
            }),
            (i.prototype.close = function(t) {
              var e = this;
              if (this.isOpen())
                (this._status = 'closing'),
                  this.db.close(function() {
                    (e._status = 'closed'),
                      e.emit('closed'),
                      t && t.apply(null, arguments);
                  }),
                  this.emit('closing'),
                  (this.db = new d(this.location));
              else {
                if ('closed' == this._status && t) return n.nextTick(t);
                'closing' == this._status && t
                  ? this.once('closed', t)
                  : this._isOpening() &&
                    this.once('open', function() {
                      e.close(t);
                    });
              }
            }),
            (i.prototype.isOpen = function() {
              return 'open' == this._status;
            }),
            (i.prototype._isOpening = function() {
              return 'opening' == this._status;
            }),
            (i.prototype.isClosed = function() {
              return /^clos/.test(this._status);
            }),
            (i.prototype.get = function(t, e, n) {
              var i,
                s = this;
              if (((n = r(e, n)), !o(this, e, n))) {
                if (null === t || void 0 === t || 'function' != typeof n)
                  return a(
                    this,
                    'get() requires key and callback arguments',
                    n
                  );
                (e = E.getOptions(e)),
                  (i = this._codec.encodeKey(t, e)),
                  (e.asBuffer = this._codec.valueAsBuffer(e)),
                  this.db.get(i, e, function(r, i) {
                    if (r)
                      return (
                        (r =
                          /notfound/i.test(r) || r.notFound
                            ? new m('Key not found in database [' + t + ']', r)
                            : new v(r)),
                        R(s, r, n)
                      );
                    if (n) {
                      try {
                        i = s._codec.decodeValue(i, e);
                      } catch (t) {
                        return n(new w(t));
                      }
                      n(null, i);
                    }
                  });
              }
            }),
            (i.prototype.put = function(t, e, n, i) {
              var a,
                u,
                c = this;
              return (
                (i = r(n, i)),
                null === t || void 0 === t
                  ? s(this, 'put() requires a key argument', i)
                  : void (
                      o(this, n, i) ||
                      ((n = A(n)),
                      (a = this._codec.encodeKey(t, n)),
                      (u = this._codec.encodeValue(e, n)),
                      this.db.put(a, u, n, function(n) {
                        return n
                          ? R(c, new _(n), i)
                          : (c.emit('put', t, e), void (i && i()));
                      }))
                    )
              );
            }),
            (i.prototype.del = function(t, e, n) {
              var i,
                a = this;
              return (
                (n = r(e, n)),
                null === t || void 0 === t
                  ? s(this, 'del() requires a key argument', n)
                  : void (
                      o(this, e, n) ||
                      ((e = A(e)),
                      (i = this._codec.encodeKey(t, e)),
                      this.db.del(i, e, function(e) {
                        return e
                          ? R(a, new _(e), n)
                          : (a.emit('del', t), void (n && n()));
                      }))
                    )
              );
            }),
            (i.prototype.batch = function(t, e, n) {
              var i,
                a = this;
              return arguments.length
                ? ((n = r(e, n)),
                  Array.isArray(t)
                    ? void (
                        o(this, e, n) ||
                        ((e = A(e)),
                        (i = a._codec.encodeBatch(t, e)),
                        (i = i.map(function(t) {
                          return (
                            t.type ||
                              void 0 === t.key ||
                              void 0 === t.value ||
                              (t.type = 'put'),
                            t
                          );
                        })),
                        this.db.batch(i, e, function(e) {
                          return e
                            ? R(a, new _(e), n)
                            : (a.emit('batch', t), void (n && n()));
                        }))
                      )
                    : s(this, 'batch() requires an array argument', n))
                : new k(this, this._codec);
            }),
            (i.prototype.approximateSize = h(function(t, e, n, i) {
              var o,
                s,
                u = this;
              return (
                (i = r(n, i)),
                (n = A(n)),
                null === t ||
                void 0 === t ||
                null === e ||
                void 0 === e ||
                'function' != typeof i
                  ? a(
                      this,
                      'approximateSize() requires start, end and callback arguments',
                      i
                    )
                  : ((o = this._codec.encodeKey(t, n)),
                    (s = this._codec.encodeKey(e, n)),
                    void this.db.approximateSize(o, s, function(t, e) {
                      return t ? R(u, new b(t), i) : void (i && i(null, e));
                    }))
              );
            }, 'db.approximateSize() is deprecated. Use db.db.approximateSize() instead')),
            (i.prototype.readStream = i.prototype.createReadStream = function(
              t
            ) {
              return (
                (t = f({ keys: !0, values: !0 }, this.options, t)),
                (t.keyEncoding = t.keyEncoding),
                (t.valueEncoding = t.valueEncoding),
                (t = this._codec.encodeLtgt(t)),
                (t.keyAsBuffer = this._codec.keyAsBuffer(t)),
                (t.valueAsBuffer = this._codec.valueAsBuffer(t)),
                'number' != typeof t.limit && (t.limit = -1),
                new y(
                  this.db.iterator(t),
                  f(t, { decoder: this._codec.createStreamDecoder(t) })
                )
              );
            }),
            (i.prototype.keyStream = i.prototype.createKeyStream = function(t) {
              return this.createReadStream(f(t, { keys: !0, values: !1 }));
            }),
            (i.prototype.valueStream = i.prototype.createValueStream = function(
              t
            ) {
              return this.createReadStream(f(t, { keys: !1, values: !0 }));
            }),
            (i.prototype.toString = function() {
              return 'LevelUP';
            }),
            (e.exports = i),
            (e.exports.errors = t('level-errors')),
            (e.exports.destroy = h(
              u('destroy'),
              'levelup.destroy() is deprecated. Use leveldown.destroy() instead'
            )),
            (e.exports.repair = h(
              u('repair'),
              'levelup.repair() is deprecated. Use leveldown.repair() instead'
            ));
        }.call(this, t('_process')));
      },
      {
        './batch': 76,
        './util': 78,
        _process: 87,
        'deferred-leveldown': 27,
        events: 38,
        'level-codec': 46,
        'level-errors': 48,
        'level-iterator-stream': 49,
        prr: 88,
        util: 105,
        xtend: 79
      }
    ],
    78: [
      function(t, e, n) {
        function r(t) {
          return (
            'string' == typeof t && (t = { valueEncoding: t }),
            'object' != typeof t && (t = {}),
            t
          );
        }
        function i() {
          if (u) return u;
          var e,
            n = t('../package.json').devDependencies.leveldown;
          try {
            e = t('leveldown/package').version;
          } catch (t) {
            throw o(t);
          }
          if (!t('semver').satisfies(e, n))
            throw new c(
              'Installed version of LevelDOWN (' +
                e +
                ') does not match required version (' +
                n +
                ')'
            );
          try {
            return (u = t('leveldown'));
          } catch (t) {
            throw o(t);
          }
        }
        function o(t) {
          var e =
            "Failed to require LevelDOWN (%s). Try `npm install leveldown` if it's missing";
          return new c(l(e, t.message));
        }
        function s(t, e, n) {
          'function' == typeof n ? n(e) : t.emit('error', e);
        }
        function a(t) {
          return 'undefined' != typeof t;
        }
        var u,
          c = (t('xtend'), t('level-errors').LevelUPError),
          l = t('util').format,
          h = {
            createIfMissing: !0,
            errorIfExists: !1,
            keyEncoding: 'utf8',
            valueEncoding: 'utf8',
            compression: !0
          };
        e.exports = {
          defaultOptions: h,
          getOptions: r,
          getLevelDOWN: i,
          dispatchError: s,
          isDefined: a
        };
      },
      {
        '../package.json': 80,
        'level-errors': 48,
        leveldown: 17,
        'leveldown/package': 17,
        semver: 17,
        util: 105,
        xtend: 79
      }
    ],
    79: [
      function(t, e, n) {
        arguments[4][33][0].apply(n, arguments);
      },
      { dup: 33 }
    ],
    80: [
      function(t, e, n) {
        e.exports = {
          _args: [
            [
              {
                raw: 'levelup',
                scope: null,
                escapedName: 'levelup',
                name: 'levelup',
                rawSpec: '',
                spec: 'latest',
                type: 'tag'
              },
              '/Users/jimkang/gcw/council'
            ]
          ],
          _from: 'levelup@latest',
          _id: 'levelup@1.3.2',
          _inCache: !0,
          _installable: !0,
          _location: '/levelup',
          _nodeVersion: '6.1.0',
          _npmOperationalInternal: {
            host: 'packages-16-east.internal.npmjs.com',
            tmp: 'tmp/levelup-1.3.2.tgz_1463496525467_0.4644940535072237'
          },
          _npmUser: {
            name: 'ralphtheninja',
            email: 'ralphtheninja@riseup.net'
          },
          _npmVersion: '3.8.6',
          _phantomChildren: {},
          _requested: {
            raw: 'levelup',
            scope: null,
            escapedName: 'levelup',
            name: 'levelup',
            rawSpec: '',
            spec: 'latest',
            type: 'tag'
          },
          _requiredBy: ['#USER', '/'],
          _resolved: 'https://registry.npmjs.org/levelup/-/levelup-1.3.2.tgz',
          _shasum: 'b321d3071f0e75c2dfaf2f0fe8864e5b9a387bc9',
          _shrinkwrap: null,
          _spec: 'levelup',
          _where: '/Users/jimkang/gcw/council',
          browser: { leveldown: !1, 'leveldown/package': !1, semver: !1 },
          bugs: { url: 'https://github.com/level/levelup/issues' },
          contributors: [
            {
              name: 'Rod Vagg',
              email: 'r@va.gg',
              url: 'https://github.com/rvagg'
            },
            {
              name: 'John Chesley',
              email: 'john@chesl.es',
              url: 'https://github.com/chesles/'
            },
            {
              name: 'Jake Verbaten',
              email: 'raynos2@gmail.com',
              url: 'https://github.com/raynos'
            },
            {
              name: 'Dominic Tarr',
              email: 'dominic.tarr@gmail.com',
              url: 'https://github.com/dominictarr'
            },
            {
              name: 'Max Ogden',
              email: 'max@maxogden.com',
              url: 'https://github.com/maxogden'
            },
            {
              name: 'Lars-Magnus Skog',
              email: 'ralphtheninja@riseup.net',
              url: 'https://github.com/ralphtheninja'
            },
            {
              name: 'David Björklund',
              email: 'david.bjorklund@gmail.com',
              url: 'https://github.com/kesla'
            },
            {
              name: 'Julian Gruber',
              email: 'julian@juliangruber.com',
              url: 'https://github.com/juliangruber'
            },
            {
              name: 'Paolo Fragomeni',
              email: 'paolo@async.ly',
              url: 'https://github.com/0x00a'
            },
            {
              name: 'Anton Whalley',
              email: 'anton.whalley@nearform.com',
              url: 'https://github.com/No9'
            },
            {
              name: 'Matteo Collina',
              email: 'matteo.collina@gmail.com',
              url: 'https://github.com/mcollina'
            },
            {
              name: 'Pedro Teixeira',
              email: 'pedro.teixeira@gmail.com',
              url: 'https://github.com/pgte'
            },
            {
              name: 'James Halliday',
              email: 'mail@substack.net',
              url: 'https://github.com/substack'
            },
            {
              name: 'Jarrett Cruger',
              email: 'jcrugzz@gmail.com',
              url: 'https://github.com/jcrugzz'
            }
          ],
          dependencies: {
            'deferred-leveldown': '~1.2.1',
            'level-codec': '~6.1.0',
            'level-errors': '~1.0.3',
            'level-iterator-stream': '~1.3.0',
            prr: '~1.0.1',
            semver: '~5.1.0',
            xtend: '~4.0.0'
          },
          description:
            'Fast & simple storage - a Node.js-style LevelDB wrapper',
          devDependencies: {
            async: '~1.5.0',
            bustermove: '~1.0.0',
            delayed: '~1.0.1',
            faucet: '~0.0.1',
            leveldown: '^1.1.0',
            memdown: '~1.1.0',
            'msgpack-js': '~0.3.0',
            referee: '~1.2.0',
            rimraf: '~2.4.3',
            'slow-stream': '0.0.4',
            tap: '~2.3.1',
            tape: '~4.2.1'
          },
          directories: {},
          dist: {
            shasum: 'b321d3071f0e75c2dfaf2f0fe8864e5b9a387bc9',
            tarball: 'https://registry.npmjs.org/levelup/-/levelup-1.3.2.tgz'
          },
          gitHead: 'bcc242cfc4ec035f9228a5cd54903cb126659a00',
          homepage: 'https://github.com/level/levelup',
          keywords: [
            'leveldb',
            'stream',
            'database',
            'db',
            'store',
            'storage',
            'json'
          ],
          license: 'MIT',
          main: 'lib/levelup.js',
          maintainers: [
            { name: 'rvagg', email: 'rod@vagg.org' },
            { name: 'ralphtheninja', email: 'ralphtheninja@riseup.net' },
            { name: 'juliangruber', email: 'julian@juliangruber.com' }
          ],
          name: 'levelup',
          optionalDependencies: {},
          readme: 'ERROR: No README data found!',
          repository: {
            type: 'git',
            url: 'git+https://github.com/level/levelup.git'
          },
          scripts: { test: 'tape test/*-test.js | faucet' },
          version: '1.3.2'
        };
      },
      {}
    ],
    81: [
      function(t, e, n) {
        (function(t) {
          function e(t, e) {
            return Object.hasOwnProperty.call(t, e);
          }
          function r(t) {
            return void 0 !== t && '' !== t;
          }
          function e(t, e) {
            return Object.hasOwnProperty.call(t, e);
          }
          function i(t, e) {
            return Object.hasOwnProperty.call(t, e) && e;
          }
          function o(t) {
            return t;
          }
          n.compare = function(e, n) {
            if (t.isBuffer(e)) {
              for (var r = Math.min(e.length, n.length), i = 0; i < r; i++) {
                var o = e[i] - n[i];
                if (o) return o;
              }
              return e.length - n.length;
            }
            return e < n ? -1 : e > n ? 1 : 0;
          };
          var s = (n.lowerBoundKey = function(t) {
              return (
                i(t, 'gt') ||
                i(t, 'gte') ||
                i(t, 'min') ||
                (t.reverse ? i(t, 'end') : i(t, 'start')) ||
                void 0
              );
            }),
            a = (n.lowerBound = function(t) {
              var e = s(t);
              return e && t[e];
            });
          (n.lowerBoundInclusive = function(t) {
            return !e(t, 'gt');
          }),
            (n.upperBoundInclusive = function(t) {
              return !(e(t, 'lt') || !t.minEx);
            });
          var u = (n.lowerBoundExclusive = function(t) {
              return !(!e(t, 'gt') && !t.minEx);
            }),
            c = (n.upperBoundExclusive = function(t) {
              return !!e(t, 'lt');
            }),
            l = (n.upperBoundKey = function(t) {
              return (
                i(t, 'lt') ||
                i(t, 'lte') ||
                i(t, 'max') ||
                (t.reverse ? i(t, 'start') : i(t, 'end')) ||
                void 0
              );
            }),
            h = (n.upperBound = function(t) {
              var e = l(t);
              return e && t[e];
            });
          (n.toLtgt = function(t, r, i, s, a) {
            (r = r || {}), (i = i || o);
            var u = arguments.length > 3,
              c = n.lowerBoundKey(t),
              l = n.upperBoundKey(t);
            return (
              c
                ? 'gt' === c
                  ? (r.gt = i(t.gt, !1))
                  : (r.gte = i(t[c], !1))
                : u && (r.gte = i(s, !1)),
              l
                ? 'lt' === l
                  ? (r.lt = i(t.lt, !0))
                  : (r.lte = i(t[l], !0))
                : u && (r.lte = i(a, !0)),
              null != t.reverse && (r.reverse = !!t.reverse),
              e(r, 'max') && delete r.max,
              e(r, 'min') && delete r.min,
              e(r, 'start') && delete r.start,
              e(r, 'end') && delete r.end,
              r
            );
          }),
            (n.contains = function(t, e, i) {
              i = i || n.compare;
              var o = a(t);
              if (r(o)) {
                var s = i(e, o);
                if (s < 0 || (0 === s && u(t))) return !1;
              }
              var l = h(t);
              if (r(l)) {
                var s = i(e, l);
                if (s > 0 || (0 === s && c(t))) return !1;
              }
              return !0;
            }),
            (n.filter = function(t, e) {
              return function(r) {
                return n.contains(t, r, e);
              };
            });
        }.call(this, { isBuffer: t('../is-buffer/index.js') }));
      },
      { '../is-buffer/index.js': 43 }
    ],
    82: [
      function(t, e, n) {
        var r = Object.prototype.hasOwnProperty,
          i = Object.prototype.toString,
          o = function(t) {
            var e =
              ('function' == typeof t && !(t instanceof RegExp)) ||
              '[object Function]' === i.call(t);
            return (
              e ||
                'undefined' == typeof window ||
                (e =
                  t === window.setTimeout ||
                  t === window.alert ||
                  t === window.confirm ||
                  t === window.prompt),
              e
            );
          };
        e.exports = function(t, e) {
          if (!o(e)) throw new TypeError('iterator must be a function');
          var n,
            i,
            s = 'string' == typeof t,
            a = t.length,
            u = arguments.length > 2 ? arguments[2] : null;
          if (a === +a)
            for (n = 0; n < a; n++)
              null === u
                ? e(s ? t.charAt(n) : t[n], n, t)
                : e.call(u, s ? t.charAt(n) : t[n], n, t);
          else
            for (i in t)
              r.call(t, i) &&
                (null === u ? e(t[i], i, t) : e.call(u, t[i], i, t));
        };
      },
      {}
    ],
    83: [
      function(t, e, n) {
        e.exports = Object.keys || t('./shim');
      },
      { './shim': 85 }
    ],
    84: [
      function(t, e, n) {
        var r = Object.prototype.toString;
        e.exports = function t(e) {
          var n = r.call(e),
            t = '[object Arguments]' === n;
          return (
            t ||
              (t =
                '[object Array]' !== n &&
                null !== e &&
                'object' == typeof e &&
                'number' == typeof e.length &&
                e.length >= 0 &&
                '[object Function]' === r.call(e.callee)),
            t
          );
        };
      },
      {}
    ],
    85: [
      function(t, e, n) {
        !(function() {
          'use strict';
          var n,
            r = Object.prototype.hasOwnProperty,
            i = Object.prototype.toString,
            o = t('./foreach'),
            s = t('./isArguments'),
            a = !{ toString: null }.propertyIsEnumerable('toString'),
            u = function() {}.propertyIsEnumerable('prototype'),
            c = [
              'toString',
              'toLocaleString',
              'valueOf',
              'hasOwnProperty',
              'isPrototypeOf',
              'propertyIsEnumerable',
              'constructor'
            ];
          (n = function(t) {
            var e = null !== t && 'object' == typeof t,
              n = '[object Function]' === i.call(t),
              l = s(t),
              h = [];
            if (!e && !n && !l)
              throw new TypeError('Object.keys called on a non-object');
            if (l)
              o(t, function(t) {
                h.push(t);
              });
            else {
              var f,
                p = u && n;
              for (f in t)
                (p && 'prototype' === f) || !r.call(t, f) || h.push(f);
            }
            if (a) {
              var d = t.constructor,
                y = d && d.prototype === t;
              o(c, function(e) {
                (y && 'constructor' === e) || !r.call(t, e) || h.push(e);
              });
            }
            return h;
          }),
            (e.exports = n);
        })();
      },
      { './foreach': 82, './isArguments': 84 }
    ],
    86: [
      function(t, e, n) {
        function r(t) {
          function e(t) {
            return Math.floor(x() * t);
          }
          function n(t) {
            return 0 === t ? 0 : e(t) + 1;
          }
          function r(t) {
            function n(t) {
              return i(s, t);
            }
            function r() {
              var t = n(e(a));
              return 'function' != typeof t ||
                ('probable_rollOnTable' !== t.name &&
                  'probable_pick' !== t.name)
                ? t
                : t();
            }
            function o() {
              return s;
            }
            var s = t,
              a = s[s.length - 1][0][1] - s[0][0][0] + 1;
            return {
              outcomeAtIndex: n,
              roll: r,
              length: a,
              getRangesAndOutcomesArray: o
            };
          }
          function i(t, e) {
            e = +e;
            for (var n = 0; n < t.length; ++n) {
              var r = t[n],
                i = r[0];
              if (e >= i[0] && e <= i[1]) return r[1];
            }
          }
          function o(t) {
            return r(s(t));
          }
          function s(t) {
            var e = [],
              n = -1,
              r = a(t);
            return (
              (r = r.sort(u)),
              r.forEach(function(t) {
                var r = t[0],
                  i = t[1],
                  o = n + 1,
                  s = o + r - 1;
                e.push([[o, s], i]), (n = s);
              }),
              e
            );
          }
          function a(t) {
            var e = [];
            for (var n in t) {
              var r = t[n];
              e.push([r, n]);
            }
            return e;
          }
          function u(t, e) {
            return t[0] > e[0] ? -1 : 1;
          }
          function c(t) {
            var e = l(t);
            return r(e);
          }
          function l(t) {
            var e = [];
            for (var n in t) {
              var r = f(n),
                i = t[n];
              if ('object' == typeof i)
                if (Array.isArray(i)) i = _(i);
                else {
                  var o = c(i);
                  'function' == typeof o.roll && (i = o.roll);
                }
              e.push([r, i]);
            }
            return e.sort(h);
          }
          function h(t, e) {
            return t[0][0] < e[0][0] ? -1 : 1;
          }
          function f(t) {
            var e = t.split('-');
            if (!(e.length > 2))
              return 1 === e.length ? [+t, +t] : [+e[0], +e[1]];
          }
          function p(t) {
            var e = d(t);
            return r(e);
          }
          function d(t) {
            function e(t) {
              var e = t[0],
                r = t[1],
                i = n + e - 1,
                o = [n, i];
              if (((n = i + 1), Array.isArray(r)))
                if (y(r)) {
                  var s = p(r);
                  'function' == typeof s.roll && (r = s.roll);
                } else r = _(r);
              return [o, r];
            }
            var n = 0;
            return t.map(e);
          }
          function y(t) {
            return (
              Array.isArray(t) &&
              t.length > 0 &&
              Array.isArray(t[0]) &&
              2 === t[0].length &&
              'number' == typeof t[0][0]
            );
          }
          function g(t, n) {
            return !t || 'number' != typeof t.length || t.length < 1
              ? n
              : t[e(t.length)];
          }
          function _(t, e) {
            return function() {
              return g(t, e);
            };
          }
          function v(t, e) {
            var n = [];
            return (
              t.forEach(function(t) {
                e.forEach(function(e) {
                  Array.isArray(t) || Array.isArray(e)
                    ? n.push(t.concat(e))
                    : n.push([t, e]);
                });
              }),
              n
            );
          }
          function m(t) {
            return t.slice(1).reduce(v, t[0]);
          }
          function b(t) {
            for (var n, r = t.length, i = Array(r), o = 0; o < r; o++)
              (n = e(o + 1)), n !== o && (i[o] = i[n]), (i[n] = t[o]);
            return i;
          }
          function w(t, e) {
            return b(t).slice(0, e);
          }
          var x = Math.random;
          return (
            t && t.random && (x = t.random),
            {
              roll: e,
              rollDie: n,
              createRangeTable: r,
              createRangeTableFromDict: o,
              createTableFromDef: c,
              createTableFromSizes: p,
              convertDictToRangesAndOutcomePairs: s,
              pickFromArray: g,
              crossArrays: v,
              getCartesianProduct: m,
              shuffle: b,
              sample: w
            }
          );
        }
        var i = r();
        'object' == typeof e &&
          ((e.exports = i), (e.exports.createProbable = r));
      },
      {}
    ],
    87: [
      function(t, e, n) {
        function r() {
          if (!a) {
            a = !0;
            for (var t, e = s.length; e; ) {
              (t = s), (s = []);
              for (var n = -1; ++n < e; ) t[n]();
              e = s.length;
            }
            a = !1;
          }
        }
        function i() {}
        var o = (e.exports = {}),
          s = [],
          a = !1;
        (o.nextTick = function(t) {
          s.push(t), a || setTimeout(r, 0);
        }),
          (o.title = 'browser'),
          (o.browser = !0),
          (o.env = {}),
          (o.argv = []),
          (o.version = ''),
          (o.versions = {}),
          (o.on = i),
          (o.addListener = i),
          (o.once = i),
          (o.off = i),
          (o.removeListener = i),
          (o.removeAllListeners = i),
          (o.emit = i),
          (o.binding = function(t) {
            throw new Error('process.binding is not supported');
          }),
          (o.cwd = function() {
            return '/';
          }),
          (o.chdir = function(t) {
            throw new Error('process.chdir is not supported');
          }),
          (o.umask = function() {
            return 0;
          });
      },
      {}
    ],
    88: [
      function(t, e, n) {
        arguments[4][37][0].apply(n, arguments);
      },
      { dup: 37 }
    ],
    89: [
      function(t, e, n) {
        e.exports = t('./lib/_stream_duplex.js');
      },
      { './lib/_stream_duplex.js': 90 }
    ],
    90: [
      function(t, e, n) {
        arguments[4][65][0].apply(n, arguments);
      },
      {
        './_stream_readable': 92,
        './_stream_writable': 94,
        _process: 87,
        'core-util-is': 21,
        dup: 65,
        inherits: 42
      }
    ],
    91: [
      function(t, e, n) {
        arguments[4][66][0].apply(n, arguments);
      },
      { './_stream_transform': 93, 'core-util-is': 21, dup: 66, inherits: 42 }
    ],
    92: [
      function(t, e, n) {
        (function(n) {
          function r(e, n) {
            var r = t('./_stream_duplex');
            e = e || {};
            var i = e.highWaterMark,
              o = e.objectMode ? 16 : 16384;
            (this.highWaterMark = i || 0 === i ? i : o),
              (this.highWaterMark = ~~this.highWaterMark),
              (this.buffer = []),
              (this.length = 0),
              (this.pipes = null),
              (this.pipesCount = 0),
              (this.flowing = null),
              (this.ended = !1),
              (this.endEmitted = !1),
              (this.reading = !1),
              (this.sync = !0),
              (this.needReadable = !1),
              (this.emittedReadable = !1),
              (this.readableListening = !1),
              (this.objectMode = !!e.objectMode),
              n instanceof r &&
                (this.objectMode = this.objectMode || !!e.readableObjectMode),
              (this.defaultEncoding = e.defaultEncoding || 'utf8'),
              (this.ranOut = !1),
              (this.awaitDrain = 0),
              (this.readingMore = !1),
              (this.decoder = null),
              (this.encoding = null),
              e.encoding &&
                (j || (j = t('string_decoder/').StringDecoder),
                (this.decoder = new j(e.encoding)),
                (this.encoding = e.encoding));
          }
          function i(e) {
            t('./_stream_duplex');
            return this instanceof i
              ? ((this._readableState = new r(e, this)),
                (this.readable = !0),
                void A.call(this))
              : new i(e);
          }
          function o(t, e, n, r, i) {
            var o = c(e, n);
            if (o) t.emit('error', o);
            else if (T.isNullOrUndefined(n))
              (e.reading = !1), e.ended || l(t, e);
            else if (e.objectMode || (n && n.length > 0))
              if (e.ended && !i) {
                var a = new Error('stream.push() after EOF');
                t.emit('error', a);
              } else if (e.endEmitted && i) {
                var a = new Error('stream.unshift() after end event');
                t.emit('error', a);
              } else
                !e.decoder || i || r || (n = e.decoder.write(n)),
                  i || (e.reading = !1),
                  e.flowing && 0 === e.length && !e.sync
                    ? (t.emit('data', n), t.read(0))
                    : ((e.length += e.objectMode ? 1 : n.length),
                      i ? e.buffer.unshift(n) : e.buffer.push(n),
                      e.needReadable && h(t)),
                  p(t, e);
            else i || (e.reading = !1);
            return s(e);
          }
          function s(t) {
            return (
              !t.ended &&
              (t.needReadable || t.length < t.highWaterMark || 0 === t.length)
            );
          }
          function a(t) {
            if (t >= N) t = N;
            else {
              t--;
              for (var e = 1; e < 32; e <<= 1) t |= t >> e;
              t++;
            }
            return t;
          }
          function u(t, e) {
            return 0 === e.length && e.ended
              ? 0
              : e.objectMode
              ? 0 === t
                ? 0
                : 1
              : isNaN(t) || T.isNull(t)
              ? e.flowing && e.buffer.length
                ? e.buffer[0].length
                : e.length
              : t <= 0
              ? 0
              : (t > e.highWaterMark && (e.highWaterMark = a(t)),
                t > e.length
                  ? e.ended
                    ? e.length
                    : ((e.needReadable = !0), 0)
                  : t);
          }
          function c(t, e) {
            var n = null;
            return (
              T.isBuffer(e) ||
                T.isString(e) ||
                T.isNullOrUndefined(e) ||
                t.objectMode ||
                (n = new TypeError('Invalid non-string/buffer chunk')),
              n
            );
          }
          function l(t, e) {
            if (e.decoder && !e.ended) {
              var n = e.decoder.end();
              n &&
                n.length &&
                (e.buffer.push(n), (e.length += e.objectMode ? 1 : n.length));
            }
            (e.ended = !0), h(t);
          }
          function h(t) {
            var e = t._readableState;
            (e.needReadable = !1),
              e.emittedReadable ||
                (R('emitReadable', e.flowing),
                (e.emittedReadable = !0),
                e.sync
                  ? n.nextTick(function() {
                      f(t);
                    })
                  : f(t));
          }
          function f(t) {
            R('emit readable'), t.emit('readable'), v(t);
          }
          function p(t, e) {
            e.readingMore ||
              ((e.readingMore = !0),
              n.nextTick(function() {
                d(t, e);
              }));
          }
          function d(t, e) {
            for (
              var n = e.length;
              !e.reading &&
              !e.flowing &&
              !e.ended &&
              e.length < e.highWaterMark &&
              (R('maybeReadMore read 0'), t.read(0), n !== e.length);

            )
              n = e.length;
            e.readingMore = !1;
          }
          function y(t) {
            return function() {
              var e = t._readableState;
              R('pipeOnDrain', e.awaitDrain),
                e.awaitDrain && e.awaitDrain--,
                0 === e.awaitDrain &&
                  S.listenerCount(t, 'data') &&
                  ((e.flowing = !0), v(t));
            };
          }
          function g(t, e) {
            e.resumeScheduled ||
              ((e.resumeScheduled = !0),
              n.nextTick(function() {
                _(t, e);
              }));
          }
          function _(t, e) {
            (e.resumeScheduled = !1),
              t.emit('resume'),
              v(t),
              e.flowing && !e.reading && t.read(0);
          }
          function v(t) {
            var e = t._readableState;
            if ((R('flow', e.flowing), e.flowing))
              do var n = t.read();
              while (null !== n && e.flowing);
          }
          function m(t, e) {
            var n,
              r = e.buffer,
              i = e.length,
              o = !!e.decoder,
              s = !!e.objectMode;
            if (0 === r.length) return null;
            if (0 === i) n = null;
            else if (s) n = r.shift();
            else if (!t || t >= i)
              (n = o ? r.join('') : k.concat(r, i)), (r.length = 0);
            else if (t < r[0].length) {
              var a = r[0];
              (n = a.slice(0, t)), (r[0] = a.slice(t));
            } else if (t === r[0].length) n = r.shift();
            else {
              n = o ? '' : new k(t);
              for (var u = 0, c = 0, l = r.length; c < l && u < t; c++) {
                var a = r[0],
                  h = Math.min(t - u, a.length);
                o ? (n += a.slice(0, h)) : a.copy(n, u, 0, h),
                  h < a.length ? (r[0] = a.slice(h)) : r.shift(),
                  (u += h);
              }
            }
            return n;
          }
          function b(t) {
            var e = t._readableState;
            if (e.length > 0)
              throw new Error('endReadable called on non-empty stream');
            e.endEmitted ||
              ((e.ended = !0),
              n.nextTick(function() {
                e.endEmitted ||
                  0 !== e.length ||
                  ((e.endEmitted = !0), (t.readable = !1), t.emit('end'));
              }));
          }
          function w(t, e) {
            for (var n = 0, r = t.length; n < r; n++) e(t[n], n);
          }
          function x(t, e) {
            for (var n = 0, r = t.length; n < r; n++) if (t[n] === e) return n;
            return -1;
          }
          e.exports = i;
          var E = t('isarray'),
            k = t('buffer').Buffer;
          i.ReadableState = r;
          var S = t('events').EventEmitter;
          S.listenerCount ||
            (S.listenerCount = function(t, e) {
              return t.listeners(e).length;
            });
          var A = t('stream'),
            T = t('core-util-is');
          T.inherits = t('inherits');
          var j,
            R = t('util');
          (R = R && R.debuglog ? R.debuglog('stream') : function() {}),
            T.inherits(i, A),
            (i.prototype.push = function(t, e) {
              var n = this._readableState;
              return (
                T.isString(t) &&
                  !n.objectMode &&
                  ((e = e || n.defaultEncoding),
                  e !== n.encoding && ((t = new k(t, e)), (e = ''))),
                o(this, n, t, e, !1)
              );
            }),
            (i.prototype.unshift = function(t) {
              var e = this._readableState;
              return o(this, e, t, '', !0);
            }),
            (i.prototype.setEncoding = function(e) {
              return (
                j || (j = t('string_decoder/').StringDecoder),
                (this._readableState.decoder = new j(e)),
                (this._readableState.encoding = e),
                this
              );
            });
          var N = 8388608;
          (i.prototype.read = function(t) {
            R('read', t);
            var e = this._readableState,
              n = t;
            if (
              ((!T.isNumber(t) || t > 0) && (e.emittedReadable = !1),
              0 === t &&
                e.needReadable &&
                (e.length >= e.highWaterMark || e.ended))
            )
              return (
                R('read: emitReadable', e.length, e.ended),
                0 === e.length && e.ended ? b(this) : h(this),
                null
              );
            if (((t = u(t, e)), 0 === t && e.ended))
              return 0 === e.length && b(this), null;
            var r = e.needReadable;
            R('need readable', r),
              (0 === e.length || e.length - t < e.highWaterMark) &&
                ((r = !0), R('length less than watermark', r)),
              (e.ended || e.reading) && ((r = !1), R('reading or ended', r)),
              r &&
                (R('do read'),
                (e.reading = !0),
                (e.sync = !0),
                0 === e.length && (e.needReadable = !0),
                this._read(e.highWaterMark),
                (e.sync = !1)),
              r && !e.reading && (t = u(n, e));
            var i;
            return (
              (i = t > 0 ? m(t, e) : null),
              T.isNull(i) && ((e.needReadable = !0), (t = 0)),
              (e.length -= t),
              0 !== e.length || e.ended || (e.needReadable = !0),
              n !== t && e.ended && 0 === e.length && b(this),
              T.isNull(i) || this.emit('data', i),
              i
            );
          }),
            (i.prototype._read = function(t) {
              this.emit('error', new Error('not implemented'));
            }),
            (i.prototype.pipe = function(t, e) {
              function r(t) {
                R('onunpipe'), t === h && o();
              }
              function i() {
                R('onend'), t.end();
              }
              function o() {
                R('cleanup'),
                  t.removeListener('close', u),
                  t.removeListener('finish', c),
                  t.removeListener('drain', g),
                  t.removeListener('error', a),
                  t.removeListener('unpipe', r),
                  h.removeListener('end', i),
                  h.removeListener('end', o),
                  h.removeListener('data', s),
                  !f.awaitDrain ||
                    (t._writableState && !t._writableState.needDrain) ||
                    g();
              }
              function s(e) {
                R('ondata');
                var n = t.write(e);
                !1 === n &&
                  (R(
                    'false write response, pause',
                    h._readableState.awaitDrain
                  ),
                  h._readableState.awaitDrain++,
                  h.pause());
              }
              function a(e) {
                R('onerror', e),
                  l(),
                  t.removeListener('error', a),
                  0 === S.listenerCount(t, 'error') && t.emit('error', e);
              }
              function u() {
                t.removeListener('finish', c), l();
              }
              function c() {
                R('onfinish'), t.removeListener('close', u), l();
              }
              function l() {
                R('unpipe'), h.unpipe(t);
              }
              var h = this,
                f = this._readableState;
              switch (f.pipesCount) {
                case 0:
                  f.pipes = t;
                  break;
                case 1:
                  f.pipes = [f.pipes, t];
                  break;
                default:
                  f.pipes.push(t);
              }
              (f.pipesCount += 1), R('pipe count=%d opts=%j', f.pipesCount, e);
              var p = (!e || e.end !== !1) && t !== n.stdout && t !== n.stderr,
                d = p ? i : o;
              f.endEmitted ? n.nextTick(d) : h.once('end', d),
                t.on('unpipe', r);
              var g = y(h);
              return (
                t.on('drain', g),
                h.on('data', s),
                t._events && t._events.error
                  ? E(t._events.error)
                    ? t._events.error.unshift(a)
                    : (t._events.error = [a, t._events.error])
                  : t.on('error', a),
                t.once('close', u),
                t.once('finish', c),
                t.emit('pipe', h),
                f.flowing || (R('pipe resume'), h.resume()),
                t
              );
            }),
            (i.prototype.unpipe = function(t) {
              var e = this._readableState;
              if (0 === e.pipesCount) return this;
              if (1 === e.pipesCount)
                return t && t !== e.pipes
                  ? this
                  : (t || (t = e.pipes),
                    (e.pipes = null),
                    (e.pipesCount = 0),
                    (e.flowing = !1),
                    t && t.emit('unpipe', this),
                    this);
              if (!t) {
                var n = e.pipes,
                  r = e.pipesCount;
                (e.pipes = null), (e.pipesCount = 0), (e.flowing = !1);
                for (var i = 0; i < r; i++) n[i].emit('unpipe', this);
                return this;
              }
              var i = x(e.pipes, t);
              return i === -1
                ? this
                : (e.pipes.splice(i, 1),
                  (e.pipesCount -= 1),
                  1 === e.pipesCount && (e.pipes = e.pipes[0]),
                  t.emit('unpipe', this),
                  this);
            }),
            (i.prototype.on = function(t, e) {
              var r = A.prototype.on.call(this, t, e);
              if (
                ('data' === t &&
                  !1 !== this._readableState.flowing &&
                  this.resume(),
                'readable' === t && this.readable)
              ) {
                var i = this._readableState;
                if (!i.readableListening)
                  if (
                    ((i.readableListening = !0),
                    (i.emittedReadable = !1),
                    (i.needReadable = !0),
                    i.reading)
                  )
                    i.length && h(this, i);
                  else {
                    var o = this;
                    n.nextTick(function() {
                      R('readable nexttick read 0'), o.read(0);
                    });
                  }
              }
              return r;
            }),
            (i.prototype.addListener = i.prototype.on),
            (i.prototype.resume = function() {
              var t = this._readableState;
              return (
                t.flowing ||
                  (R('resume'),
                  (t.flowing = !0),
                  t.reading || (R('resume read 0'), this.read(0)),
                  g(this, t)),
                this
              );
            }),
            (i.prototype.pause = function() {
              return (
                R('call pause flowing=%j', this._readableState.flowing),
                !1 !== this._readableState.flowing &&
                  (R('pause'),
                  (this._readableState.flowing = !1),
                  this.emit('pause')),
                this
              );
            }),
            (i.prototype.wrap = function(t) {
              var e = this._readableState,
                n = !1,
                r = this;
              t.on('end', function() {
                if ((R('wrapped end'), e.decoder && !e.ended)) {
                  var t = e.decoder.end();
                  t && t.length && r.push(t);
                }
                r.push(null);
              }),
                t.on('data', function(i) {
                  if (
                    (R('wrapped data'),
                    e.decoder && (i = e.decoder.write(i)),
                    i && (e.objectMode || i.length))
                  ) {
                    var o = r.push(i);
                    o || ((n = !0), t.pause());
                  }
                });
              for (var i in t)
                T.isFunction(t[i]) &&
                  T.isUndefined(this[i]) &&
                  (this[i] = (function(e) {
                    return function() {
                      return t[e].apply(t, arguments);
                    };
                  })(i));
              var o = ['error', 'close', 'destroy', 'pause', 'resume'];
              return (
                w(o, function(e) {
                  t.on(e, r.emit.bind(r, e));
                }),
                (r._read = function(e) {
                  R('wrapped _read', e), n && ((n = !1), t.resume());
                }),
                r
              );
            }),
            (i._fromList = m);
        }.call(this, t('_process')));
      },
      {
        './_stream_duplex': 90,
        _process: 87,
        buffer: 18,
        'core-util-is': 21,
        events: 38,
        inherits: 42,
        isarray: 44,
        stream: 100,
        'string_decoder/': 101,
        util: 17
      }
    ],
    93: [
      function(t, e, n) {
        function r(t, e) {
          (this.afterTransform = function(t, n) {
            return i(e, t, n);
          }),
            (this.needTransform = !1),
            (this.transforming = !1),
            (this.writecb = null),
            (this.writechunk = null);
        }
        function i(t, e, n) {
          var r = t._transformState;
          r.transforming = !1;
          var i = r.writecb;
          if (!i)
            return t.emit('error', new Error('no writecb in Transform class'));
          (r.writechunk = null),
            (r.writecb = null),
            u.isNullOrUndefined(n) || t.push(n),
            i && i(e);
          var o = t._readableState;
          (o.reading = !1),
            (o.needReadable || o.length < o.highWaterMark) &&
              t._read(o.highWaterMark);
        }
        function o(t) {
          if (!(this instanceof o)) return new o(t);
          a.call(this, t), (this._transformState = new r(t, this));
          var e = this;
          (this._readableState.needReadable = !0),
            (this._readableState.sync = !1),
            this.once('prefinish', function() {
              u.isFunction(this._flush)
                ? this._flush(function(t) {
                    s(e, t);
                  })
                : s(e);
            });
        }
        function s(t, e) {
          if (e) return t.emit('error', e);
          var n = t._writableState,
            r = t._transformState;
          if (n.length)
            throw new Error('calling transform done when ws.length != 0');
          if (r.transforming)
            throw new Error('calling transform done when still transforming');
          return t.push(null);
        }
        e.exports = o;
        var a = t('./_stream_duplex'),
          u = t('core-util-is');
        (u.inherits = t('inherits')),
          u.inherits(o, a),
          (o.prototype.push = function(t, e) {
            return (
              (this._transformState.needTransform = !1),
              a.prototype.push.call(this, t, e)
            );
          }),
          (o.prototype._transform = function(t, e, n) {
            throw new Error('not implemented');
          }),
          (o.prototype._write = function(t, e, n) {
            var r = this._transformState;
            if (
              ((r.writecb = n),
              (r.writechunk = t),
              (r.writeencoding = e),
              !r.transforming)
            ) {
              var i = this._readableState;
              (r.needTransform ||
                i.needReadable ||
                i.length < i.highWaterMark) &&
                this._read(i.highWaterMark);
            }
          }),
          (o.prototype._read = function(t) {
            var e = this._transformState;
            u.isNull(e.writechunk) || !e.writecb || e.transforming
              ? (e.needTransform = !0)
              : ((e.transforming = !0),
                this._transform(
                  e.writechunk,
                  e.writeencoding,
                  e.afterTransform
                ));
          });
      },
      { './_stream_duplex': 90, 'core-util-is': 21, inherits: 42 }
    ],
    94: [
      function(t, e, n) {
        (function(n) {
          function r(t, e, n) {
            (this.chunk = t), (this.encoding = e), (this.callback = n);
          }
          function i(e, n) {
            var r = t('./_stream_duplex');
            e = e || {};
            var i = e.highWaterMark,
              o = e.objectMode ? 16 : 16384;
            (this.highWaterMark = i || 0 === i ? i : o),
              (this.objectMode = !!e.objectMode),
              n instanceof r &&
                (this.objectMode = this.objectMode || !!e.writableObjectMode),
              (this.highWaterMark = ~~this.highWaterMark),
              (this.needDrain = !1),
              (this.ending = !1),
              (this.ended = !1),
              (this.finished = !1);
            var s = e.decodeStrings === !1;
            (this.decodeStrings = !s),
              (this.defaultEncoding = e.defaultEncoding || 'utf8'),
              (this.length = 0),
              (this.writing = !1),
              (this.corked = 0),
              (this.sync = !0),
              (this.bufferProcessing = !1),
              (this.onwrite = function(t) {
                p(n, t);
              }),
              (this.writecb = null),
              (this.writelen = 0),
              (this.buffer = []),
              (this.pendingcb = 0),
              (this.prefinished = !1),
              (this.errorEmitted = !1);
          }
          function o(e) {
            var n = t('./_stream_duplex');
            return this instanceof o || this instanceof n
              ? ((this._writableState = new i(e, this)),
                (this.writable = !0),
                void E.call(this))
              : new o(e);
          }
          function s(t, e, r) {
            var i = new Error('write after end');
            t.emit('error', i),
              n.nextTick(function() {
                r(i);
              });
          }
          function a(t, e, r, i) {
            var o = !0;
            if (
              !(
                x.isBuffer(r) ||
                x.isString(r) ||
                x.isNullOrUndefined(r) ||
                e.objectMode
              )
            ) {
              var s = new TypeError('Invalid non-string/buffer chunk');
              t.emit('error', s),
                n.nextTick(function() {
                  i(s);
                }),
                (o = !1);
            }
            return o;
          }
          function u(t, e, n) {
            return (
              !t.objectMode &&
                t.decodeStrings !== !1 &&
                x.isString(e) &&
                (e = new w(e, n)),
              e
            );
          }
          function c(t, e, n, i, o) {
            (n = u(e, n, i)), x.isBuffer(n) && (i = 'buffer');
            var s = e.objectMode ? 1 : n.length;
            e.length += s;
            var a = e.length < e.highWaterMark;
            return (
              a || (e.needDrain = !0),
              e.writing || e.corked
                ? e.buffer.push(new r(n, i, o))
                : l(t, e, !1, s, n, i, o),
              a
            );
          }
          function l(t, e, n, r, i, o, s) {
            (e.writelen = r),
              (e.writecb = s),
              (e.writing = !0),
              (e.sync = !0),
              n ? t._writev(i, e.onwrite) : t._write(i, o, e.onwrite),
              (e.sync = !1);
          }
          function h(t, e, r, i, o) {
            r
              ? n.nextTick(function() {
                  e.pendingcb--, o(i);
                })
              : (e.pendingcb--, o(i)),
              (t._writableState.errorEmitted = !0),
              t.emit('error', i);
          }
          function f(t) {
            (t.writing = !1),
              (t.writecb = null),
              (t.length -= t.writelen),
              (t.writelen = 0);
          }
          function p(t, e) {
            var r = t._writableState,
              i = r.sync,
              o = r.writecb;
            if ((f(r), e)) h(t, r, i, e, o);
            else {
              var s = _(t, r);
              s ||
                r.corked ||
                r.bufferProcessing ||
                !r.buffer.length ||
                g(t, r),
                i
                  ? n.nextTick(function() {
                      d(t, r, s, o);
                    })
                  : d(t, r, s, o);
            }
          }
          function d(t, e, n, r) {
            n || y(t, e), e.pendingcb--, r(), m(t, e);
          }
          function y(t, e) {
            0 === e.length &&
              e.needDrain &&
              ((e.needDrain = !1), t.emit('drain'));
          }
          function g(t, e) {
            if (((e.bufferProcessing = !0), t._writev && e.buffer.length > 1)) {
              for (var n = [], r = 0; r < e.buffer.length; r++)
                n.push(e.buffer[r].callback);
              e.pendingcb++,
                l(t, e, !0, e.length, e.buffer, '', function(t) {
                  for (var r = 0; r < n.length; r++) e.pendingcb--, n[r](t);
                }),
                (e.buffer = []);
            } else {
              for (var r = 0; r < e.buffer.length; r++) {
                var i = e.buffer[r],
                  o = i.chunk,
                  s = i.encoding,
                  a = i.callback,
                  u = e.objectMode ? 1 : o.length;
                if ((l(t, e, !1, u, o, s, a), e.writing)) {
                  r++;
                  break;
                }
              }
              r < e.buffer.length
                ? (e.buffer = e.buffer.slice(r))
                : (e.buffer.length = 0);
            }
            e.bufferProcessing = !1;
          }
          function _(t, e) {
            return e.ending && 0 === e.length && !e.finished && !e.writing;
          }
          function v(t, e) {
            e.prefinished || ((e.prefinished = !0), t.emit('prefinish'));
          }
          function m(t, e) {
            var n = _(t, e);
            return (
              n &&
                (0 === e.pendingcb
                  ? (v(t, e), (e.finished = !0), t.emit('finish'))
                  : v(t, e)),
              n
            );
          }
          function b(t, e, r) {
            (e.ending = !0),
              m(t, e),
              r && (e.finished ? n.nextTick(r) : t.once('finish', r)),
              (e.ended = !0);
          }
          e.exports = o;
          var w = t('buffer').Buffer;
          o.WritableState = i;
          var x = t('core-util-is');
          x.inherits = t('inherits');
          var E = t('stream');
          x.inherits(o, E),
            (o.prototype.pipe = function() {
              this.emit('error', new Error('Cannot pipe. Not readable.'));
            }),
            (o.prototype.write = function(t, e, n) {
              var r = this._writableState,
                i = !1;
              return (
                x.isFunction(e) && ((n = e), (e = null)),
                x.isBuffer(t) ? (e = 'buffer') : e || (e = r.defaultEncoding),
                x.isFunction(n) || (n = function() {}),
                r.ended
                  ? s(this, r, n)
                  : a(this, r, t, n) &&
                    (r.pendingcb++, (i = c(this, r, t, e, n))),
                i
              );
            }),
            (o.prototype.cork = function() {
              var t = this._writableState;
              t.corked++;
            }),
            (o.prototype.uncork = function() {
              var t = this._writableState;
              t.corked &&
                (t.corked--,
                t.writing ||
                  t.corked ||
                  t.finished ||
                  t.bufferProcessing ||
                  !t.buffer.length ||
                  g(this, t));
            }),
            (o.prototype._write = function(t, e, n) {
              n(new Error('not implemented'));
            }),
            (o.prototype._writev = null),
            (o.prototype.end = function(t, e, n) {
              var r = this._writableState;
              x.isFunction(t)
                ? ((n = t), (t = null), (e = null))
                : x.isFunction(e) && ((n = e), (e = null)),
                x.isNullOrUndefined(t) || this.write(t, e),
                r.corked && ((r.corked = 1), this.uncork()),
                r.ending || r.finished || b(this, r, n);
            });
        }.call(this, t('_process')));
      },
      {
        './_stream_duplex': 90,
        _process: 87,
        buffer: 18,
        'core-util-is': 21,
        inherits: 42,
        stream: 100
      }
    ],
    95: [
      function(t, e, n) {
        e.exports = t('./lib/_stream_passthrough.js');
      },
      { './lib/_stream_passthrough.js': 91 }
    ],
    96: [
      function(t, e, n) {
        (function(r) {
          (n = e.exports = t('./lib/_stream_readable.js')),
            (n.Stream = t('stream')),
            (n.Readable = n),
            (n.Writable = t('./lib/_stream_writable.js')),
            (n.Duplex = t('./lib/_stream_duplex.js')),
            (n.Transform = t('./lib/_stream_transform.js')),
            (n.PassThrough = t('./lib/_stream_passthrough.js')),
            r.browser ||
              'disable' !== r.env.READABLE_STREAM ||
              (e.exports = t('stream'));
        }.call(this, t('_process')));
      },
      {
        './lib/_stream_duplex.js': 90,
        './lib/_stream_passthrough.js': 91,
        './lib/_stream_readable.js': 92,
        './lib/_stream_transform.js': 93,
        './lib/_stream_writable.js': 94,
        _process: 87,
        stream: 100
      }
    ],
    97: [
      function(t, e, n) {
        e.exports = t('./lib/_stream_transform.js');
      },
      { './lib/_stream_transform.js': 93 }
    ],
    98: [
      function(t, e, n) {
        e.exports = t('./lib/_stream_writable.js');
      },
      { './lib/_stream_writable.js': 94 }
    ],
    99: [
      function(t, e, n) {
        function r(t) {
          function e(t, e) {
            return function(r) {
              if (r) n && (r.stack ? n(r, r.stack) : n(r)), e && e(r);
              else if (t) {
                var i = Array.prototype.slice.call(arguments, 1);
                e && i.push(e), t.apply(t, i);
              }
            };
          }
          var n;
          return t && (n = t.log), e;
        }
        e.exports = r;
      },
      {}
    ],
    100: [
      function(t, e, n) {
        function r() {
          i.call(this);
        }
        e.exports = r;
        var i = t('events').EventEmitter,
          o = t('inherits');
        o(r, i),
          (r.Readable = t('readable-stream/readable.js')),
          (r.Writable = t('readable-stream/writable.js')),
          (r.Duplex = t('readable-stream/duplex.js')),
          (r.Transform = t('readable-stream/transform.js')),
          (r.PassThrough = t('readable-stream/passthrough.js')),
          (r.Stream = r),
          (r.prototype.pipe = function(t, e) {
            function n(e) {
              t.writable && !1 === t.write(e) && c.pause && c.pause();
            }
            function r() {
              c.readable && c.resume && c.resume();
            }
            function o() {
              l || ((l = !0), t.end());
            }
            function s() {
              l || ((l = !0), 'function' == typeof t.destroy && t.destroy());
            }
            function a(t) {
              if ((u(), 0 === i.listenerCount(this, 'error'))) throw t;
            }
            function u() {
              c.removeListener('data', n),
                t.removeListener('drain', r),
                c.removeListener('end', o),
                c.removeListener('close', s),
                c.removeListener('error', a),
                t.removeListener('error', a),
                c.removeListener('end', u),
                c.removeListener('close', u),
                t.removeListener('close', u);
            }
            var c = this;
            c.on('data', n),
              t.on('drain', r),
              t._isStdio ||
                (e && e.end === !1) ||
                (c.on('end', o), c.on('close', s));
            var l = !1;
            return (
              c.on('error', a),
              t.on('error', a),
              c.on('end', u),
              c.on('close', u),
              t.on('close', u),
              t.emit('pipe', c),
              t
            );
          });
      },
      {
        events: 38,
        inherits: 42,
        'readable-stream/duplex.js': 89,
        'readable-stream/passthrough.js': 95,
        'readable-stream/readable.js': 96,
        'readable-stream/transform.js': 97,
        'readable-stream/writable.js': 98
      }
    ],
    101: [
      function(t, e, n) {
        function r(t) {
          if (t && !u(t)) throw new Error('Unknown encoding: ' + t);
        }
        function i(t) {
          return t.toString(this.encoding);
        }
        function o(t) {
          (this.charReceived = t.length % 2),
            (this.charLength = this.charReceived ? 2 : 0);
        }
        function s(t) {
          (this.charReceived = t.length % 3),
            (this.charLength = this.charReceived ? 3 : 0);
        }
        var a = t('buffer').Buffer,
          u =
            a.isEncoding ||
            function(t) {
              switch (t && t.toLowerCase()) {
                case 'hex':
                case 'utf8':
                case 'utf-8':
                case 'ascii':
                case 'binary':
                case 'base64':
                case 'ucs2':
                case 'ucs-2':
                case 'utf16le':
                case 'utf-16le':
                case 'raw':
                  return !0;
                default:
                  return !1;
              }
            },
          c = (n.StringDecoder = function(t) {
            switch (
              ((this.encoding = (t || 'utf8')
                .toLowerCase()
                .replace(/[-_]/, '')),
              r(t),
              this.encoding)
            ) {
              case 'utf8':
                this.surrogateSize = 3;
                break;
              case 'ucs2':
              case 'utf16le':
                (this.surrogateSize = 2), (this.detectIncompleteChar = o);
                break;
              case 'base64':
                (this.surrogateSize = 3), (this.detectIncompleteChar = s);
                break;
              default:
                return void (this.write = i);
            }
            (this.charBuffer = new a(6)),
              (this.charReceived = 0),
              (this.charLength = 0);
          });
        (c.prototype.write = function(t) {
          for (var e = ''; this.charLength; ) {
            var n =
              t.length >= this.charLength - this.charReceived
                ? this.charLength - this.charReceived
                : t.length;
            if (
              (t.copy(this.charBuffer, this.charReceived, 0, n),
              (this.charReceived += n),
              this.charReceived < this.charLength)
            )
              return '';
            (t = t.slice(n, t.length)),
              (e = this.charBuffer
                .slice(0, this.charLength)
                .toString(this.encoding));
            var r = e.charCodeAt(e.length - 1);
            if (!(r >= 55296 && r <= 56319)) {
              if (((this.charReceived = this.charLength = 0), 0 === t.length))
                return e;
              break;
            }
            (this.charLength += this.surrogateSize), (e = '');
          }
          this.detectIncompleteChar(t);
          var i = t.length;
          this.charLength &&
            (t.copy(this.charBuffer, 0, t.length - this.charReceived, i),
            (i -= this.charReceived)),
            (e += t.toString(this.encoding, 0, i));
          var i = e.length - 1,
            r = e.charCodeAt(i);
          if (r >= 55296 && r <= 56319) {
            var o = this.surrogateSize;
            return (
              (this.charLength += o),
              (this.charReceived += o),
              this.charBuffer.copy(this.charBuffer, o, 0, o),
              t.copy(this.charBuffer, 0, 0, o),
              e.substring(0, i)
            );
          }
          return e;
        }),
          (c.prototype.detectIncompleteChar = function(t) {
            for (var e = t.length >= 3 ? 3 : t.length; e > 0; e--) {
              var n = t[t.length - e];
              if (1 == e && n >> 5 == 6) {
                this.charLength = 2;
                break;
              }
              if (e <= 2 && n >> 4 == 14) {
                this.charLength = 3;
                break;
              }
              if (e <= 3 && n >> 3 == 30) {
                this.charLength = 4;
                break;
              }
            }
            this.charReceived = e;
          }),
          (c.prototype.end = function(t) {
            var e = '';
            if ((t && t.length && (e = this.write(t)), this.charReceived)) {
              var n = this.charReceived,
                r = this.charBuffer,
                i = this.encoding;
              e += r.slice(0, n).toString(i);
            }
            return e;
          });
      },
      { buffer: 18 }
    ],
    102: [
      function(t, e, n) {
        (function(t) {
          e.exports = function(e) {
            return 'function' == typeof t._augment && t.TYPED_ARRAY_SUPPORT
              ? t._augment(e)
              : new t(e);
          };
        }.call(this, t('buffer').Buffer));
      },
      { buffer: 18 }
    ],
    103: [
      function(t, e, n) {
        arguments[4][42][0].apply(n, arguments);
      },
      { dup: 42 }
    ],
    104: [
      function(t, e, n) {
        e.exports = function(t) {
          return (
            t &&
            'object' == typeof t &&
            'function' == typeof t.copy &&
            'function' == typeof t.fill &&
            'function' == typeof t.readUInt8
          );
        };
      },
      {}
    ],
    105: [
      function(t, e, n) {
        (function(e, r) {
          function i(t, e) {
            var r = { seen: [], stylize: s };
            return (
              arguments.length >= 3 && (r.depth = arguments[2]),
              arguments.length >= 4 && (r.colors = arguments[3]),
              y(e) ? (r.showHidden = e) : e && n._extend(r, e),
              w(r.showHidden) && (r.showHidden = !1),
              w(r.depth) && (r.depth = 2),
              w(r.colors) && (r.colors = !1),
              w(r.customInspect) && (r.customInspect = !0),
              r.colors && (r.stylize = o),
              u(r, t, r.depth)
            );
          }
          function o(t, e) {
            var n = i.styles[e];
            return n
              ? '[' + i.colors[n][0] + 'm' + t + '[' + i.colors[n][1] + 'm'
              : t;
          }
          function s(t, e) {
            return t;
          }
          function a(t) {
            var e = {};
            return (
              t.forEach(function(t, n) {
                e[t] = !0;
              }),
              e
            );
          }
          function u(t, e, r) {
            if (
              t.customInspect &&
              e &&
              A(e.inspect) &&
              e.inspect !== n.inspect &&
              (!e.constructor || e.constructor.prototype !== e)
            ) {
              var i = e.inspect(r, t);
              return m(i) || (i = u(t, i, r)), i;
            }
            var o = c(t, e);
            if (o) return o;
            var s = Object.keys(e),
              y = a(s);
            if (
              (t.showHidden && (s = Object.getOwnPropertyNames(e)),
              S(e) &&
                (s.indexOf('message') >= 0 || s.indexOf('description') >= 0))
            )
              return l(e);
            if (0 === s.length) {
              if (A(e)) {
                var g = e.name ? ': ' + e.name : '';
                return t.stylize('[Function' + g + ']', 'special');
              }
              if (x(e))
                return t.stylize(RegExp.prototype.toString.call(e), 'regexp');
              if (k(e))
                return t.stylize(Date.prototype.toString.call(e), 'date');
              if (S(e)) return l(e);
            }
            var _ = '',
              v = !1,
              b = ['{', '}'];
            if ((d(e) && ((v = !0), (b = ['[', ']'])), A(e))) {
              var w = e.name ? ': ' + e.name : '';
              _ = ' [Function' + w + ']';
            }
            if (
              (x(e) && (_ = ' ' + RegExp.prototype.toString.call(e)),
              k(e) && (_ = ' ' + Date.prototype.toUTCString.call(e)),
              S(e) && (_ = ' ' + l(e)),
              0 === s.length && (!v || 0 == e.length))
            )
              return b[0] + _ + b[1];
            if (r < 0)
              return x(e)
                ? t.stylize(RegExp.prototype.toString.call(e), 'regexp')
                : t.stylize('[Object]', 'special');
            t.seen.push(e);
            var E;
            return (
              (E = v
                ? h(t, e, r, y, s)
                : s.map(function(n) {
                    return f(t, e, r, y, n, v);
                  })),
              t.seen.pop(),
              p(E, _, b)
            );
          }
          function c(t, e) {
            if (w(e)) return t.stylize('undefined', 'undefined');
            if (m(e)) {
              var n =
                "'" +
                JSON.stringify(e)
                  .replace(/^"|"$/g, '')
                  .replace(/'/g, "\\'")
                  .replace(/\\"/g, '"') +
                "'";
              return t.stylize(n, 'string');
            }
            return v(e)
              ? t.stylize('' + e, 'number')
              : y(e)
              ? t.stylize('' + e, 'boolean')
              : g(e)
              ? t.stylize('null', 'null')
              : void 0;
          }
          function l(t) {
            return '[' + Error.prototype.toString.call(t) + ']';
          }
          function h(t, e, n, r, i) {
            for (var o = [], s = 0, a = e.length; s < a; ++s)
              M(e, String(s))
                ? o.push(f(t, e, n, r, String(s), !0))
                : o.push('');
            return (
              i.forEach(function(i) {
                i.match(/^\d+$/) || o.push(f(t, e, n, r, i, !0));
              }),
              o
            );
          }
          function f(t, e, n, r, i, o) {
            var s, a, c;
            if (
              ((c = Object.getOwnPropertyDescriptor(e, i) || { value: e[i] }),
              c.get
                ? (a = c.set
                    ? t.stylize('[Getter/Setter]', 'special')
                    : t.stylize('[Getter]', 'special'))
                : c.set && (a = t.stylize('[Setter]', 'special')),
              M(r, i) || (s = '[' + i + ']'),
              a ||
                (t.seen.indexOf(c.value) < 0
                  ? ((a = g(n) ? u(t, c.value, null) : u(t, c.value, n - 1)),
                    a.indexOf('\n') > -1 &&
                      (a = o
                        ? a
                            .split('\n')
                            .map(function(t) {
                              return '  ' + t;
                            })
                            .join('\n')
                            .substr(2)
                        : '\n' +
                          a
                            .split('\n')
                            .map(function(t) {
                              return '   ' + t;
                            })
                            .join('\n')))
                  : (a = t.stylize('[Circular]', 'special'))),
              w(s))
            ) {
              if (o && i.match(/^\d+$/)) return a;
              (s = JSON.stringify('' + i)),
                s.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)
                  ? ((s = s.substr(1, s.length - 2)),
                    (s = t.stylize(s, 'name')))
                  : ((s = s
                      .replace(/'/g, "\\'")
                      .replace(/\\"/g, '"')
                      .replace(/(^"|"$)/g, "'")),
                    (s = t.stylize(s, 'string')));
            }
            return s + ': ' + a;
          }
          function p(t, e, n) {
            var r = 0,
              i = t.reduce(function(t, e) {
                return (
                  r++,
                  e.indexOf('\n') >= 0 && r++,
                  t + e.replace(/\u001b\[\d\d?m/g, '').length + 1
                );
              }, 0);
            return i > 60
              ? n[0] +
                  ('' === e ? '' : e + '\n ') +
                  ' ' +
                  t.join(',\n  ') +
                  ' ' +
                  n[1]
              : n[0] + e + ' ' + t.join(', ') + ' ' + n[1];
          }
          function d(t) {
            return Array.isArray(t);
          }
          function y(t) {
            return 'boolean' == typeof t;
          }
          function g(t) {
            return null === t;
          }
          function _(t) {
            return null == t;
          }
          function v(t) {
            return 'number' == typeof t;
          }
          function m(t) {
            return 'string' == typeof t;
          }
          function b(t) {
            return 'symbol' == typeof t;
          }
          function w(t) {
            return void 0 === t;
          }
          function x(t) {
            return E(t) && '[object RegExp]' === j(t);
          }
          function E(t) {
            return 'object' == typeof t && null !== t;
          }
          function k(t) {
            return E(t) && '[object Date]' === j(t);
          }
          function S(t) {
            return E(t) && ('[object Error]' === j(t) || t instanceof Error);
          }
          function A(t) {
            return 'function' == typeof t;
          }
          function T(t) {
            return (
              null === t ||
              'boolean' == typeof t ||
              'number' == typeof t ||
              'string' == typeof t ||
              'symbol' == typeof t ||
              'undefined' == typeof t
            );
          }
          function j(t) {
            return Object.prototype.toString.call(t);
          }
          function R(t) {
            return t < 10 ? '0' + t.toString(10) : t.toString(10);
          }
          function N() {
            var t = new Date(),
              e = [R(t.getHours()), R(t.getMinutes()), R(t.getSeconds())].join(
                ':'
              );
            return [t.getDate(), L[t.getMonth()], e].join(' ');
          }
          function M(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e);
          }
          var B = /%[sdj%]/g;
          (n.format = function(t) {
            if (!m(t)) {
              for (var e = [], n = 0; n < arguments.length; n++)
                e.push(i(arguments[n]));
              return e.join(' ');
            }
            for (
              var n = 1,
                r = arguments,
                o = r.length,
                s = String(t).replace(B, function(t) {
                  if ('%%' === t) return '%';
                  if (n >= o) return t;
                  switch (t) {
                    case '%s':
                      return String(r[n++]);
                    case '%d':
                      return Number(r[n++]);
                    case '%j':
                      try {
                        return JSON.stringify(r[n++]);
                      } catch (t) {
                        return '[Circular]';
                      }
                    default:
                      return t;
                  }
                }),
                a = r[n];
              n < o;
              a = r[++n]
            )
              s += g(a) || !E(a) ? ' ' + a : ' ' + i(a);
            return s;
          }),
            (n.deprecate = function(t, i) {
              function o() {
                if (!s) {
                  if (e.throwDeprecation) throw new Error(i);
                  e.traceDeprecation ? console.trace(i) : console.error(i),
                    (s = !0);
                }
                return t.apply(this, arguments);
              }
              if (w(r.process))
                return function() {
                  return n.deprecate(t, i).apply(this, arguments);
                };
              if (e.noDeprecation === !0) return t;
              var s = !1;
              return o;
            });
          var O,
            I = {};
          (n.debuglog = function(t) {
            if (
              (w(O) && (O = e.env.NODE_DEBUG || ''),
              (t = t.toUpperCase()),
              !I[t])
            )
              if (new RegExp('\\b' + t + '\\b', 'i').test(O)) {
                var r = e.pid;
                I[t] = function() {
                  var e = n.format.apply(n, arguments);
                  console.error('%s %d: %s', t, r, e);
                };
              } else I[t] = function() {};
            return I[t];
          }),
            (n.inspect = i),
            (i.colors = {
              bold: [1, 22],
              italic: [3, 23],
              underline: [4, 24],
              inverse: [7, 27],
              white: [37, 39],
              grey: [90, 39],
              black: [30, 39],
              blue: [34, 39],
              cyan: [36, 39],
              green: [32, 39],
              magenta: [35, 39],
              red: [31, 39],
              yellow: [33, 39]
            }),
            (i.styles = {
              special: 'cyan',
              number: 'yellow',
              boolean: 'yellow',
              undefined: 'grey',
              null: 'bold',
              string: 'green',
              date: 'magenta',
              regexp: 'red'
            }),
            (n.isArray = d),
            (n.isBoolean = y),
            (n.isNull = g),
            (n.isNullOrUndefined = _),
            (n.isNumber = v),
            (n.isString = m),
            (n.isSymbol = b),
            (n.isUndefined = w),
            (n.isRegExp = x),
            (n.isObject = E),
            (n.isDate = k),
            (n.isError = S),
            (n.isFunction = A),
            (n.isPrimitive = T),
            (n.isBuffer = t('./support/isBuffer'));
          var L = [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec'
          ];
          (n.log = function() {
            console.log('%s - %s', N(), n.format.apply(n, arguments));
          }),
            (n.inherits = t('inherits')),
            (n._extend = function(t, e) {
              if (!e || !E(e)) return t;
              for (var n = Object.keys(e), r = n.length; r--; )
                t[n[r]] = e[n[r]];
              return t;
            });
        }.call(
          this,
          t('_process'),
          'undefined' != typeof global
            ? global
            : 'undefined' != typeof self
            ? self
            : 'undefined' != typeof window
            ? window
            : {}
        ));
      },
      { './support/isBuffer': 104, _process: 87, inherits: 103 }
    ],
    106: [
      function(t, e, n) {
        function r(t, e) {
          function n(r) {
            function i(t) {
              function n(t) {
                t ? e(t) : o.apply(o, r);
              }
              var r = arguments;
              c ? c(t, n) : t ? e(t) : o.apply(o, r);
            }
            function o() {
              function r(r, o) {
                function s() {
                  e(r);
                }
                function a() {
                  e.apply(e, i);
                }
                function u() {
                  n(c);
                }
                if (r) setTimeout(s, 0);
                else {
                  var c = t[o];
                  c ? ((c.incoming = i), setTimeout(u, 0)) : setTimeout(a, 0);
                }
              }
              var i = Array.prototype.slice.apply(arguments).slice(1);
              u
                ? 'function' == typeof u
                  ? u.apply(u, i.concat([r]))
                  : 'string' == typeof u
                  ? r(null, u)
                  : e(new Error('Invalid `next` in state.'))
                : e.apply(e, arguments);
            }
            var s, a, u, c, l;
            if (
              (r &&
                ((s = r.work),
                (a = r.params),
                (u = r.next),
                (c = r.checkError),
                (l = r.incoming)),
              !s)
            )
              return void e(new Error('No work for state.'));
            var h = [];
            l && (h = h.concat(l)),
              a && (h = h.concat(a)),
              h.push(i),
              s.apply(s, h);
          }
          n(t.start);
        }
        e.exports = r;
      },
      {}
    ],
    107: [
      function(t, e, n) {
        arguments[4][63][0].apply(n, arguments);
      },
      { dup: 63 }
    ],
    108: [
      function(t, e, n) {
        'use strict';
        function r(t) {
          function e() {
            y.classed('hidden', !0), d('/problem/' + f.id + '/edit');
          }
          function n() {
            s(f, u(h, a));
          }
          function h() {
            p(f, a), r({ problem: f, commitChanges: p, setRoute: d });
          }
          var f = t.problem,
            p = t.commitChanges,
            d = t.setRoute;
          i
            .selectAll('body > section:not(#display-problem)')
            .classed('hidden', !0),
            i.select('#change-council-link').on('click', n);
          var y = i.select('#display-problem');
          y.classed('hidden', !1), y.select('.edit-button').on('click', e);
          var g = y.select('.choice-root'),
            _ = g.selectAll('.choice').data(f.choices, l);
          _.selectAll('.presenter img').data(f.choices, l), _.exit().remove();
          var v = _.enter()
            .append('li')
            .classed('choice', !0);
          v
            .append('div')
            .classed('presenter', !0)
            .append('a')
            .classed('attribution-link', !0)
            .append('img'),
            c.setUpTornPaperBoxes(v);
          var m = v.merge(_);
          m.attr('id', l),
            m
              .selectAll('.presenter img')
              .attr('src', o('presenterImageURL'))
              .attr('alt', o('imageTitle')),
            m.selectAll('.attribution-link').attr('href', o('imageSource')),
            m.selectAll('.dialogue-text').text(o('text')),
            y.select('.problem .dialogue-text').text(f.text),
            c.renderTearsAfterDelay(y);
        }
        var i = t('d3-selection'),
          o = t('accessor'),
          s = t('./change-council'),
          a = t('./handle-error'),
          u = t('standard-bail')(),
          c = t('./torn-paper-box-kit'),
          l = o();
        e.exports = r;
      },
      {
        './change-council': 3,
        './handle-error': 9,
        './torn-paper-box-kit': 114,
        accessor: 14,
        'd3-selection': 24,
        'standard-bail': 99
      }
    ],
    109: [
      function(t, e, n) {
        'use strict';
        function r(t) {
          function e() {
            f.choices.push(o()), s(r, y);
          }
          function n(t) {
            (t.text = this.textContent), p(f, u);
          }
          function l(t) {
            (t.text = this.textContent),
              p(f, u),
              r({ problem: f, commitChanges: p, setRoute: d });
          }
          function h() {
            g.classed('hidden', !0), d('/problem/' + f.id);
          }
          var f = t.problem,
            p = t.commitChanges,
            d = t.setRoute;
          i.selectAll('body > section:not(#edit-problem)').classed(
            'hidden',
            !0
          );
          var y = arguments[0],
            g = i.select('#edit-problem');
          g.classed('hidden', !1),
            g.select('.add-choice-button').on('click', e),
            g.select('.view-button').on('click', h),
            g
              .select('.problem .dialogue-text')
              .datum(f)
              .text(f.text)
              .on('blur', n);
          var _ = g.select('.choice-root'),
            v = _.selectAll('.choice').data(f.choices, c);
          v.exit().remove();
          var m = v
            .enter()
            .append('li')
            .classed('choice', !0);
          m.append('div')
            .classed('dialogue-text', !0)
            .attr('contenteditable', !0)
            .on('blur', l);
          var b = m.merge(v);
          b.attr('id', c), b.selectAll('.dialogue-text').text(a('text'));
        }
        var i = t('d3-selection'),
          o = t('./create-choice'),
          s = t('call-next-tick'),
          a = t('accessor'),
          u = t('./handle-error'),
          c = a();
        e.exports = r;
      },
      {
        './create-choice': 5,
        './handle-error': 9,
        accessor: 14,
        'call-next-tick': 20,
        'd3-selection': 24
      }
    ],
    110: [
      function(t, e, n) {
        'use strict';
        function r(t) {
          function e(t) {
            f.classed('hidden', !0), l('/problem/' + t.id);
          }
          function n(t) {
            f.classed('hidden', !0), l('/problem/' + t.id + '/edit');
          }
          function r() {
            s({ saveProblem: h, setRoute: l });
          }
          var c = t.problemsData,
            l = t.setRoute,
            h = t.saveProblem;
          i.selectAll('body > section:not(#list-problems)').classed(
            'hidden',
            !0
          );
          var f = i.select('#list-problems');
          f.classed('hidden', !1), f.select('#add-button').on('click', r);
          var p = f.select('.problems-root'),
            d = p.selectAll('.problem').data(c, u);
          d.exit().remove();
          var y = d
            .enter()
            .append('li')
            .classed('problem', !0);
          a.setUpTornPaperBoxes(y),
            y.selectAll('svg').on('click', e),
            y
              .append('a')
              .classed('action-link', !0)
              .text('Edit')
              .on('click', n);
          var g = y.merge(d);
          g.attr('id', u),
            g.selectAll('.problem .dialogue-text').text(o('text')),
            a.renderTearsAfterDelay(f);
        }
        var i = t('d3-selection'),
          o = t('accessor'),
          s = t('./add-new-problem'),
          a = t('./torn-paper-box-kit'),
          u = o();
        e.exports = r;
      },
      {
        './add-new-problem': 1,
        './torn-paper-box-kit': 114,
        accessor: 14,
        'd3-selection': 24
      }
    ],
    111: [
      function(t, e, n) {
        'use strict';
        function r(t) {
          function e(t, r) {
            function a(t, e, n) {
              if (t) r(t);
              else if ('ok' !== n.stat || n.photos.photo.length < 1) {
                var i = new Error("Couldn't find image. Status:", n.stat);
                (i.notFound = !0), r(i);
              } else
                h === n.photos.page ? r(null, n.photos.photo) : u(n.photos, r);
            }
            function u(t, n) {
              if (t.pages > 1) {
                var r = { term: c, userId: l, pageToGet: o.rollDie(t.pages) };
                i(e, r, n);
              } else n(null, t.photo);
            }
            var c = t.term,
              l = t.userId,
              h = t.pageToGet,
              f = { method: 'GET', url: n(c, l, h), timeout: 3e4, json: !0 };
            s(f, a);
          }
          function n(t, e, n) {
            var i =
              'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=' +
              r +
              '&user_id=' +
              encodeURIComponent(e) +
              '&text=' +
              t +
              '&format=json&nojsoncallback=1';
            return n && (i += '&page=' + n), i;
          }
          var r, s;
          return t && ((r = t.flickrAPIKey), (s = t.request)), e;
        }
        var i = t('call-next-tick'),
          o = t('probable');
        e.exports = r;
      },
      { 'call-next-tick': 20, probable: 86 }
    ],
    112: [
      function(t, e, n) {
        'use strict';
        function r() {
          function t(t, e) {
            a.put(t.id, t, e);
          }
          function e(t, e) {
            a.get(t, e);
          }
          function n(t) {
            function e(e) {
              o.destroy(), t(e);
            }
            function n(t) {
              i.push(t);
            }
            function r() {
              t(null, i);
            }
            var i = [],
              o = a.createValueStream();
            o.on('error', e)
              .on('data', n)
              .on('end', r);
          }
          var r = s(i('council', { db: o, valueEncoding: 'json' })),
            a = r.sublevel('problem');
          return { saveProblem: t, loadProblem: e, loadAllProblems: n };
        }
        var i = t('levelup'),
          o = t('level-js'),
          s = t('level-sublevel');
        e.exports = r;
      },
      { 'level-js': 51, 'level-sublevel': 57, levelup: 77 }
    ],
    113: [
      function(t, e, n) {
        'use strict';
        e.exports = {
          'The British Library': [
            [3, 'animal'],
            [2, 'insect'],
            [1, 'face'],
            [1, 'head'],
            [2, 'skeleton'],
            [1, 'person'],
            [2, 'portrait'],
            [2, 'woman'],
            [2, 'dance']
          ],
          'US National Archives': [
            [1, 'animal'],
            [2, 'bird'],
            [2, 'child'],
            [2, 'face'],
            [2, 'man'],
            [2, 'person'],
            [2, 'portrait'],
            [2, 'woman'],
            [2, 'worker']
          ],
          'New York Public Library': [
            [2, 'child'],
            [2, 'man'],
            [2, 'person'],
            [2, 'portrait'],
            [2, 'woman']
          ],
          'The Library of Congress': [
            [2, 'animal'],
            [2, 'child'],
            [1, 'face'],
            [1, 'man'],
            [3, 'person'],
            [2, 'portrait'],
            [3, 'woman']
          ],
          'Internet Archive Book Images': [
            [2, 'insect'],
            [2, 'snake'],
            [4, 'mammal'],
            [1, 'dog'],
            [3, 'cat'],
            [1, 'forest'],
            [1, 'tiger'],
            [2, 'face'],
            [2, 'person'],
            [2, 'portrait'],
            [2, 'woman'],
            [1, 'skull'],
            [2, 'owl'],
            [1, 'dinosaur']
          ],
          'Texas State Library': [[1, 'person'], [2, 'portrait']],
          'Archivo Historico': [
            [1, 'portrait'],
            [1, 'person'],
            [1, 'man'],
            [2, 'music']
          ],
          'National Library of Medicine': [
            [2, 'woman'],
            [1, 'person'],
            [1, 'nurse'],
            [1, 'skeleton'],
            [2, 'poster']
          ],
          'Museum of Hartlepool': [[2, 'people'], [1, 'toy']],
          NASA: [
            [2, 'astronaut'],
            [1, 'shuttle'],
            [1, 'rocket'],
            [2, 'planet'],
            [2, 'moon'],
            [1, 'space']
          ]
        };
      },
      {}
    ],
    114: [
      function(t, e, n) {
        'use strict';
        function r(t) {
          return (
            t
              .append('svg')
              .classed('dialogue-text-board', !0)
              .append('foreignObject')
              .attr('width', '100%')
              .attr('height', '100%')
              .attr('x', l)
              .attr('y', l)
              .append('xhtml:div')
              .classed('dialogue-text-container', !0)
              .append('xhtml:div')
              .classed('dialogue-text', !0),
            t
          );
        }
        function i(t) {
          function e() {
            o(t.selectAll('.dialogue-text-board'));
          }
          setTimeout(e, 300);
        }
        function o(t) {
          function e() {
            return a(u.select(this)) + 2 * l;
          }
          function n() {
            return s(u.select(this)) + 2 * l;
          }
          function r() {
            return a(u.select(this));
          }
          function i() {
            return s(u.select(this));
          }
          function o(t) {
            var e = { direction: t, maxThickness: l },
              n = 'height';
            return (
              0 === t[0] && (n = 'width'),
              (e.length = u.select(this.parentNode).attr(n)),
              c(e)
            );
          }
          function h(t) {
            var e = 0,
              n = 0;
            return (
              t[0] > 0 && (e = u.select(this.parentNode).attr('width') - l - 1),
              t[1] > 0 &&
                (n = u.select(this.parentNode).attr('height') - l - 1),
              'translate(' + e + ', ' + n + ')'
            );
          }
          t
            .selectAll('foreignObject')
            .attr('width', r)
            .attr('height', i),
            t.attr('width', e).attr('height', n);
          var f = t
              .selectAll('.tear-path')
              .data([[0, -1], [0, 1], [-1, 0], [1, 0]]),
            p = f
              .enter()
              .append('path')
              .classed('tear-path', !0)
              .merge(f);
          p.attr('d', o).attr('transform', h);
        }
        function s(t) {
          var e = t.select('.dialogue-text');
          return e.node().clientHeight;
        }
        function a(t) {
          var e = t.select('.dialogue-text');
          return e.node().clientWidth;
        }
        var u = t('d3-selection'),
          c = t('./draw-tear'),
          l = 5;
        e.exports = { setUpTornPaperBoxes: r, renderTearsAfterDelay: i };
      },
      { './draw-tear': 7, 'd3-selection': 24 }
    ]
  },
  {},
  [2]
);
