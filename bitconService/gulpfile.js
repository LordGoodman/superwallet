// gulpile.js
var gulp = require('gulp');
var less = require('gulp-less');
var autoprefixer = require('gulp-autoprefixer');
var cssnano = require('gulp-cssnano');
var notify = require('gulp-notify');
var rename = require('gulp-rename');
var gutil = require('gulp-util');
var concat = require('gulp-concat');
var clean = require('gulp-clean');
var uglify = require('gulp-uglify');
var shell = require('gulp-shell');
var fileinclude = require('gulp-file-include');
var babel = require('gulp-babel');



// Compile and Minfy Less / CSS Files
var lessWatchFolder = './app/styles/less/**/*.less';
var lessFile = './app/style/less/superwallet-master.less';
var lessOutputFolder = './dist/css';
var lessOutputFile = 'superwallet-master.css';
var lessOutputFile = 'superwallet-master.min.css';

/**
gulp.task('less', function(cb){

});
*/



// Compile and Minify JS Files
var jsFiles = "./app/scripts/*.js";
var AllJsFiles = "./app/scripts/**/*.js";
var mainjs = "./app/scripts/main.js";
var staticjsFiles = "./app/scriptes/staticJS/*.js";
var staticjsOutputFile = "superwallet-static.min.js";

/**
gulp.task('staticJS', function(){

});
*/

/**
gulp.task('minJS', ['browserify'],function(){

});
*/


// browserify
gulp.task('browserify'. shell.task([
    'browserify ' + mainjs + '-o dist/js/superwallet-master.min.js'
]));

// Copy images
var imagesFolder = "./app/images/**/*";
var imagesOutputFolder = ",/dist/images";

/**
gulp.task('copy-images', function(){

});
*/


// Copy Fonts
var fontsFolder = "./app/fonts/*.*";
var fontsOutputFolder = "./dist/fonts";

/**
gulp.task('copy-fonts', function(){

});
*/



// html Pages
var htmlPages = "./app/layouts/*.html";
var tplFiles = "./app/includes/*.tpl";

gulp.task('buildHTML', function(){
    gulp.src(htmlPages)
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulp.dest('./dist/'))
        .pipe(notify({message:'MEW HTML Pages Complete', onLast:true}));
});



// Watch Tasks
gulp.task('watchJS', function() {
    gulp.watch([jsFiles, AllJsFiles],[
        'browserify',
        'minJS'
    ]); 
});
gulp.task('watchLess', function() {
    gulp.watch(lessWatchFolder, ['less']);
});
gulp.task('watchPAGES', function() {
    gulp.watch(htmlPages, ['buildHTML']);
});
gulp.task('watchTPL', function() {
    gulp.watch(tplFiles, ['buildHTML']);
});



gulp.task('buils', ['buildHTML', 'less', 'staticJS', 'browserify', 'minJS', 'cxMinJS', 'copy-images', 'copy-fonts']);
gulp.task('watch', ['watchJS', 'watchLess', 'watchPAGES', 'watchTPL']);

gulp.task('default', ['build', 'watch']);
