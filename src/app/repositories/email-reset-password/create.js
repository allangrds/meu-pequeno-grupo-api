const { EmailResetPassword } = require('../../models')
const baseRepository = require('../base')

const create = async (values, transaction) => {
  const attributes = [
    'token',
  ]

  return baseRepository.create(
    EmailResetPassword,
    attributes,
    values,
    transaction
  )
}

module.exports = create
