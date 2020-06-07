const { Router } = require('express')

const wrapAction = require('../utils/helpers/wrapAction')
const {
  create: createController,
  update: updateController,
} = require('../app/controllers/smallGroups')
const authMiddleware = require('../middlewares/auth')

const router = Router()

router.post(
  '/small-groups',
  wrapAction(authMiddleware),
  wrapAction(createController)
)

router.patch(
  '/small-groups/:id',
  wrapAction(authMiddleware),
  wrapAction(updateController)
)

module.exports = router
