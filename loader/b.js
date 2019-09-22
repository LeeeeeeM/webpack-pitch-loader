const loaderUtils = require('loader-utils')
const path = require('path')

module.exports = function(source) {
  const callback = this.async()
  const options = loaderUtils.getOptions(this)
  // console.log(this.loaders)
  console.log('not pitch b', options && options.phase, options)
  this.loadModule(path.resolve(__dirname, '../src/x.txt'), function(err, txtSource, txtSourceMap) {
    console.log(txtSource, txtSourceMap)
    callback(null, source + txtSource)
  })
}

module.exports.pitch = function() {
  const options = loaderUtils.getOptions(this)
  console.log('pitch b', options && options.phase, options)
}