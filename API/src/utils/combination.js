const factorial = (number) => {
  let value = number
  while (number > 1) {
    number--
    value *= number
  }
  return value
}

module.exports = (n, r) => {
  // n = total combination
  // r = combination value
  const numer = factorial(n)
  const denom = factorial(r) * factorial(n - r)
  return numer / denom
}

