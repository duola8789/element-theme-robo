'use strict';

const {series, src, dest, watch} = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cssmin = require('gulp-cssmin');

function compile() {
    return src('./theme/*.scss')
        .pipe(sass.sync())
        .pipe(
            autoprefixer({
                browsers: ['ie > 9', 'last 2 versions'],
                cascade: false
            })
        )
        .pipe(cssmin())
        .pipe(dest('./lib'));
}

function compileRoboUI() {
    return src('./theme/robo-ui/*.scss')
        .pipe(sass.sync())
        .pipe(
            autoprefixer({
                browsers: ['ie > 9', 'last 2 versions'],
                cascade: false
            })
        )
        .pipe(cssmin())
        .pipe(dest('./lib/robo-ui'));
}

function copyfont() {
    return src('./theme/fonts/**')
        .pipe(cssmin())
        .pipe(dest('./lib/fonts'));
}

function watchTheme() {
    watch('./theme/**/*.scss', series(compile, compileRoboUI));
}

exports.build = series(compile, copyfont);
exports.watch = watchTheme;
