const request = require('supertest')

const app = require('../../../src/index')

module.exports = request(app)
