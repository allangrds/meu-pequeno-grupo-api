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
  },
}

module.exports = database
