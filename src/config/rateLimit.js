const rateLimit = require('express-rate-limit')

const setRateLimiter = (config = {}) => {
  const {
    timer = 1,
    max = 10,
    message = null,
    statusCode = 429,
  } = config

  return rateLimit({
    windowMs: timer * 60 * 1000,
    max,
    message,
    statusCode,
  })
}

module.exports = setRateLimiter
