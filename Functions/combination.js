function factorial(number) {
  let value = number
  while (number > 1){
    number--
    value *= number
  }
  return value
}

function combination(n, r){
  // n = total combination
  // r = combination value
  if (r > n) return "Total value should be more than combination value"
  else {
    const numer = factorial(n)
    const denom = factorial(r) * factorial(n-r)
    return numer / denom
  }
}

const data = combination(10, 2)
console.log(data)
