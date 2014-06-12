<% _.each(items, function(item) {  %>
require('<%= item %>');
<% }) %>