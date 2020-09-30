// function reverse (string) {
//   return string.split("").reverse().join("")
// }

module.exports = (string) => {
  let result = ""
  for (let i = string.length - 1; i >= 0; i--) {
    result += string.charAt(i)
  }
  return result
}