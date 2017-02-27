var gulp = require('gulp');
var contentIncluder = require('gulp-content-includer');
var rename = require('gulp-rename');

gulp.task('concat',function() {
	gulp.src("./tpl/*.html")
		.pipe(contentIncluder({
			includerReg:/<!\-\-include\s+virtual\="([^"]+)"\s*\-\->/g
		}))
		.pipe(gulp.dest('./'));
});
