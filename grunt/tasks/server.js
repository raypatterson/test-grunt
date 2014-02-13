module.exports = function(grunt) {

  console.log('Loaded : server.js');

  /**
   * Run a server wiht livereload
   */
  grunt.registerTask('server', ['build', 'karma:unit', 'connect:livereload', 'delta']);

};