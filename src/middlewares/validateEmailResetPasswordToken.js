const moment = require('moment')

const UnauthorizedError = require('../utils/errors/unauthorizedError')
const emailResetPasswordRepository = require('../app/repositories/email-reset-password')

const getDifferenceInHours = (originalDate) => {
  const now = moment(new Date())
  const duration = moment.duration(now.diff(originalDate))
  const hours = duration.asHours()

  return hours
}

const validateEmailConfirmationToken = async (req, res, next) => {
  const { token } = req.params

  const {
    updated_at: updatedAt,
  } = await emailResetPasswordRepository.findOne({ token })

  if (!updatedAt) {
    throw new UnauthorizedError()
  }

  const differenceInHouses = getDifferenceInHours(updatedAt)

  if (differenceInHouses > 1) {
    throw new UnauthorizedError()
  }

  return next()
}

module.exports = validateEmailConfirmationToken
