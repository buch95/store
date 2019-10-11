'use strict';

let gulp = require('gulp'),
    sass = require('gulp-sass'),
    pug = require('gulp-pug');

 sass.compiler = require('node-sass');    

    // compilate sass
    gulp.task('sass', () => {
        return gulp.src('app/scss/**/*.scss')
          .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
          .pipe(gulp.dest('app/css'));
      });

    //  compilate pug
    gulp.task('pug', function(){
      return gulp.src('app/pug/**/*.pug')
        .pipe(pug({
          pretty: true
        }))
        .pipe(gulp.dest('app'));
    });
    
    //watching   
      gulp.task('sass:watch',  () => {
        gulp.watch('app/scss/**/*.scss', gulp.parallel('sass'));
      });    
      gulp.task('pug:watch',  () => {
        gulp.watch('app/pug/**/*.pug', gulp.parallel('pug'));
      });   

    //default

     gulp.task('default', gulp.parallel(
       'sass', 
       'sass:watch',
       'pug',
       'pug:watch'
       ));