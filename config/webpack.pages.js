const HtmlWebpackPlugin = require('html-webpack-plugin')

function createPages(template, filename, chunks) {
  return new HtmlWebpackPlugin({
    template: template,
    filename: filename,
    chunks: chunks
  })
}

const htmlPages = [
  createPages('./src/index.html', './index.html', ['index', 'plug']),
  createPages('./src/pages/about.html', './about.html', ['index', 'data', 'shaker']),
  createPages('./src/pages/poster.html', './poster.html', ['index', 'plug']),
  createPages('./src/pages/random.html', './random.html', ['index', 'plug']),
  createPages('./src/pages/error.html', './error.html', ['index']),
]

module.exports = htmlPages
