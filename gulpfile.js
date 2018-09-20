//Requis
var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var notify = require("gulp-notify");
var browserSync = require('browser-sync').create();

//Variable de chemins
var src = 'src/';
var srcLibs = 'src/assets/js/libs/'; //Dossier de travail

//Tache styles
gulp.task('sass', function () {
    return gulp.src(src + 'assets/sass/*.scss')
        .pipe(sass({outputStyle: 'compressed'}))
        .on("error", notify.onError({
            message: 'Error: <%= error.message %>'
        }))
        .pipe(autoprefixer([
            'Android 2.3',
            'Android >= 4',
            'Chrome >= 20',
            'Firefox >= 24',
            'Explorer >= 8',
            'iOS >= 6',
            'Opera >= 12',
            'Safari >= 6']))
        .pipe(gulp.dest(src + 'assets/css/'));
});

gulp.task('css', function () {
    return gulp.src(src + 'assets/css/*.css')
        .pipe(gulp.dest(src + 'assets/css/'));
});

gulp.task('libs', function() {
    return gulp.src([srcLibs+ 'jquery-2.2.4.min.js',
                    srcLibs + 'jquery.cookie.js',
                    srcLibs + 'jquery.validate.min.js',
                    srcLibs + 'messages_fr.js',
                    srcLibs + 'ofi.min.js',
                    srcLibs + 'flickity.pkgd.min.js'])
        .pipe(concat('vendors.js'))
        .pipe(gulp.dest(src + 'assets/js/'));
});

gulp.task('default', ['sass', 'css', 'libs']);

gulp.task('watch', function() {
    browserSync.init({
        proxy: "http://lff.loc/"
    });
    gulp.watch([src + 'assets/**/*', src + '**/*.php'], ["sass"]).on("change", browserSync.reload);
});