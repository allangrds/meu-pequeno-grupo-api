const database = {
  [process.env.NODE_ENV]: {
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    host: process.env.POSTGRES_HOST,
    dialect: 'postgres',
    operatorsAliases: false,
    dialectOptions: {
      useUTC: true,
    },
    timezone: '-03:00',
    pool: {
      max: 5,
      min: 0,
      idle: 10000,
    },
  },
}

module.exports = database
