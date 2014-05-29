/**
 * Build Swig templates
 * https://github.com/rtgibbons/grunt-swig
 */

module.exports = {
  dev: {
    init: {
      autoescape: true,
      cache: false,
      locals: {
        get_page_title: function (append) { 
          // var title = globals.page_title;
          var title = 'Page Title';
          if (append !== undefined) {
            return title + ' | ' + append;
          } else {
            return title;
          }
        },
        get_partial_path: function(path) {
          var src = require('grunt').config.get('app_files').swig.src;
          return src + '/partials/' + path + '/partial.html'
        }
      }
    },
    expand: true,
    dot: true,
    cwd: '<%= source_dir %>',
    src: ['**/*.swig', '!**/vendor/**/*'],
    dest: '<%= source_dir %>',
    generateSitemap: false,
    generateRobotstxt: false
  }
};