const { Router } = require('express')

const wrapAction = require('../utils/helpers/wrapAction')
const {
  create: createController,
  update: updateController,
  get: getController,
  remove: removeController,
  getAll: getAllController,
  affiliate: affiliateController,
  exit: exitController,
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

router.delete(
  '/small-groups/:id',
  wrapAction(authMiddleware),
  wrapAction(removeController)
)

router.get(
  '/small-groups/:id',
  wrapAction(authMiddleware),
  wrapAction(getController)
)

router.get(
  '/small-groups',
  wrapAction(authMiddleware),
  wrapAction(getAllController)
)

router.post(
  '/small-groups/membership',
  wrapAction(authMiddleware),
  wrapAction(affiliateController)
)

router.delete(
  '/small-groups/membership',
  wrapAction(authMiddleware),
  wrapAction(exitController)
)

module.exports = router
