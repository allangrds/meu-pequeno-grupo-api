const { EmailConfirmation } = require('../../models')
const baseRepository = require('../base')

const findOne = (where, attributes) => {
  const defaultAttributes = [
    'token',
    'user_id',
    'updated_at',
  ]
  const selectedAttributes = attributes || defaultAttributes

  return baseRepository.findOne(EmailConfirmation, selectedAttributes, where)
}

module.exports = findOne
