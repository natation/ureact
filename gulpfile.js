var gulp = require('gulp');
var gutil = require('gulp-util');    // printing info/debug
var source = require('vinyl-source-stream'); // throwing textfile from one part of build to other
var browserify = require('browserify');  // load order
var watchify = require('watchify');   // auto rerun gulpfile whenever code changes
var reactify = require('reactify');   // works in conjunction with browserify to convert react to js

gulp.task('default', function () {
  var bundler = watchify(browserify({
    entries: ['./src/app.jsx'],
    transform: [reactify],   // compile jsx to js
    extensions: ['.jsx'],
    debug: true,      // boilerplate from here to fullPaths
    cache: {},
    packageCache: {},
    fullPaths: true
  }));

  function build(file) {
    if (file) gutil.log('Recompiling ' + file);
    return bundler
      .bundle()
      .on('error', gutil.log.bind(gutil, 'Browserify Error')) // if ever an error during bundling, throw error
      .pipe(source('main.js'))
      .pipe(gulp.dest('./'));
  }
  build();
  bundler.on('update', build);
});