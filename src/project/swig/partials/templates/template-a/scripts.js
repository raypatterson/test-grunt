var $ = require('jquery');

module.exports = function() {
  $(function() {
    console.log('Init Template A', $('.template-a'));
  });
}();