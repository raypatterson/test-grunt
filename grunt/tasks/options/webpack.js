
module.exports = {
  dev: {
    context: '.',
    entry: '<%= app_files.webpack.entry %>',
    resolve: {
      modulesDirectories: ['../node_modules', '../bower_components', './vendor'],
    },
    output: {
      path: '<%= build_dir %>',
      filename: '[name].js',
    },
    module: {
      loaders: [
        { 
          test: /\.scss$/, 
          loader: 'style!css!sass?outputStyle=expanded' 
        }, { 
          test: /\.json$/, 
          loader: 'json' 
        }
      ]
    },
    devtool: 'sourcemap',
    debug: true
  }
};