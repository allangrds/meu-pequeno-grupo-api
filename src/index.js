require('dotenv').config()

const express = require('express')
const helmet = require('helmet')
const timeout = require('connect-timeout')

const routes = require('./routes')
const errorHandler = require('./middlewares/errorHandler')
const rateLimit = require('./config/rateLimit')

const haltOnTimedout = (req, res, next) => {
  if (!req.timedout) next()
}

const app = express()
const port = process.env.API_PORT

const limiter = rateLimit()

app.use(timeout('3s'))
app.set('trust proxy', 1)
app.use(helmet())
app.disable('x-powered-by')
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(limiter)
app.use(haltOnTimedout)
app.use(routes)
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
