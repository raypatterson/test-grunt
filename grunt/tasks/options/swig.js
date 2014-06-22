/**
 * Build Swig templates
 * https://github.com/gustavohenke/grunt-swig2
 */

module.exports = {
  options: {
    autoescape: true,
    cache: false,
    swigOptions: {
      autoescape: true,
      cache: false,
      locals: {
        rootDir: '<%= root_dir %>',
        getPartialPath: function(input) {
          return require('grunt').config.get('app_files.swig.src') + '/partials/' + input + '/partial.html';
        }
      }
    },
    data: {},
    filters: {
      pageTitle: function(input) {
        var title = 'Page Title';
        return input !== undefined ? title + ' | ' + input : title;
      }
    }
  },
  dev: {
    expand: true,
    cwd: './src/project/pages/',
    src: ['**/*.swig'],
    ext: '.html',
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