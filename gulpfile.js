'use strict';

var gulp = require('gulp');
var babel = require('gulp-babel');

gulp.task('watch', function() {
  gulp.watch('server');
});

gulp.task('default', function() {
  return gulp.src('server/**/*.js')
    .pipe(babel())
    .pipe(gulp.dest('build'));
});
