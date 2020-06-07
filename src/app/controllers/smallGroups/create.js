const smallGroupsService = require('../../services/small-groups')
const smallGroupsRepository = require('../../repositories/small-groups')
const usersRepository = require('../../repositories/users')
const db = require('../../models/index')

const makeFakePayload = name => ({
  name,
  created_at: new Date(),
})

const create = async (req, res) => {
  const {
    name,
    recurrent_period,
    recurrent_value,
    description,
    contact_email,
    contact_phone,
  } = req.body
  let transaction

  const savedUser = await usersRepository.findOne({ id: req.user.id })

  if (savedUser && savedUser.small_group_id) {
    return res.send(400).json({})
  }

  const savedSmallGroup = await smallGroupsRepository.findOne({
    user_admin_id: req.user.id,
  })
  const smallGroupExists = savedSmallGroup && savedSmallGroup.user_admin_id

  if (smallGroupExists) {
    const fakePayload = makeFakePayload(name)

    return res.status(201).json(fakePayload)
  }

  try {
    transaction = await db.sequelize.transaction()

    const payload = await smallGroupsService.create(
      {
        name,
        recurrent_period,
        recurrent_value,
        description,
        contact_email,
        contact_phone,
        user_admin_id: req.user.id,
      },
      transaction
    )

    await transaction.commit()

    return res.status(201).json(payload)
  } catch (err) {
    await transaction.rollback()

    throw err
  }
}

module.exports = create
