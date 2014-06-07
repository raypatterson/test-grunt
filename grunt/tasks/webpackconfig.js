module.exports = function(grunt) {

  console.log('Loaded : webpackconfig.js');

  grunt.registerMultiTask('webpackconfig', 'Configure Webpack', function() {

    // console.log('Configure Webpack');

    var data = this.data;
    var arr = grunt.file.expand(data.match);
    var entry = {};

    grunt.util._.map(arr, function( val , key ) {
      val = val.substring(val.lastIndexOf(data.cwd) + data.cwd.length);
      key = val.substring(0, val.lastIndexOf(data.ext) - 1);
      entry[key] = './' + val; 
    });

    grunt.config('app_files.webpack.entry', entry);

  });

};