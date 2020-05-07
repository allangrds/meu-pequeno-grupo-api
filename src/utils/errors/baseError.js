const { path } = require('ramda')

const errorCodes = require('./errorCodes')

class BaseError extends Error {
  constructor (errorPath, message) {
    super(message)

    this.statusCode = path(errorPath.split('.'), errorCodes)
    this.message = message
  }

  getBody () {
    return {
      message: this.message,
      statusCode: this.statusCode,
    }
  }
}

module.exports = BaseError
