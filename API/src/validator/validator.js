const validator = require("validator")

module.exports = {
  throw: (status, message = "", passed = {}) => ({
    status,
    message,
    passed,
  }),
  safeString: (string) => validator.trim(string) || "",
};
