
module.exports = {
  dev: {
    context: './src',
    entry: './main.js',
    resolve: {
      modulesDirectories: ['../node_modules', '../bower_components', './vendor'],
    },
    output: {
      path: '.tmp/',
      filename: 'main.js',
    },
    module: {
      loaders: [
        { 
          test: /\.json$/, 
          loader: 'json' 
        }
      ]
    },
    devtool: 'sourcemap',
    debug: true
  }
};