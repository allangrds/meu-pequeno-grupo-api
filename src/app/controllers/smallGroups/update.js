const smallGroupsRepository = require('../../repositories/small-groups')

const update = async (req, res) => {
  const { id } = req.params
  const {
    name,
    recurrent_period,
    recurrent_value,
    description,
    contact_email,
    contact_phone,
  } = req.body

  const savedSmallGroup = await smallGroupsRepository.findOne({
    id,
    user_admin_id: req.user.id,
  })
  const smallGroupExists = savedSmallGroup && savedSmallGroup.user_admin_id

  if (!smallGroupExists) {
    return res.status(404).json({})
  }

  await smallGroupsRepository.update(
    {
      active: false,
    },
    savedSmallGroup.id
  )

  return res.status(200).json({})
}

module.exports = update
