const dbConfig = require('../config/database')
const mongoose = require('mongoose')

module.exports = {
  mongoose,
  url: dbConfig.url,
  product: require('./product.model')(mongoose),
  transaction: require('./transaction.model')(mongoose),
}
