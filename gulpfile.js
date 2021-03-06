const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');

function copyFiles() {
  return gulp.src('./src/**/*.css')
    .pipe(gulp.dest('./'));
}

function style() {
  return gulp.src('./src/style/scss/style.sass')
    .pipe(sass({ outputStyle: 'expanded' }))
    .pipe(autoprefixer({
      cascade: false
    }))
    .pipe(cleanCSS())
    .pipe(gulp.dest('./style/css'));
}

async function build() {
  await copyFiles();
  await style();
}

exports.copyFiles = copyFiles;
exports.style = style;
exports.build = build;
exports.default = build;