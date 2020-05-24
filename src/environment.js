const env = process.env.NODE_ENV
const port = process.env.API_PORT

const getUrl = () => {
  const urls = {
    development: `http://localhost:${port}/`,
  }

  return urls[env]
}

const url = getUrl()

module.exports = {
  url,
}
