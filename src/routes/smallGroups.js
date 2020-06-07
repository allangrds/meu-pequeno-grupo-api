const { Router } = require('express')

const wrapAction = require('../utils/helpers/wrapAction')
const {
  create: createController,
} = require('../app/controllers/smallGroups')
const authMiddleware = require('../middlewares/auth')

const router = Router()

router.post(
  '/small-groups',
  wrapAction(authMiddleware),
  wrapAction(createController)
)

module.exports = router
