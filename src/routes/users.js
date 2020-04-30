const { Router } = require('express')

const wrapAction = require('../utils/helpers/wrapAction')
const { findOne: findOneController } = require('../controllers/users')
const validator = require('../middlewares/validator')
const { findOne: findOneSchema } = require('../middlewares/validator/schemas/users')

const router = Router()

router.get(
  '/users',
  validator(findOneSchema),
  wrapAction(findOneController)
)

module.exports = router
