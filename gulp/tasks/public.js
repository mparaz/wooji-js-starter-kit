'use strict';

const gulp = require('gulp'),

      config = require('./../config.json');

let taskName = __filename.split('/').pop().split('.')[0];

gulp.task(taskName, () => {
    let data = config.task[taskName];

    gulp.src(data.path.src, data.options)
        .pipe(gulp.dest(data.path.dest));
});
