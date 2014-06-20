module.exports = {
  options: {
    flatten: true,
    engine: 'swig',
    site: './src/',
    data: ['./src/project/pages/**/*.{json,yml}'],
    partials: ['./src/project/assemble/partials/**/*.html', './src/project/assemble/macros/*.html'],
    layoutdir: './src/project/assemble/layouts',
    layoutext: '.html',
    swig: {
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
    }
  },
  site: {
    files: {
      './.tmp/': './src/project/pages/**/*.swig'
    }
  }
}