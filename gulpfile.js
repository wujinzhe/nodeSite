/*
1.gulp.watch(glob [, opts], tasks) 或 gulp.watch(glob [, opts, cb])
监测某些文件的变化，并且触发相对应得任务（事件）

2.gulp.dest(path[, options])
能被 pipe 进来，并且将会写文件。并且重新输出（emits）所有数据，
因此你可以将它 pipe 到多个文件夹。如果某文件夹不存在，将会自动创建它。
(将前面得到的流重新保存在某个文件夹的文件中)

3.gulp.src(globs[, options])
将匹配到的文件转换成流的形式在pipe中传递
*/


var gulp = require('gulp'),
// var contentIncluder = require('gulp-content-includer');
// var rename = require('gulp-rename');
    browserSync = require('browser-sync').create(),
    nodemon = require('gulp-nodemon'),
    less = require('gulp-less'),
	concat = require('gulp-concat'),
	rename = require('gulp-rename'),
	minifyCss = require('gulp-minify-css');


 //compile less file to destination folder
gulp.task('compileLess',function(){
	gulp.src('bower_components/uikit/less/uikit.less')
		.pipe(less())
		.pipe(gulp.dest('public/src/uikit/css/'))
		.pipe(rename({ suffix: '.min' }))
	    .pipe(minifyCss())
	    .pipe(gulp.dest('public/src/uikit/css/'));
});


//watch less file in core folder
gulp.task('watchUikitLessChange',function(){
	gulp.watch('bower_components/uikit/less/core/*.less',['compileLess']);
});

//压缩，合并UIkit中的css文件
gulp.task('uikitCssMinify',function(){
	return gulp.src('bower_components/uikit/core/*.css')
		.pipe(concat('uikit.css'))
    	.pipe(gulp.dest('public/src/uikit/css'))
	    .pipe(rename({ suffix: '.min' }))
	    .pipe(minifyCss())
	    .pipe(gulp.dest('public/src/uikit/css'));
});

//监听core中的css是否改变，是则合并里面的全部的css文件
gulp.task('watchUikitCssChange',function(){
	gulp.watch('bower_components/uikit/core/*.css',['uikitCoreCssMinify']);
});
//监听编译
gulp.task('watchUikitCssCompile',['watchUikitLessChange','watchUikitCssChange']);
//直接编译
gulp.task('uikitCssCompile',['compileLess']);


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
