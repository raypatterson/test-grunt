var is_passing = true;

console.log('Touch is ' + (Modernizr.touch ? 'enabled' : 'disabled') + '.');

$ = require('jquery');

$(function() {

  console.log('Document is ready.');

  var resolver = function(item) {

    if (item.partial) {
      if (item.items !== undefined) {
        (function(items){
          var i = 0;
          var l = items.length;
          for (i; i < l; i++) {
            resolver(items[i]);
          }
        }(item.items));
      }
      req('./' + item.partial + '/scripts.js');
      req('./' + item.partial + '/styles.scss');
    }
  };

  var includer = function(items) {

    // console.log('items:', items);

    if (items !== undefined) {

      var i = 0;
      var l = items.length;

      for (i; i < l; i++) {

        filepath = items[i];
        context = filepath.substring(0, filepath.indexOf('/'));
        filepath = filepath.substring(filepath.indexOf('/') + 1);

        switch(context) {
          case 'vendor':
            req = require.context('./vendor/', true, /^\.\/.*\.js$/);
            break;
          case 'library':
            req = require.context('./library/', true, /^\.\/.*\.js$/);
            break;
          case 'project':
            req = require.context('./project/', true, /^\.\/.*\.js$/);
            break;
          default:
            throw new Error('Handler for context "' + context + '" must be created for file: ' + filename);
        }
        
        req('./' + filepath);
      }
    }
  };

  require('./page-a.scss');

  var data = require('./page-a.json');

  var req;
  var filepath;
  var context;

  req = require.context('./project/swig/partials/', true, /^\.\/.*\.js|\.scss$/);
  resolver(data.items[0]);
  
  includer(data.includes);

  console.log('Init page-a');

});