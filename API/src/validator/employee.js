const valid = require("validator")
const { throw: throwValidator, safeString } = require("./validator")
const exists = require("../models/employee/existsById")

const phoneNumberRegex = new RegExp("^08([0-9]{10,12})$")
const stringRegex = new RegExp(/[0-9-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/);

module.exports = {
  create: async (req) => {
    const name = safeString(req.name)
    const phone = safeString(req.phone_number)
    const job = safeString(req.job_title)

    if (
      valid.isEmpty(name) ||
      valid.isEmpty(phone) ||
      valid.isEmpty(job)
    ) return throwValidator(false, "Form need to be filled")

    if (name.length <= 3) return throwValidator(false, "Form invalid, name length")
    if (job.length <= 3) return throwValidator(false, "Form invalid, job length")
    if (stringRegex.test(name)) return throwValidator(false, "Form invalid, name")
    if (stringRegex.test(job)) return throwValidator(false, "Form invalid, job")
    if (!phoneNumberRegex.test(phone)) return throwValidator(false, "Form invalid, phone")

    else {
      return throwValidator(true, "New Employee Recorded", {
        name: valid.escape(name),
        phone_number: valid.escape(phone),
        job_title: valid.escape(job)
      })
    }
  },
  update: async (params, body) => {
    const { id } = params
    const name = safeString(body.name)
    const phone = safeString(body.phone_number)
    const job = safeString(body.job_title)

    if (
      valid.isEmpty(name) ||
      valid.isEmpty(phone) ||
      valid.isEmpty(job)
    ) return throwValidator(false, "Form need to be filled")

    if (name.length <= 3) return throwValidator(false, "Form invalid, name length")
    if (job.length <= 3) return throwValidator(false, "Form invalid, job length")
    if (stringRegex.test(name)) return throwValidator(false, "Form invalid, name")
    if (stringRegex.test(job)) return throwValidator(false, "Form invalid, job")
    if (!phoneNumberRegex.test(phone)) return throwValidator(false, "Form invalid, phone")

    else {
      const userExist = await exists({ id: parseInt(id) })
      if (!userExist) {
        return throwValidator(false, `User No.${id} Not Found`)
      }
      else return throwValidator(true, `Employee No.${id} updated`, {
        id: parseInt(id),
        updatedData: {
          name: valid.escape(name),
          phone_number: valid.escape(phone),
          job_title: valid.escape(job)
        }
      })
    }
  },
  delete: async (params) => {
    const { id } = params
    const userExist = await exists({ id: parseInt(id) })
    if (!userExist) {
      return throwValidator(false, `User No.${id} Not Found`)
    }
    else return throwValidator(true, `Employee No.${id} deleted`, {
      id: parseInt(id)
    })
  }
}