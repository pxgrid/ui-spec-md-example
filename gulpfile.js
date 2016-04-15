var gulp     = require( 'gulp' );
var uiSpecMd = require( 'ui-spec-md' );

gulp.task( 'uimd', function () {

  gulp.src( './src/**/*.md' )
      .pipe( uiSpecMd( { srcRoot: __dirname + '/src/' } ) )
      .pipe( gulp.dest('./build/' ) );

  gulp.src( [ './src/**/*.jpg', './src/**/*.png' ] )
      .pipe( gulp.dest( './build/' ) )

} );
