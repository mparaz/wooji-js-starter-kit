'use strict';

const gulp = require('gulp'),

      config = require('./gulp/config.json');

let tasks = Object.keys(config.task),
    defaultTasks = tasks.filter(taskName => {
        return config.task[taskName].default;
    });

tasks.map(file => {
    require('./gulp/tasks/' + file + '.js');
});

gulp.task('default', defaultTasks);
