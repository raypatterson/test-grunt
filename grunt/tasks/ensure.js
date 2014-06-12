var _ = require('lodash');

module.exports = function(grunt) {

  console.log('Loaded : ensuresjs');

  grunt.registerMultiTask('ensure', 'Configure Ensures', function() {

    var data = this.data;
    var arr = grunt.file.expand(data.match);
    var filenames = [];
    var added;
    var json;
    var resolver;
    var template;
    var contents;

    var addPartials = function(data, arr) {

      added = {};

      resolver = function(item) {

        if (item.partial) {
          if (item.items) {
            (function(items){
              var i = 0;
              var l = items.length;
              for (i; i < l; i++) {
                resolver(items[i]);
              }
            }(item.items));
          }

          if (added[item.partial] !== true) {
            added[item.partial] = true;
            arr.push(item.partial + '/scripts.js');
            arr.push(item.partial + '/styles.scss');
          }
        }
      };

      if (data.items) {
        resolver(data.items[0]);
      }
    }

    _.map(arr, function( val , key ) {

      json = rekuire(val);

      val = val.substring(val.lastIndexOf(data.cwd) + data.cwd.length);
      key = val.substring(0, val.lastIndexOf(data.ext) - 1);

      filenames = json.includes;

      // filenames = [];
      // _.each(json.includes, function(filename) {
      //   filenames.push(filename.indexOf('./') === -1 ? './' + filename : filename);
      // });

      addPartials(json, filenames);

      template = grunt.file.read('./src/.tmp/' + key);

      contents = grunt.template.process(template , { data: { items: filenames }});

      grunt.file.write('./src/.tmp/' + key, contents);

    });

    console.log('filenames', filenames);

    // grunt.config('app_files.webpack.ensure', filenames);

  });

};