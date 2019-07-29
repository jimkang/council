include config.mk

BROWSERIFY = ./node_modules/.bin/browserify
UGLIFY = ./node_modules/uglify-es/bin/uglifyjs
TRANSFORM_SWITCH = -t [ babelify --presets [ es2015 ] ]

SMOKECHROME = node_modules/.bin/tap-closer | \
        node_modules/.bin/smokestack -b chrome

SMOKEFIREFOX = node_modules/.bin/tap-closer | \
        node_modules/.bin/smokestack -b firefox

run:
	wzrd app.js:index.js -- \
		-d \
		$(TRANSFORM_SWITCH)

build:
	$(BROWSERIFY) $(TRANSFORM_SWITCH) app.js | $(UGLIFY) -c -m -o index.js

run-chrome-test:
	$(BROWSERIFY) -d tests/store-tests.js | $(SMOKECHROME)

run-firefox-test:
	$(BROWSERIFY) -d tests/store-tests.js | $(SMOKEFIREFOX)

test: run-chrome-test run-firefox-test

pushall: sync
	git push origin master

lint:
	./node_modules/.bin/eslint .

purifycss:
	./node_modules/.bin/purifycss app.css app.js --info --out app.css

prettier:
	prettier --single-quote --write "**/*.js"

sync:
	rsync -a $(HOMEDIR)/ $(USER)@$(SERVER):/$(APPDIR) --exclude node_modules/ \
		--omit-dir-times --no-perms

