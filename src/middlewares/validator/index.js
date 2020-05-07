const validateData = require('./validateData')
const BadRequestError = require('../../utils/errors/badRequestError')

const validator = schema => (req, res, next) => {
  const errors = validateData(schema, req)

  if (!errors) {
    return next()
  }

  throw new BadRequestError({
    errors: [...errors],
  })
}

module.exports = validator
