// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

// Lint Task
gulp.task('lint', function() {
    return gulp.src('views/js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// Compile Our Sass
gulp.task('sass', function() {
    return gulp.src('scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('dist/css'));
});

// Concatenate & Minify JS
gulp.task('scripts', function() {
    return gulp.src('views/js/*.js')
        .pipe(concat('all.js'))
        .pipe(gulp.dest('views'))
        .pipe(rename('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});
gulp.task('css', function() {
    return gulp.src('views/css/*.css')
        .pipe(concat('all.css'))
        .pipe(gulp.dest('views'))
        .pipe(rename('all.min.css'))
        .pipe(uglify())
        .pipe(gulp.dest('views/css'));
});

gulp.task('html', function() {
    return gulp.src('views/pizza.html')
        .pipe(gulp.dest('views'))
        .pipe(uglify());
});
// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('js/*.js', ['lint', 'scripts']);
    gulp.watch('scss/*.scss', ['sass']);
});

// Default Task
gulp.task('default', ['lint', 'scripts', 'css','html']);