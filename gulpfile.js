var gulp = require('gulp');
// var contentIncluder = require('gulp-content-includer');
// var rename = require('gulp-rename');
var browserSync = require('browser-sync').create();
var nodemon = require('gulp-nodemon');
gulp.task('concat',function() {
	gulp.src("./tpl/*.html")
		.pipe(contentIncluder({
			includerReg:/<!\-\-include\s+virtual\="([^"]+)"\s*\-\->/g
		}))
		.pipe(gulp.dest('./'));
});

gulp.task('server',function(){
    nodemon({
        script:'app.js',
        ignore:["gulpfile.js","node_mondules/"],
        env:{
            'NODE_ENV':'development'
        }
    }).on('start',function(){
        browserSync.init({
            proxy:'http://localhost:3000',
            files:["public/**/*.*","views/**","views/**/*.*","routes/**"],
            port:8080
        },function(){
            console.log('browser refreshed');
        });
    });
});
