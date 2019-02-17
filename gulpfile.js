var gulp = require('gulp'),
    gutil = require('gulp-util'),
    coffee = require('gulp-coffee');

gulp.task ('log', function(done){
    gutil.log('Konsolenausgabe');
    done();
});

coffeeScripts = ['components/coffee/*.coffee'];

gulp.task('coffee', function(done){
    gulp.src(coffeeScripts)
    .pipe(coffee({bare: true})
    .on('error', gutil.log))
    .pipe(gulp.dest('components/scripts'));
    done();
});