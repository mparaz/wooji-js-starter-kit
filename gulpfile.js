'use strict';

const gulp = require('gulp'),
      browserSync = require('browser-sync'),
      browserify = require('browserify'),
      source = require('vinyl-source-stream'),
      postcss = require('gulp-postcss'),
      cssnext = require('cssnext'),
      cssNested = require('postcss-nested'),
      cssVariables = require('postcss-css-variables'),

      dependencies = require('./package.json').dependencies;

let paths = {
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
    styles: {
        entries: './app/styles/styles.css',
        src: './app/styles/**/*',
        dest: './www/css/'
    },
    serve: {
        src: './app/**/*',
        dest: './www/'
    }
},
    tasks = Object.keys(paths).slice(0, -1);

gulp.task('public', () => {
    let options = {
        base: paths.public.base
    };

    gulp.src(paths.public.src, options)
        .pipe(gulp.dest(paths.public.dest));
});

gulp.task('scripts', () => {
    let globals = Object.keys(dependencies);

    browserify(paths.scripts.entries)
        .external(globals)
        .bundle()
        .pipe(source(paths.scripts.source))
        .pipe(gulp.dest(paths.scripts.dest));
});

gulp.task('styles', () => {
    let processors = [
        cssnext,
        cssNested,
        cssVariables
    ];

    gulp.src(paths.styles.entries)
        .pipe(postcss(processors))
        .pipe(gulp.dest(paths.styles.dest));
});

gulp.task('serve', [tasks], () => {
    let options = {
        server: {
            baseDir: paths.serve.dest
        }
    };

    browserSync.init(options);

    Object.keys(paths).forEach(task => {
        if (task !== 'serve') {
            if (['scripts', 'styles'].indexOf(task) !== -1) {
                paths[task].src = [
                    paths[task].entries,
                    paths[task].src
                ];
            }

            gulp.watch(paths[task].src, [task]);
        }
    });

    gulp.watch(paths.serve.src, browserSync.reload);
});

gulp.task('default', ['serve']);
