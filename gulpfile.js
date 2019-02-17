var gulp = require('gulp'),
    gutil = require('gulp-util'),
    coffee = require('gulp-coffee'),
    concat = require('gulp-concat'),
    browserify = require('gulp-browserify');

gulp.task ('log', function(done){
    gutil.log('Konsolenausgabe');
    done();
});

var coffeeScripts = ['components/coffee/*.coffee'];
var jsSources = ['components/scripts/*.js'];

gulp.task('coffee', function(done){
    gulp.src(coffeeScripts)
    .pipe(coffee({bare: true})
    .on('error', gutil.log))
    .pipe(gulp.dest('components/scripts'));
    done();
});

gulp.task('js', function(done){
    gulp.src(jsSources)
    .pipe(concat('script.js'))
    .pipe(browserify())
    .pipe(gulp.dest('build/dev/js'));
    done();
});