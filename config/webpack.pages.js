const HtmlWebpackPlugin = require('html-webpack-plugin')

function createPages(template, filename, chunks) {
  return new HtmlWebpackPlugin({
    template: template,
    filename: filename,
    chunks: chunks
  })
}

const htmlPages = [
  createPages('./src/index.html', './index.html', ['index']),
  createPages('./src/pages/about.html', './about.html', ['index']),
  createPages('./src/pages/poster.html', './poster.html', ['index']),
  createPages('./src/pages/random.html', './random.html', ['index']),
  createPages('./src/pages/error.hyml', './error.html', ['index']),
]

module.exports = htmlPages
