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
        get_page_title: function(append) {
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
    cwd: './src/project/pages/',
    src: ['**/*.swig'],
    dest: '<%= build_dir %>',
    rename: function(dest, src) {
      dest += '/' + src;
      console.log('src:', src);
      console.log('dest:', dest);
      return dest;
    },
    generateSitemap: false,
    generateRobotstxt: false
  }
};