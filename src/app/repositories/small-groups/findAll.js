const { SmallGroup } = require('../../models')
const baseRepository = require('../base')

const findAll = (page, userId) => {
  const attributes = [
    'id',
    'name',
    'recurrent_period',
    'recurrent_value',
    'description',
    'contact_email',
    'contact_phone',
  ]

  return baseRepository.findAll(
    SmallGroup,
    attributes,
    page,
    userId
  )
}

module.exports = findAll
