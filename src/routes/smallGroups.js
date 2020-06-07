const { Router } = require('express')

const wrapAction = require('../utils/helpers/wrapAction')
const {
  create: createController,
  update: updateController,
  get: getController,
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

router.get(
  '/small-groups/:id',
  wrapAction(authMiddleware),
  wrapAction(getController)
)

module.exports = router
