'use strict';

const gulp = require('gulp'),
      dir = require('require-dir'),

      config = require('./gulp/config.json');

let files = dir('./gulp/'),
    tasks = Object.keys(files).filter(task => {
        let validTasks = Object.keys(config);

        if (validTasks.indexOf(task) !== -1) {
            return task;
        }

        return false;
    });

gulp.task('default', tasks);
