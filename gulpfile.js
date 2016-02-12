var gulp = require('gulp');
var jasmine  = require('gulp-jasmine');
var watch = require('gulp-watch')
 
 var filesForTest = ['spec/spec.js'] 
 
 gulp.task('default', ['jasmine'], function () {
 
    gulp.watch('spec/spec.js', ['jasmine']);
	
});
 
gulp.task('jasmine', function() {  
  
  return gulp.src(filesForTest)
		 .pipe(jasmine());
		 
});