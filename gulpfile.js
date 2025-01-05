const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const sourcemaps = require('gulp-sourcemaps')

function compilaSass(){
    return gulp.src('./source/styles/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            style: 'compressed'
        }).on('error',sass.logError))
        // Se não explicitar um caminho, o mapa será feito inline no próprio arquivo css compilado
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./dist/styles'))
}

exports.default = compilaSass;
exports.watch = function(){
    gulp.watch('./source/styles/*.scss', gulp.parallel(compilaSass))
}