const comb = require("../../utils/combination")
const fib = require("../../utils/fibonacci")
const rev = require("../../utils/reverse")
const valid = require("../../validator/others")
const response = require("../../helpers/response")
const validator = require("validator")

module.exports = {
  combination: async (req, res) => {
    const { status, message, passed } = await valid.combination(req.body)
    if (!status) {
      res.status(404).send(response(status, message))
    }
    else {
      const { n, r } = passed
      try {
        res.status(200).send(response(status, message, {
          input: { ...req.body },
          result: comb(n, r)
        }))
      }
      catch (e) {
        res.status(500).send(response(false, e.message))
      }
    }
  },
  fibonacci: async (req, res) => {
    const { status, message, passed } = await valid.fibonacci(req.body)
    if (!status) {
      res.status(404).send(response(status, message))
    }
    else {
      const { n } = passed
      try {
        res.status(200).send(response(status, message, {
          input: { ...req.body },
          result: fib(n)
        }))
      }
      catch (e) {
        res.status(500).send(response(false, e.message))
      }
    }
  },
  reverse: async (req, res) => {
    const { character } = req.body
    const noTrimChar = validator.trim(character)
    if (validator.isEmpty(noTrimChar)) {
      res.status(404).send(response(false, "Form need to be filled"))
    } else {
      try {
        res.status(200).send(response(true, "Reverse Success", {
          input: { ...req.body },
          result: rev(noTrimChar)
        }))
      }
      catch (e) {
        res.status(500).send(response(false, e.message))
      }
    }
  }
}