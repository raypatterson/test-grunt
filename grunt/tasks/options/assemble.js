module.exports = {
  options: {
    site: './',
    flatten: true,
    engine: 'swig',
    data: ['./src/*.{json,yml}'],
    partials: ['./src/project/assemble/partials/**/*.html', './src/project/assemble/macros/*.html'],
    layoutdir: './src/project/assemble/layouts',
    layoutext: '.html'
  },
  pages: {
    src: ['./src/*.swig'],
    dest: './.tmp/'
  }
}