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

module.exports = {
  create,
  findOne,
  update,
}
