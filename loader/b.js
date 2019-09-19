const loaderUtils = require('loader-utils')

module.exports = function(source) {
  const options = loaderUtils.getOptions(this)
  console.log('not pitch b', options && options.phase, options)
  return source
}

module.exports.pitch = function() {
  const options = loaderUtils.getOptions(this)
  console.log('pitch b', options && options.phase, options)
}