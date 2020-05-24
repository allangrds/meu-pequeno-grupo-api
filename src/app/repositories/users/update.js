const { User } = require('../../models')
const baseRepository = require('../base')

const update = (values, id) => {
  const where = {
    id,
  }

  return baseRepository.update(User, values, where)
}

module.exports = update
