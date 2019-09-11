var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require("gulp-autoprefixer");
var concat = require('gulp-concat');
var cleanCSS = require("gulp-clean-css");
var jsmin = require("gulp-jsmin"); 
var rename = require("gulp-rename");

// tarea de nombre "css"
gulp.task("css", function(){
    gulp
        .src("sass/main.scss")
        .pipe(sass( { outputStyle: "expanded"} ))
        .pipe(autoprefixer(
            {
                // https://github.com/browserslist/browserslist#full-list
                browsers: ['last 2 versions']
            }
        ))
        .pipe(cleanCSS())
        .pipe(rename("style.min.css"))
        .pipe(concat("style.min.css"))
        .pipe(gulp.dest("css/public/"));
});

// tarea de nombre "js"
gulp.task("js", function(){
    gulp
        .src("js/app.js")
        .pipe(jsmin())
        .pipe(rename("app.min.js"))
        .pipe(gulp.dest('js/public/'));
});

/** correr todas las tareas */
gulp.task("default", gulp.parallel("css","js"));
