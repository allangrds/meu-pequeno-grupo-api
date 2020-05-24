const { Router } = require('express')

const wrapAction = require('../utils/helpers/wrapAction')
const {
  create: createController,
  activateAccount: activateAccountController,
} = require('../app/controllers/users')
const validator = require('../middlewares/validator')
const { create: createSchema } = require('../middlewares/validator/schemas/users')
const validateEmailConfirmationToken = require('../middlewares/validateEmailConfirmationToken')

const router = Router()

router.post(
  '/users',
  validator(createSchema),
  wrapAction(createController)
)

router.get(
  '/users/email_confirmation/:token',
  wrapAction(validateEmailConfirmationToken),
  wrapAction(activateAccountController)
)

module.exports = router
