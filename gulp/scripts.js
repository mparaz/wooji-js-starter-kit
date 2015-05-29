'use strict';

const gulp = require('gulp'),
      browserSync = require('browser-sync'),
      browserify = require('browserify'),
      source = require('vinyl-source-stream'),

      config = require('./config.json'),
      dependencies = require('.././package.json').dependencies;

let taskName = __filename.split('/').pop().split('.')[0];

gulp.task(taskName, () => {
    let path = config.scripts.path,
        globals = Object.keys(dependencies);

    browserify(path.entryFile)
        .external(globals)
        .bundle()
        .pipe(source(path.source))
        .pipe(gulp.dest(path.dest));
});
