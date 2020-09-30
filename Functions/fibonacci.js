function fibonacci(n) {
  let value = 0
  let result = ""
  const numbers = []
  if (n < 1) return "No Input Value"
  numbers.push(value)
  if (n > 1) {
    value++
    numbers.push(value)
  }
  if (n > 2) {
    while (numbers.length < n) {
      value = numbers[numbers.length - 2] + numbers[numbers.length - 1]
      numbers.push(value)
    }
  }
  for (let i = 0; i < numbers.length; i++) {
    if (i > 0) {
      result = result + ','
    }
    result = result + numbers[i]
  }
  // console.log(numbers)
  // console.log(numbers.join(','))
  return result
}

const data = fibonacci(10)
console.log(data)
