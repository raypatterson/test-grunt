var $ = require('jquery');

module.exports = function() {
  $(function() {
    console.log('Init Module A', $('.component-a'));
  });
}();