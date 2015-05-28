'use strict';

const gulp = require('gulp'),
      browserSync = require('browser-sync'),
      browserify = require('browserify'),
      watchify = require('watchify'),
      source = require('vinyl-source-stream'),

      dependencies = require('./package.json').dependencies;

let globals = Object.keys(dependencies),
    taskPath = {
        public: {
            base: './app/public/',
            src: './app/public/**/*',
            dest: './www/'
        },
        scripts: {
            entries: './app/app.jsx',
            src: './app/scripts/**/*',
            source: 'scripts.js',
            dest: './www/js/'
        },
        serve: {
            src: './app/**/*',
            dest: './www/'
        }
    };

gulp.task('public', () => {
    gulp.src(taskPath.public.src, {
        base: taskPath.public.base
    }).pipe(gulp.dest(taskPath.public.dest));
});

gulp.task('scripts', () => {
    browserify(taskPath.scripts.entries)
        .external(globals)
        .bundle()
        .pipe(source(taskPath.scripts.source))
        .pipe(gulp.dest(taskPath.scripts.dest));
});

gulp.task('serve', () => {
    browserSync.init({
        server: {
            reloadDelay: 5000,
            baseDir: taskPath.serve.dest
        }
    });

    Object.keys(taskPath).forEach(task => {
        if (task !== 'serve') {
            if (task === 'scripts') {
                taskPath[task].src = [
                    taskPath[task].entries,
                    taskPath[task].src
                ];
            }

            gulp.watch(taskPath[task].src, [task]);
        }
    });

    gulp.watch(taskPath.serve.src, browserSync.reload);
});

gulp.task('default', ['serve']);
