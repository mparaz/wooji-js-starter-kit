'use strict';

const gulp = require('gulp'),
      postcss = require('gulp-postcss'),
      rename = require('gulp-rename'),

      config = require('./../config.json');

let taskName = __filename.split('/').pop().split('.')[0];

gulp.task(taskName, () => {
    let data = config.task[taskName],
        processors = data.processors.map(processor => {
            return require(processor);
        });

    gulp.src(data.path.entryFile)
        .pipe(postcss(processors))
        .pipe(rename(data.path.newFile))
        .pipe(gulp.dest(data.path.dest));
});
