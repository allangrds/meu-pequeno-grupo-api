const { Router } = require('express')

const usersRouter = require('./users')
const authRouter = require('./auth')
const smallGroupsRouter = require('./smallGroups')

const router = Router()

router.get(
  '/_health_check',
  (req, res) => res.send('I\'m alive!')
)

router.use(usersRouter)
router.use(authRouter)
router.use(smallGroupsRouter)

module.exports = router
