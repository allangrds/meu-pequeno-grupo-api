const { omit } = require('ramda')

const smallGroupsRepository = require('../../repositories/small-groups')

const update = async (req, res) => {
  const { id } = req.params

  const savedSmallGroup = await smallGroupsRepository.findOne({
    id,
  })
  const smallGroupExists = savedSmallGroup && savedSmallGroup.user_admin_id

  if (!smallGroupExists) {
    return res.status(404).json({})
  }

  return res.status(200).json(omit(['user_admin_id'], savedSmallGroup.dataValues))
}

module.exports = update
