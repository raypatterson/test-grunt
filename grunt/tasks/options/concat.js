/**
 * `grunt concat` concatenates multiple source files into a single file.
 */
module.exports = {
  /**
   * The `build_css` target concatenates compiled CSS and vendor CSS
   * together.
   */
  build_css: {
    src: [
          // '<%= vendor_files.css %>'
          '<%= compass.output %>'
        ],
    dest: '<%= compass.dest %>'
  },
  /**
   * The `compile_js` target is the concatenation of our application source
   * code and all specified vendor source code into a single file.
   */
  compile_js: {
    options: {
      banner: '<%= meta.banner %>'
    },
    src: [
          '<%= vendor_files.js %>',
          'module.prefix',
          '<%= build_dir %>/src/**/*.js',
          '<%= html2js.app.dest %>',
          'module.suffix'
        ],
    dest: '<%= compile_dir %>/assets/<%= pkg.name %>-<%= pkg.version %>.js'
  }
};