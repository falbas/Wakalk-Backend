module.exports = (app) => {
  const product = require('../controllers/product.controller')
  const r = require('express').Router()

  r.post('/', product.create)
  r.get('/', product.findAll)

  app.use('/products', r)
}
