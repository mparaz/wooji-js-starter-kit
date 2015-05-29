'use strict';

const gulp = require('gulp'),

      config = require('./config.json');

let taskName = __filename.split('/').pop().split('.')[0];

gulp.task(taskName, () => {
    let path = config.public.path,
        options = {base: path.base};

    gulp.src(path.src, options)
        .pipe(gulp.dest(path.dest));
});
