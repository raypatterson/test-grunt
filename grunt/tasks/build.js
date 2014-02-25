module.exports = function(grunt) {

  console.log('Loaded : build.js');

  /**
   * The `build` task gets your app ready to run for development and testing.
   */
  grunt.registerTask('build', [
    'clean', 'jshint', 'coffeelint', 'coffee',
    'browserify:build',
    'compass:build', 'concat:build_css', 'autoprefixer',
    'copy:build_app_assets',
    'index:build'
  // ,
  // 'karmaconfig', 'karma:continuous'
  ]);

};