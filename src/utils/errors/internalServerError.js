const BaseError = require('./baseError')

class InternalServerError extends BaseError {
  constructor () {
    super('somethingBroke', 'Server was unable to process this request')
  }
}

module.exports = InternalServerError
