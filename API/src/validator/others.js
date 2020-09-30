const valid = require("validator")
const { throw: throwValidator, safeString } = require("./validator")

const numberRegex = new RegExp(/^[0-9]{1,}$/)

module.exports = {
  combination: async (req) => {
    const total = safeString(req.n)
    const combination = safeString(req.r)

    if (
      valid.isEmpty(total) ||
      valid.isEmpty(combination)
    ) return throwValidator(false, "Form need to be filled")
    if (
      !numberRegex.test(total) ||
      !numberRegex.test(combination)
    ) return throwValidator(false, "Input should be in integer")
    if (parseInt(combination) > parseInt(total)) return throwValidator(false, "Total combination should be more than combination value")

    else return throwValidator(true, "Combination Success", {
      n: total,
      r: combination
    })
  },
  fibonacci: async (req) => {
    const number = safeString(req.n)

    if (
      valid.isEmpty(number)
    ) return throwValidator(false, "Form need to be filled")
    if (
      !numberRegex.test(number)
    ) return throwValidator(false, "Input should be in integer")
    if (parseInt(number) < 1) return throwValidator(false, "Input should be more than zero")

    else return throwValidator(true, "Fibonacci Success", {
      n: number
    })
  }
}