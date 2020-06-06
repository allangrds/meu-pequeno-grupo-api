const { Router } = require('express')

const wrapAction = require('../utils/helpers/wrapAction')
const {
  authenticate: authenticateController,
  sendResetPassword: sendResetPasswordController,
  resetPassword: resetPasswordController,
} = require('../app/controllers/auth')

const router = Router()

router.post(
  '/auth',
  wrapAction(authenticateController)
)

router.post(
  '/auth/reset',
  wrapAction(sendResetPasswordController)
)

router.post(
  '/auth/reset/:token',
  wrapAction(resetPasswordController)
)

module.exports = router
