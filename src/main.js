var $ = require('jquery');
var test = require('./project/common/scripts/test.js');

test('I am a required module.');

var test_grunt_js = true;

$(function() {
  console.log('ready');
  var $body = $('body');
  console.log('> body', $body);
});