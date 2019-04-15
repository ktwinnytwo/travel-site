var gulp = require('gulp'),
	watch = require('gulp-watch'),
	postcss = require('gulp-postcss'),
	autoprefixer = require('autoprefixer'),
	cssimport = require('postcss-import'),
	cssvars = require('postcss-simple-vars'),
	nested = require('postcss-nested');


//Old way Before Gulp 4

// gulp.task('default', function(done) {
// 	console.log("Hurray, you created a default gulp task");
// 	done();
// });

// gulp.task('html', function(task) {
// 	console.log("Imagine something useful being done");
// 	task();
// })

// function html() {
// 	console.log("Imagine something useful being done");
// };

// Old gulp watch
	/*gulp.task('watch', function() {

		watch('./app/index.html', function() {
			gulp.start('html');
		})
	})

*/



// New way of running Gulp 4

function a(done) {
	//execute
	console.log("Running function a");
	done();
}

function b(done) {
	//execute
	console.log("Running function b");
	done();
}


gulp.task('default', a);

// Running tasks in Series (Has an Order)
gulp.task('series', gulp.series(a, b));
	//will run a and then run b

// Running tasks in Parallel (At the same time)
gulp.task('parallel', gulp.parallel(a, b));
	//will start a and b together



// New Gulp watch with Gulp 4

htmlWatch = "./app/index.html";
cssWatch = "./app/assets/styles/**/*.css"

//Method 1

function watch_files() {
	//Call file location to watch, call function to run while watching
	gulp.watch(htmlWatch, function html(done) {
		console.log("Imagine something useful being done");
		done();
	});
}

gulp.task("watch", watch_files);

//Method 2


function html(done) {
	//execute
	console.log("Imagine something useful being done");
	done();
}
function css() {
	//Taking gulp and pointing it towards our main CSS file
	return gulp.src('./app/assets/styles/styles.css')
	//new pipe - PostCSS filter
		.pipe(postcss([cssimport, nested, cssvars, autoprefixer]))
	//piping it through and saving it in a new destination folder
		.pipe(gulp.dest('./app/temp/styles'));


}

function watch_files() {
	//Call file location to watch, call function to run while watching
	gulp.watch(htmlWatch, html);
	//Add another gulp.watch for it to watch multiple files
	gulp.watch(cssWatch, css);
}

gulp.task("watch", watch_files);



// Old gulp watch before Gulp 4
	/*gulp.task('watch', function() {

		watch('./app/index.html', function() {
			gulp.start('html');
		})
	})

*/
