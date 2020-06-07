const { Router } = require('express')

const wrapAction = require('../utils/helpers/wrapAction')
const {
  create: createController,
  activateAccount: activateAccountController,
  sendConfirmationEmail: sendConfirmationEmailController,
} = require('../app/controllers/users')
const validator = require('../middlewares/validator')
const {
  create: createSchema,
  emailConfirmation: emailConfirmationSchema,
} = require('../middlewares/validator/schemas/users')
const validateEmailConfirmationToken = require('../middlewares/validateEmailConfirmationToken')

const router = Router()

router.post(
  '/users',
  validator(createSchema),
  wrapAction(createController)
)

router.post(
  '/users/email-confirmation/:token',
  wrapAction(validateEmailConfirmationToken),
  wrapAction(activateAccountController)
)

router.post(
  '/users/email-confirmation/',
  validator(emailConfirmationSchema),
  wrapAction(sendConfirmationEmailController)
)

module.exports = router
