const jwt = require('jsonwebtoken')

const UnauthorizedError = require('../utils/errors/unauthorizedError')
const { secret } = require('../environment')

const auth = async (req, res, next) => {
  const authHeader = req.headers.authorization

  if (!authHeader) {
    throw new UnauthorizedError()
  }

  const parts = authHeader.split(' ')

  if (!(parts.length === 2)) {
    throw new UnauthorizedError()
  }

  const [scheme, token] = parts

  if (!/^Bearer$/i.test(scheme)) {
    throw new UnauthorizedError()
  }

  jwt.verify(token, secret, (err, decoded) => {
    if (err) {
      throw new UnauthorizedError()
    }

    req.user_id = decoded.id

    return next()
  })
}

module.exports = auth
