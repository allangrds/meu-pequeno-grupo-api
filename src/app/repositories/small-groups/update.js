const { SmallGroup } = require('../../models')
const baseRepository = require('../base')

const update = (values, id) => {
  const where = {
    id,
  }

  return baseRepository.update(SmallGroup, values, where)
}

module.exports = update
