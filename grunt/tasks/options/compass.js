/**
 * Compass configuration.
 */
module.exports = {
  dest: '<%= build_dir %>/assets/<%= pkg.name %>-<%= pkg.version %>.css',
  output: '<%= build_dir %>/assets/<%= app_files.sass.specify %>.css',

  compile: {
    options: {
      sassDir: '.',
      specify: '<%= app_files.sass.specify %>.scss',
      cssDir: '<%= build_dir %>/assets/',
      imagesDir: 'assets/img/',
      importPath: '<%= app_files.sass.import_path %>',
      environment: 'production',
      raw: "preferred_syntax = :scss\n"
    }
  },

  build: {
    options: {
      outputStyle: 'compact',
      sassDir: '.',
      specify: '<%= app_files.sass.specify %>.scss',
      cssDir: '<%= build_dir %>/assets/',
      imagesDir: 'assets/img/',
      importPath: '<%= app_files.sass.import_path %>',
      environment: 'development',
      raw: "preferred_syntax = :scss\n"
    },
    dist: {},
    server: {
      options: {
        debugInfo: true
      }
    }
  }
};