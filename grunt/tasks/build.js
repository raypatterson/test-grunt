module.exports = function(grunt) {

  console.log('Loaded : build.js');

  /**
   * The `build` task gets your app ready to run for development and testing.
   */
  grunt.registerTask('build', [
    'clean', 
    'swig:dev', 
    'jshint', 'coffeelint', 'coffee',
    'browserifyBower:build',
    'browserify:build',
    'compass:build', 'concat:build_css', 'autoprefixer',
    'copy:build_app_assets',
    'modernizr',
    'index:build'
    // , 'karmaconfig', 'karma:continuous'
  ]);

};