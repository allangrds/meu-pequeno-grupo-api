const Joi = require('@hapi/joi')

const schema = Joi.object({
  query: Joi.object({
    amount: Joi
      .number()
      .min(1)
      .integer()
      .required(),
  }),
})

module.exports = schema
