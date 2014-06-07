
module.exports = {
  dev: {
    js: {
      watch: '<%= app_files.entry.js.watch %>',
      match: '<%= app_files.entry.js.match %>',
      cwd: '<%= app_files.entry.js.cwd %>',
      ext: '<%= app_files.entry.js.ext %>'
    }
  }
};