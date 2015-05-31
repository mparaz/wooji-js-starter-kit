'use strict';

const gulp = require('gulp'),

      config = require('./gulp/config.json');

let tasks = Object.keys(config.task),
    defaultTasks = tasks.filter(taskName => {
        return config.task[taskName].default;
    });

tasks.map(file => {
    let path = `./gulp/tasks/${file}.js`;

    require(path);
});

gulp.task('default', defaultTasks);
