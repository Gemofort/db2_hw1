const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

function copyFiles() {
  return gulp.src('./src/**/*')
    .pipe(gulp.dest('./dir'));
}

function style() {
  return gulp.src('./src/style/scss/style.sass')
    .pipe(sass({ outputStyle: 'expanded' }))
    .pipe(autoprefixer({
      cascade: false
    }))
    .pipe(gulp.dest('./dir/style/css'));
}

exports.copyFiles = copyFiles;
exports.style = style;