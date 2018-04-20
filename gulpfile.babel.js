const gulp 				= require('gulp'),
			postcss 		= require('gulp-postcss'),
			babel 			= require('gulp-babel'),
			imagemin		= require('gulp-imagemin'),
			del 				= require('del'),
			browserify 	= require('browserify'),
			htmlreplace = require('gulp-html-replace');

// Plugins
const cssnext 		= require('postcss-cssnext'),
			css_import 	= require('postcss-import'),
			cssnano 		= require('cssnano'),
			uglify			= require('gulp-uglify'),
			cache 			= require('gulp-cache'),
			runSequence = require('run-sequence'),
			buffer 			= require('vinyl-buffer'),
			source 			= require('vinyl-source-stream'),
			babelify		= require('babelify'),
			htmlmin			= require('gulp-htmlmin'),
			rename 			= require("gulp-rename"),
			urlAdjuster = require('gulp-css-url-adjuster');

// HTML
gulp.task('html', function() {
	return gulp.src('./src/*.html')
		.pipe(htmlreplace({
				'css': 'styles.min.css',
				'js': 'bundle.min.js'
		}))
		.pipe(htmlmin({collapseWhitespace: true}))
		.pipe(gulp.dest('./dist'))
});

// CSS
gulp.task('css', () => {
	const config = (file) => ({
		plugins: [
			require('postcss-import')({ root: './src/css/main.css' })
		]
	});
	var processors = [
		cssnext({
			browsers: 'last 2 versions',
			warnForDuplicates: false
		}),
		cssnano
	];
	return gulp.src('./src/css/main.css')
		.pipe(postcss(config))
		.pipe( postcss(processors) )
		.pipe(urlAdjuster({
			replace:  ['../../',''],
		}))
		.pipe( rename('styles.min.css'))
		.pipe( gulp.dest('./dist/') )
});

// Scripts
gulp.task('scripts', function () {
	var bundler = browserify('./src/js/app.js');
	bundler.transform(babelify);

	bundler.bundle()
		.on('error', function (err) { console.error(err); })
		.pipe(source('app.js'))
		.pipe(buffer())
		.pipe(uglify())
		.pipe( rename('bundle.min.js'))
		.pipe(gulp.dest('./dist'));
});

// Images
gulp.task('images', function(){
  return gulp.src('./src/img/**/*.+(png|jpg|jpeg|gif|svg)')
  // Caching images that ran through imagemin
		.pipe(cache(imagemin({
				interlaced: true
			})))
		.pipe(gulp.dest('./dist/img'))
});

// Fonts
gulp.task('fonts', function() {
  return gulp.src('./src/fonts/**/*')
  	.pipe(gulp.dest('./dist/fonts'))
})

// Assets
gulp.task('assets', function() {
  return gulp.src('./src/assets/*')
  	.pipe(gulp.dest('./dist/assets'))
})

// Assets
gulp.task('favicon', function() {
  return gulp.src('./src/favicon.ico')
  	.pipe(gulp.dest('./dist/'))
})

// Clean Dist
gulp.task('clean:dist', function() {
  return del.sync('./dist');
})

// Gulp Default
gulp.task('default', function() {
	gulp.watch('./src/js/*.js', ['scripts']);
	gulp.watch('./src/css/**/*.css', ['css']);
	gulp.watch('./src/*.html', ['html']);
});

// Build Task
gulp.task('build', (callback) => {
	runSequence('clean:dist',
		['html','css', 'scripts', 'images', 'assets','fonts', 'favicon'],
	callback
	)
});
