'use strict';

let gulp = require('gulp');
let sass = require('gulp-sass');

gulp.task('sass', function(){
    return gulp.src('./scss/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./css'))
});

gulp.task('sass:watch', function(){
    gulp.watch('./scss/**/*.scss', gulp.series('sass'))
});