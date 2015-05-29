'use strict';

const gulp = require('gulp'),
      browserSync = require('browser-sync'),

      config = require('./config.json');

let taskName = __filename.split('/').pop().split('.')[0],
    tasks = Object.keys(config).filter(task => {
        return task != taskName;
    });

gulp.task(taskName, tasks, () => {
    let path = config.server.path,
        options = {
            server: {
                baseDir: path.dest
            }
        };

    browserSync.init(options);

    Object.keys(config).forEach(taskName => {
        let task = config[taskName],
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

    gulp.watch(path.src, browserSync.reload);
});
