const { SmallGroup } = require('../../models')
const baseRepository = require('../base')

const findOne = (where, attributes) => {
  const defaultAttributes = [
    'id',
    'user_admin_id',
  ]
  const selectedAttributes = attributes || defaultAttributes

  return baseRepository.findOne(SmallGroup, selectedAttributes, where)
}

module.exports = findOne
