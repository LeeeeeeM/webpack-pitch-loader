const loaderUtils = require('loader-utils')

module.exports = function(source) {
  const options = loaderUtils.getOptions(this)
  console.log('not pitch a', options && options.phase, options)
  console.log(this.loaders.length, this.loaderIndex, '==== pitch')
  return source
}

module.exports.pitch = function() {
  const options = loaderUtils.getOptions(this)
  console.log(this.loaders.length, this.loaderIndex, '==== pitch')
  console.log('pitch a', options && options.phase, options)
}