const { Router } = require('express')

const wrapAction = require('../utils/helpers/wrapAction')
const validator = require('../middlewares/validator')
const {
  authenticate: authenticateSchema,
  sendResetPassword: sendResetPasswordSchema,
  resetPassword: resetPasswordSchema,
} = require('../middlewares/validator/schemas/users')
const {
  authenticate: authenticateController,
  sendResetPassword: sendResetPasswordController,
  resetPassword: resetPasswordController,
} = require('../app/controllers/auth')
const validateEmailResetPasswordToken = require('../middlewares/validateEmailResetPasswordToken')

const router = Router()

router.post(
  '/auth',
  validator(authenticateSchema),
  wrapAction(authenticateController)
)

router.post(
  '/auth/reset',
  validator(sendResetPasswordSchema),
  wrapAction(sendResetPasswordController)
)

router.post(
  '/auth/reset/:token',
  validator(resetPasswordSchema),
  wrapAction(validateEmailResetPasswordToken),
  wrapAction(resetPasswordController)
)

module.exports = router
