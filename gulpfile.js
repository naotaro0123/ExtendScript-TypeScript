const gulp = require('gulp');
const rename = require("gulp-rename"); 
const plumber = require("gulp-plumber");
const typescript = require('gulp-typescript');
const tsConfig = require('./tsconfig.json');


gulp.task('ts', function() {
    return gulp.src([
        './jsx/*.ts',
        '!./node_modules/**'
    ])
    .pipe(plumber())
    .pipe(typescript(tsConfig.compilerOptions))
    .pipe(rename({
        extname: '.jsx'
    }))
    .pipe(gulp.dest('./jsx/'));
});