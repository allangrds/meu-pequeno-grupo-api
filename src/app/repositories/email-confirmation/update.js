const baseRepository = require('../base')

const update = async (instance, transaction) => {
  const payload = await baseRepository.update(instance, null, null, transaction)

  return payload
}

module.exports = update
