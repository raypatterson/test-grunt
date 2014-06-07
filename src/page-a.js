var is_passing = true;

console.log('Touch is ' + (Modernizr.touch ? 'enabled' : 'disabled') + '.');

$ = require('jquery');

$(function() {

  console.log('Document is ready.');

  require('./page-a.scss');

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

      require('./project/swig/partials/' + item.partial + '/scripts.js');
    }
  };

  var includer = function(items) {
    console.log('items:', items);

    if (items !== undefined) {
      var i = 0;
      var l = items.length;
      for (i; i < l; i++) {
        require('./project/pages/' + items[i]);
      }
    }
  };

  console.log('Init page-a');

  var data = require('./page-a.json');

  resolver(data.items[0]);

  includer(data.includes);

});