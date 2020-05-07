const Joi = require('@hapi/joi')

const schema = Joi.object({
  body: Joi.object({
    name: Joi
      .string()
      .min(2)
      .max(50)
      .required(),
    email: Joi
      .string()
      .email()
      .max(50)
      .required(),
    password: Joi
      .string()
      .min(6)
      .max(100)
      .required(),
    gender: Joi
      .string()
      .valid('male', 'female')
      .required(),
  }),
})

module.exports = schema
