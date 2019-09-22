module.exports = function(source) {
  console.log('this is xLoader', source)
  const m = Math.random() * 1000 >> 0
  return '\n' + source + `\nconsole.log(\'this is xLoader\');\n export const y${m} = 11;`
}