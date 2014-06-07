var is_passing = true;

console.log('Touch is ' + (Modernizr.touch ? 'enabled' : 'disabled') + '.');

$ = require('jquery');

$(function() {

  console.log('Document is ready.');

  var resolver = function(item) {

    if (item.partial) {
      if (item.items !== undefined && item.items.length !== 0) {
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

  console.log('Page Filename:', '@@__SOURCE_FILENAME__');

  require('./@@__SOURCE_FILENAME__.scss');
  resolver(require('./@@__SOURCE_FILENAME__.json').items[0]);

});