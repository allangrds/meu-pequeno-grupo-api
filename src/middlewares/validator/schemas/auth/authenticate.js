const Joi = require('@hapi/joi')

const schema = Joi.object({
  body: Joi.object({
    email: Joi
      .string()
      .email()
      .required(),
    password: Joi
      .string()
      .required(),
  }),
})

module.exports = schema
