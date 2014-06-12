module.exports = function(grunt) {

  console.log('Loaded : build.js');

  /**
   * The `build` task gets your app ready to run for development and testing.
   */
  grunt.registerTask('build', [
    'clean', 
    'swig:dev', 
    'entry:dev', 
    'ensure:dev', 
    // 'replace:dev', 
    'webpackconfig:dev', 
    'webpack:dev', 
    // 'compass:build', 
    'jshint', 
    // 'coffeelint', 'coffee',
    'concat:build_css', 'autoprefixer',
    'copy:build_app_assets',
    'modernizr'
    // , 'index:build'
    // , 'karmaconfig', 'karma:continuous'
  ]);

};