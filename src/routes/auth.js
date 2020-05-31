const { Router } = require('express')

const wrapAction = require('../utils/helpers/wrapAction')
const {
  authenticate: authenticateController,
} = require('../app/controllers/auth')

const router = Router()

router.post(
  '/auth',
  wrapAction(authenticateController)
)

module.exports = router
