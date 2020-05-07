const BaseError = require('./baseError')

class UnauthorizedError extends BaseError {
  constructor () {
    super('unauthorized', 'Access denied')
  }
}

module.exports = UnauthorizedError
