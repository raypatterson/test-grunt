var test_grunt_js = true;

require('./project/common/scripts/test.js')('Module is required.');

console.log('Touch is ' + (Modernizr.touch ? 'enabled' : 'disabled') + '.');

require('jquery')(function() {
  console.log('Document is ready.');
});