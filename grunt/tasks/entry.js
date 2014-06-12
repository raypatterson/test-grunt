var _ = rekuire('lodash');
var fs = rekuire('fs-extra');

module.exports = function(grunt) {

  console.log('Loaded : entry.js');

  grunt.registerMultiTask('entry', 'Prepare entry points', function() {

    var data = this.data;
    var arr = grunt.file.expand(data.match);
    var entries = [];

    _.map(arr, function( val , key ) {
      key = val.substring(val.lastIndexOf(data.cwd) + data.cwd.length, val.lastIndexOf(data.ext) - 1);
      entries.push(key); 
    });

    var files = grunt.file.expand(data.watch);

    var temp_dir = grunt.config('temp_dir');

    fs.removeSync(temp_dir);

    _.each(files, function(file) {
      _.each(entries, function(entry) {
        grunt.file.copy(file, temp_dir + entry + '.js');
      });
    });
  });

};