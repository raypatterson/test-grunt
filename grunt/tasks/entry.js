module.exports = function(grunt) {

  console.log('Loaded : entry.js');

  grunt.registerMultiTask('entry', 'Prepare entry points', function() {

    var data = this.data.js;
    var arr = grunt.file.expand(data.match);
    var entries = [];

    grunt.util._.map(arr, function( val , key ) {
      key = val.substring(val.lastIndexOf(data.cwd) + data.cwd.length, val.lastIndexOf(data.ext) - 1);
      entries.push(key); 
    });

    var files = grunt.file.expand(data.watch);

    grunt.util._.each(files, function(file) {
      grunt.util._.each(entries, function(entry) {
        grunt.file.copy(file, data.cwd + '/.tmp/' + entry);
      });
    });

  });

};