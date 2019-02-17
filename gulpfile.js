var gulp = require('gulp'),
    gutil = require('gulp-util'),
    coffee = require('gulp-coffee'),
    concat = require('gulp-concat'),
    compass = require('gulp-compass'),
    path = require('path'),
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

gulp.task('compass', function(done){
    gulp.src('components/sass/style.scss')
    .pipe(compass({
      sass: 'components/sass/',
      image: 'build/dev/images',
      style: 'expanded'
    }))
    .on('error', gutil.log)
    .pipe(gulp.dest('build/dev/css'));
    done();
});

gulp.task('watch', function(){
    gulp.watch('components/coffee/tagline.coffee', gulp.series('coffee'));
    gulp.watch('components/scripts/*.js', gulp.series('js'));
    gulp.watch('components/sass/*.scss', gulp.series('compass'));
});

gulp.task('default', gulp.series('coffee', 'js', 'compass', 'watch'));
