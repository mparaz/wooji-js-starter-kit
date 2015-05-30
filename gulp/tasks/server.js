'use strict';

const gulp = require('gulp'),
      browserSync = require('browser-sync'),

      config = require('./../config.json');

let taskName = __filename.split('/').pop().split('.')[0],
    tasks = Object.keys(config.task).filter(task => {
        return task != taskName;
    });

gulp.task(taskName, tasks, () => {
    let data = config.task[taskName];

    browserSync.init(data.options);

    tasks.forEach(taskName => {
        let task = config.task[taskName],
            hasKey = 'entryFile';

        if (task.init) {
            if (task.path.hasOwnProperty(hasKey)) {
                task.path.src = [
                    task.path.entryFile,
                    task.path.src
                ];
            }

            gulp.watch(task.path.src, [taskName]);
        }
    });

    gulp.watch(data.path.src, browserSync.reload);
});
