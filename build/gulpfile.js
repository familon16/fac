/**
 * Builder of Tas.js
 * (c) 2017 Owen Luke
 * https://github.com/tasjs/tas
 * Released under the MIT License.
 */

(function(){arguments[0](
	require('gulp'),
	require("gulp-webpack"),
	require('gulp-uglify'),
	require("./webpack.config.js"),
	require("./webpack.min.config.js"),
	require('./wrap'),
	require('./clean')
)})

(function(gulp, webpack, uglify, webpackConfig, webpackMinConfig, wrap, clean){

	gulp.task("webpack", function(){
		var stream = gulp.src('../main.js')
			.pipe(webpack(webpackConfig))
			.pipe(wrap())
			.pipe(clean())
			.pipe(gulp.dest('../dist'))
		;
		return stream;
	});

	gulp.task("uglify", ["webpack"], function(){
		var stream = gulp.src('../main.js')
			.pipe(webpack(webpackMinConfig))
			.pipe(uglify())
			.pipe(wrap())
			.pipe(gulp.dest('../dist'))
		;
		return stream;
	});

	gulp.task("default", ["webpack", "uglify"]);
});
