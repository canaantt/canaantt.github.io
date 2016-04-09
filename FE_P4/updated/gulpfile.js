// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var minify = require('gulp-minifier');

gulp.task('views', function() {
  return gulp.src('views/**/*').pipe(minify({
    minify: true,
    collapseWhitespace: true,
    conservativeCollapse: true,
    minifyJS: true,
    minifyCSS: true,
    getKeptComment: function (content, filePath) {
        var m = content.match(/\/\*![\s\S]*?\*\//img);
        return m && m.join('\n') + '\n' || '';
    }
  })).pipe(gulp.dest('dist'));
});

gulp.task('default');
