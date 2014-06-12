module.exports = function(grunt) {

  console.log('Loaded : webpackconfig.js');

  grunt.registerMultiTask('webpackconfig', 'Configure Webpack', function() {

    // console.log('Configure Webpack');

    var data = this.data;
    var arr = grunt.file.expand(data.match);
    var temp_dir = grunt.config('temp_dir');
    var entry = {};

    grunt.util._.map(arr, function( val , key ) {
      val = val.substring(val.lastIndexOf(data.cwd) + data.cwd.length);
      key = val.substring(0, val.lastIndexOf(data.ext) - 1);
      entry[key] = temp_dir + val;
    });

    // console.log('entry', entry);

    grunt.config('app_files.webpack.entry', entry);

  });

};