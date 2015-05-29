'use strict';

const gulp = require('gulp'),
      postcss = require('gulp-postcss'),
      cssnext = require('cssnext'),
      cssNested = require('postcss-nested'),
      cssVariables = require('postcss-css-variables'),

      config = require('./config.json');

let taskName = __filename.split('/').pop().split('.')[0];

gulp.task(taskName, () => {
    let path = config.styles.path,
        processors = [
            cssnext,
            cssNested,
            cssVariables
        ];

    gulp.src(path.entryFile)
        .pipe(postcss(processors))
        .pipe(gulp.dest(path.dest));
});
