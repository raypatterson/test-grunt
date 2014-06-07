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
    }
  };

  var includer = function(items) {
    console.log('items:', items);

    if (items !== undefined) {
      var i = 0;
      var l = items.length;
      for (i; i < l; i++) {
        console.log('./' + items[i]);
        req('./' + items[i]);
      }
    }
  };


  require('./page-a.scss');

  var data = require('./page-a.json');

  var req;

  req = require.context('./project/swig/partials/', true, /^\.\/.*\.js$/);
  resolver(data.items[0]);

  console.log('Init page-a');

  req = require.context('./vendor/', true, /^\.\/.*\.js$/);
  includer(data.includes.vendor);

  req = require.context('./library/', true, /^\.\/.*\.js$/);
  includer(data.includes.library);

  req = require.context('./project/', true, /^\.\/.*\.js$/);
  console.log('data.includes.project', data.includes.project);
  includer(data.includes.project);

});