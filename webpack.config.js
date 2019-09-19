
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
function resolveLoader(p) {
  return function(loader) {
    return path.resolve(__dirname, p, loader)
  }
}

const resolve = resolveLoader('loader')

module.exports = {
  entry: {
    main: path.resolve(__dirname, 'src/index.js')
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js'
  },
  module: {
    rules: [{
      test: /\.js/,
      enforce: 'pre',
      use: ['babel-loader', {
        loader: resolve('a'),
        options: {
          phase: 'pre a'
        }
      }, {
        loader: resolve('b'),
        options: {
          phase: 'pre b'
        }
      }],
      exclude: /node_modules/
    },
    {
      test: /\.js/,
      enforce: 'post',
      use: ['babel-loader', {
        loader: resolve('a'),
        options: {
          phase: 'post a'
        }
      }, {
        loader: resolve('b'),
        options: {
          phase: 'post b'
        }
      }],
      exclude: /node_modules/
    }, 
    {
      test: /\.js/,
      use: ['babel-loader', {
        loader: resolve('a'),
        options: {
          phase: 'normal a'
        }
      }, {
        loader: resolve('b'),
        options: {
          phase: 'normal b'
        }
      }],
      exclude: /node_modules/
    }
  ]
  },
  devServer: {
    host: '0.0.0.0',
    port: 9090,
    disableHostCheck: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'index.html'),
      filename: `index.html`,
      chunks: ['main'],
      inject: true
    })
  ]
}