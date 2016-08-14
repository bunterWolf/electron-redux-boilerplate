'use strict';

var gulp = require('gulp'),
    sourcemaps = require('gulp-sourcemaps'),
    Config = require('./gulpfile.config'),
    babel = require("gulp-babel"),
    electron = require('electron-connect').server.create({
      "remote-debugging-port": 9992
    });

var config = new Config();

/**
 * > gulp
 */
gulp.task('default', ['compile-babel']);

/**
 * > gulp dev
 */
gulp.task('dev', ['set-dev-node-env', 'compile-babel'], function () {

  electron.start(["--remote-debugging-port=9992"]) // Electron Connect, Auto Reload

  gulp.watch('./src/**/*.scss', ['sass', 'reloadSASS']);
  gulp.watch('./src/js-esNext/**/*', ['compile-babel', 'reloadTS']);
});

/**
 * > gulp debug
 */
gulp.task('debug', ['set-debug-node-env'], function () {

  electron.start(["--remote-debugging-port=9992"]) // Electron Connect, Auto Reload

  gulp.watch('./src/**/*.scss', ['sass', 'reloadSASS']);
  gulp.watch('./src/ts/**/*', ['compile-babel', 'reloadTS']);
});

/**
 * > gulp prod
 */
gulp.task('production', ['set-prod-node-env'], function () {
  electron.start() // Electron Connect, Auto Reload
});

/**
 * Compile TypeScript and include references to library and app .d.ts files.
 */
gulp.task('compile-babel', function () {
    // var sourceTsxFiles = [config.allTypeScript, //path to typescript files
    //                      config.libraryTypeScriptDefinitions]; //reference to library .d.ts files
    // var tsResult = gulp.src(sourceTsxFiles)
    //                    .pipe(sourcemaps.init())
    //                    .pipe(tsc(tsProject));
    //     tsResult.dts.pipe(gulp.dest(config.tsOutputPath));
    //     return tsResult.js
    //                     .pipe(sourcemaps.write({sourceRoot: '/src/ts'}))
    //                     .pipe(gulp.dest(config.tsOutputPath))


    // .pipe(sourcemaps.init())
    // .pipe(babel())
    // .pipe(concat("all.js"))
    // .pipe(sourcemaps.write("."))
    // .pipe(gulp.dest("dist"));



    return gulp.src(config.esNext)
    // .pipe(sourcemaps.init())
    .pipe(babel())
    // .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(config.es2015));
});

/**
 * Compile SASS
 */
gulp.task('sass', function () {
  console.log('SASS')
  gulp.src('./src/css/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./src/css'));
  gulp.src('./src/themes/default-light/css/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./src/themes/default-light/css'));
});

/**
 * Reload After Compile with Electron Connect
 */
gulp.task('reloadTS', ['compile-babel'], function () {
  console.log('#TS Changed: Reload Electron')
  electron.reload()
})

gulp.task('reloadSASS', ['sass'], function () {
  console.log('#SASS Changed: Reload Electron')
  electron.reload()
})


/**
 * NODE_ENV / Environment Variables
 * http://stackoverflow.com/questions/28787457/how-can-i-set-an-environment-variable-from-gulp
 */

gulp.task('set-dev-node-env', function() {
    return process.env.NODE_ENV = 'development';
});

gulp.task('set-prod-node-env', function() {
    return process.env.NODE_ENV = 'production';
});

gulp.task('set-debug-node-env', function() {
    return process.env.NODE_ENV = 'debug';
});
