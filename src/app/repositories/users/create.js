const { User } = require('../../models')
const baseRepository = require('../base')

const create = async (values) => {
  const attributes = [
    'name',
    'email',
    'created_at',
  ]

  return baseRepository.create(User, attributes, values)
}

module.exports = create
