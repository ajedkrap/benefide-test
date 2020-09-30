function reverse (string) {
  return string.split("").reverse().join("")
}

function reverse2 (string){
  let result = ""
  for(let i = string.length-1; i >= 0; i--){
    result += string.charAt(i)
  }
  return result
}

const data = reverse2("rizqidezza@yahoo.com")
console.log(data)
