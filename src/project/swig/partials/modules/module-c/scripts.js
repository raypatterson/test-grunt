var $ = require('jquery');

module.exports = function() {
  $(function() {
    console.log('Init Module C', $('.component-c'));
  });
}();