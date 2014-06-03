var test_grunt_js = true;

require('./project/common/scripts/test.js')('Module is required.');

console.log('Touch is ' + (Modernizr.touch ? 'enabled' : 'disabled') + '.');

$ = require('jquery');

$(function() {
  console.log('Document is ready.');
});

var items = require('./index.json');

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

resolver(items);
