const paginate = require('../../utils/helpers/paginate')
const getNextPage = require('../../utils/helpers/getNextPage')

const create = async (model, attributes, values, transaction) => { // eslint-disable-line max-params
  const result = await model.create(values, { transaction })
  const filteredResult = {}

  attributes.forEach((attribute) => {
    if (result[attribute]) {
      filteredResult[attribute] = result[attribute]
    }
  })

  return filteredResult
}

const findOne = (model, attributes, where) => {
  const result = model.findOne({
    attributes,
    where,
  })

  return result
}

const update = (model, values, where, transaction) => { // eslint-disable-line max-params
  if (values && where) {
    return model.update({ ...values }, { where, transaction })
  }

  return model.update({}, { transaction })
}

const findAll = async (model, attributes, page) => {
  const reqPage = page || 1

  const where = {}
  const results = await model.findAll(paginate(
    { attributes },
    { page: reqPage },
    where
  ))

  const total = await model.count({ where })
  const currentPage = results.length ? parseInt(reqPage, 10) : 0
  const perPage = results.length || 0
  const nextPage = getNextPage(total, perPage, currentPage)

  return {
    current_page: currentPage,
    next_page: nextPage,
    per_page: perPage,
    total,
    results,
  }
}

module.exports = {
  create,
  findAll,
  findOne,
  update,
}
