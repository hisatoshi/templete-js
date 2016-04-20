const gulp = require('gulp');
const webpack = require('gulp-webpack');
const webpackConfig = require('./webpack.config.js');

gulp.task('cleanBuild', function (cb) {
  var rimraf = require('rimraf');
  rimraf('./public/dist/', cb);
});

gulp.task('copyIndex', ['cleanBuild'], function () {
  return gulp.src('./public/src/index.html')
  .pipe(gulp.dest('./public/dist/'));
});

gulp.task('build', ['copyIndex'], function () {
  return gulp.src('')
  .pipe(webpack(webpackConfig))
  .pipe(gulp.dest(''));
});

gulp.task('default', ['cleanBuild', 'copyIndex', 'build']);
