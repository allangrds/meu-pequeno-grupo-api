const usersService = require('../../services/users')
const usersRepository = require('../../repositories/users')

const makeFakePayload = (name, email) => ({
  name,
  email,
  created_at: new Date(),
})

const create = async (req, res) => {
  const {
    name,
    email,
    password,
    gender,
  } = req.body

  const savedUser = await usersRepository.findOne({ email })
  const userExists = savedUser && savedUser.email

  if (userExists) {
    const fakePayload = makeFakePayload(name, email)

    return res.status(201).json(fakePayload)
  }

  const payload = await usersService.create({
    name,
    email,
    password,
    gender,
  })

  return res.status(201).json(payload)
}

module.exports = create
