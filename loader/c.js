module.exports = function(source) {
  console.log('not pitch c')
  return source
}

module.exports.pitch = function(source) {
  console.log('pitch c', source)
  return 'console.log(2);'
}