<% _.each(items, function(item) {  %>
require('<%= item %>');
<% }) %>

console.log('Init @@__SOURCE_FILENAME__');