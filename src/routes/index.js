const { Router } = require('express')

const usersRouter = require('./users')

const router = Router()

router.get(
  '/_health_check',
  (req, res) => res.send('I\'m alive!')
)

router.use(usersRouter)

module.exports = router
