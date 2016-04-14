// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var minify = require('gulp-minifier');
var concat = require('gulp-concat');

gulp.task('css', function() {
  return gulp.src('views/css/*.css')
    .pipe(concat('style.min.css'))
    .pipe(minify({
      minify: true,
      collapseWhitespace: true,
      conservativeCollapse: true,
      minifyJS: true,
      minifyCSS: true
    }))
    .pipe(gulp.dest('views/css'));
});

gulp.task('cssroot', function() {
  return gulp.src('css/*.css')
        .pipe(concat('all.css'))
        .pipe(gulp.dest('css'));
});

gulp.task('default', function() {
  return gulp.src('views/**/*').pipe(minify({
    minify: true,
    collapseWhitespace: true,
    conservativeCollapse: true,
    minifyJS: true,
    minifyCSS: true
  })).pipe(gulp.dest('dist'));
});

gulp.task('in', function() {
  return gulp.src('index.html').pipe(minify({
    minify: true,
    collapseWhitespace: true,
    conservativeCollapse: true,
    minifyJS: true,
    minifyCSS: true
  })).pipe(gulp.dest('dist'));
});

