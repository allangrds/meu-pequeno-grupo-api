require('dotenv').config()

const express = require('express')
const helmet = require('helmet')
const timeout = require('connect-timeout')
const Sentry = require('@sentry/node')

const routes = require('./routes')
const errorHandler = require('./middlewares/errorHandler')
const rateLimit = require('./config/rateLimit')

const haltOnTimedout = (req, res, next) => {
  if (!req.timedout) next()
}

const app = express()
const port = process.env.API_PORT

const limiter = rateLimit()

Sentry.init({ dsn: process.env.SENTRY_DSN })

app.use(Sentry.Handlers.requestHandler())
app.use(Sentry.Handlers.errorHandler())
app.use(timeout('8s'))
app.set('trust proxy', 1)
app.use(Sentry.Handlers.errorHandler())
app.use(helmet())
app.disable('x-powered-by')
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(Sentry.Handlers.errorHandler())
app.use(limiter)
app.use(Sentry.Handlers.errorHandler())
app.use(haltOnTimedout)
app.use(Sentry.Handlers.errorHandler())
app.use(routes)
app.use(Sentry.Handlers.errorHandler())
app.use(haltOnTimedout)

app.get('*', (req, res) => (
  res.status(404).json({
    status_code: 404,
    message: 'Not found',
  })
))
app.use(errorHandler)
app.use(haltOnTimedout)

app.listen(port, () => (
  console.log(`meu-pequeno-grupo-api app listening on port ${port}!`) // eslint-disable-line no-console
))

module.exports = app
