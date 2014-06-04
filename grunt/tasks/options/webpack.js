
module.exports = {
  dev: {
    context: './src',
    entry: { 
      index: './index.js' 
    },
    resolve: {
      modulesDirectories: ['../node_modules', '../bower_components', './vendor'],
    },
    output: {
      path: '.tmp/',
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