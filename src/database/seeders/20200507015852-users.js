const bcrypt = require('bcryptjs')
const uuidv4 = require('uuid/v4')

module.exports = {
  up: queryInterface => queryInterface.bulkInsert('Users', [{
    id: uuidv4(),
    name: 'John Doe',
    email: 'email@email.com',
    password: bcrypt.hashSync('123456', 10),
    gender: 'male',
    active: false,
    created_at: new Date(),
    updated_at: new Date(),
  }], {}),

  down: queryInterface => queryInterface.bulkDelete('Users', null, {}),
}
