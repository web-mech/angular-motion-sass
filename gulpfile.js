var gulp = require('gulp'),
  sass = require('gulp-sass');



function build(cb) {
  gulp.src('./assets/stylesheets/angular-motion.scss')
    .pipe(sass({
      sourceMap: 'sass',
      outputStyle: 'compressed'
    }))
    .pipe(gulp.dest('./dist'))
    .on('end', cb);
}

gulp.task('build', build);