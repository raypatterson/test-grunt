var $ = require('jquery');

module.exports = function() {
  $(function() {
    console.log('Init Module B', $('.component-b'));
  });
}();