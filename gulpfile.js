'use strict';

const gulp = require('gulp');
const browserSync = require('browser-sync');

gulp.task('server', () => {
    let path = {
        src: './src/**/*',
        dest: './www/'
    };

    browserSync.init({
        server: {
            baseDir: path.dest
        }
    });

    gulp.watch(path.src, browserSync.reload);
});

gulp.task('default', ['server']);
