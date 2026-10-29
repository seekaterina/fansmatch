const HtmlWebpackPlugin = require('html-webpack-plugin')

function createPages(template, filename, chunks) {
  return new HtmlWebpackPlugin({
    template: template,
    filename: filename,
    chunks: chunks
  })
}

const htmlPages = [
  createPages('./docs/index.html', './index.html', ['index', 'plug']),
  createPages('./docs/pages/about.html', './about.html', ['index', 'data', 'shaker']),
  createPages('./docs/pages/poster.html', './poster.html', ['index', 'plug']),
  createPages('./docs/pages/random.html', './random.html', ['index', 'plug']),
  createPages('./docs/pages/error.html', './error.html', ['index']),
]

module.exports = htmlPages
