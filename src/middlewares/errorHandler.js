const BaseError = require('../utils/errors/baseError')
const InternalServerError = require('../utils/errors/internalServerError')

const normalizeError = (err, req) => {
  if (err instanceof BaseError) {
    return err
  }

  return new InternalServerError(err, req)
}

// eslint-disable-next-line max-params
const errorHandler = (err, req, res, next) => {
  if (res.headersSent) {
    return next(err)
  }

  const error = normalizeError(err, req)

  const { statusCode } = error
  const body = error.getBody()

  return res.status(statusCode).send(body)
}

module.exports = errorHandler
