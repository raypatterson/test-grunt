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

  var path = 'index.js';
  console.log('path', path);
  
  // var path = __filename;
  // path = path.substring(0, path.lastIndexOf('.'));

  // var styleEntry = '.' + path + '.scss';
  // var dataEntry = '.' + path + '.json';

  // console.log('path', path);
  // console.log('styleEntry', styleEntry);
  // console.log('dataEntry', dataEntry);

  require('./index.scss');
  resolver(require('./index.json').items[0]);
});
