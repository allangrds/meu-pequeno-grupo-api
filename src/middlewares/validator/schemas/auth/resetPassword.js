const Joi = require('@hapi/joi')

const schema = Joi.object({
  body: Joi.object({
    password: Joi
      .string()
      .required(),
  }),
})

module.exports = schema
