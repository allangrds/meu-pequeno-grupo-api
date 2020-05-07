const BaseError = require('./baseError')

class BadRequestError extends BaseError {
  constructor (message = 'Request could not be processed') {
    super('badRequest', message)
  }
}

module.exports = BadRequestError
