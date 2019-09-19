module.exports = function(source) {
  console.log('not pitch c')
  return source
}

module.exports.pitch = function() {
  console.log('pitch c')
  return true
}