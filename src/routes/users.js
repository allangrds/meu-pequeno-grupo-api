const { Router } = require('express')

const wrapAction = require('../utils/helpers/wrapAction')
const { create: createController } = require('../app/controllers/users')
const validator = require('../middlewares/validator')
const { create: createSchema } = require('../middlewares/validator/schemas/users')

const router = Router()

router.post(
  '/users',
  validator(createSchema),
  wrapAction(createController)
)

module.exports = router
