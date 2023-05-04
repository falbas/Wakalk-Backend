module.exports = (app) => {
  const transaction = require('../controllers/transaction.controller')
  const r = require('express').Router()

  r.post('/', transaction.create)
  r.get('/', transaction.findAll)
  r.get('/:id', transaction.findById)
  r.put('/:id', transaction.update)
  r.delete('/:id', transaction.delete)

  app.use('/transactions', r)
}
