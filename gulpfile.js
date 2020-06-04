const gulp = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');
const watch = require('gulp-watch');
const babel = require('gulp-babel');

sass.compiler = require('node-sass');

gulp.task('dev',  function dev (cb) {

    gulp.src('./src/*.html')
        .pipe(gulp.dest('./dist/'));

    gulp.src('./src/img/**/*')
        .pipe(gulp.dest('./dist/img/'));
    
    gulp.src('./src/js/*.js')
        .pipe(babel({
            presets: ['@babel/env'],
            plugins: ["@babel/plugin-transform-modules-commonjs"],
        }))
        .pipe(concat('bundle.js'))
        .pipe(gulp.dest('./dist/js/'));
    
    gulp.src('./src/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist/css'));
    cb();
  });

 


    gulp.task('watch', function (cb) {
        gulp.task('dev');
        gulp.watch('./src/**/*', gulp.task('dev'));
    }); 