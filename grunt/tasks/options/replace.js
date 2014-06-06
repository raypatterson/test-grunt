/**
 * Replace configuration.
 */

module.exports = {
  dist: {
    options: {
      // pass, we use built-in replacements
    },
    files: [
      {
        expand: true, 
        flatten: true, 
        src: ['<% app_files.replace %>'], 
        dest: '<% source_dir %>'
      }
    ]
  }
}