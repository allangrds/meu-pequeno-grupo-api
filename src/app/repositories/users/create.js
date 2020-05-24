const { User } = require('../../models')
const baseRepository = require('../base')

const create = async (values, transaction) => {
  const attributes = [
    'id',
    'name',
    'email',
    'created_at',
  ]

  return baseRepository.create(User, attributes, values, transaction)
}

module.exports = create
