const { User } = require('../../models')
const baseRepository = require('../base')

const findOne = (where, attributes) => {
  const defaultAttributes = [
    'id',
    'name',
    'email',
    'password',
    'created_at',
  ]
  const selectedAttributes = attributes || defaultAttributes

  return baseRepository.findOne(User, selectedAttributes, where)
}

module.exports = findOne
