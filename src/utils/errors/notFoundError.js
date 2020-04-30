const BaseError = require('./baseError')

class NotFoundError extends BaseError {
  constructor () {
    super('notFound', 'Not found')
  }
}

module.exports = NotFoundError
