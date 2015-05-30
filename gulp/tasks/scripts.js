'use strict';

const gulp = require('gulp'),
      browserSync = require('browser-sync'),
      browserify = require('browserify'),
      source = require('vinyl-source-stream'),

      config = require('./../config.json');

let taskName = __filename.split('/').pop().split('.')[0];

gulp.task(taskName, () => {
    let data = config.task[taskName];

    browserify(data.path.entryFile)
        .external(data.shims)
        .bundle()
        .pipe(source(data.path.source))
        .pipe(gulp.dest(data.path.dest));
});
