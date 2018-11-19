var gulp = require('gulp');
var mocha = require('gulp-mocha');

var srcPath = ['src/*.js','test/*.js'];

gulp.task('test', function() {
  gulp.src(srcPath)
  .pipe(mocha());
});

gulp.task('continuous-tdd', ['test'], function() {
  gulp.watch(srcPath, ['test']);
});
