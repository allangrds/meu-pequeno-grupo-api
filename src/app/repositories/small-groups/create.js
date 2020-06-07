const { SmallGroup } = require('../../models')
const baseRepository = require('../base')

const create = async (values, transaction) => {
  const attributes = [
    'name',
    'created_at',
  ]

  return baseRepository.create(SmallGroup, attributes, values, transaction)
}

module.exports = create
