const db = require('../models')
const Transaction = db.transaction

exports.create = (req, res) => {
  const { total, products } = req.body
  if (!total || products.length === 0) {
    res.status(400).send({ message: 'data yang dimasukkan tidak lengkap' })
    return
  }
  Transaction.create(req.body)
    .then(() =>
      res.send({
        message: 'transaksi berhasil disimpan',
        data: req.body,
      })
    )
    .catch((err) => res.status(500).send({ message: err.message }))
}

exports.findAll = (req, res) => {
  Transaction.find()
    .then((data) => res.send({ data: data }))
    .catch((err) => res.status(500).send({ message: err.message }))
}

exports.findById = (req, res) => {
  const id = req.params.id

  Transaction.findById(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({ message: 'transaksi tidak ditemukan' })
      } else {
        res.send({ data: data })
      }
    })
    .catch((err) => err.status(500).send({ message: err.message }))
}

exports.update = (req, res) => {
  const id = req.params.id

  Transaction.findByIdAndUpdate(id, req.body)
    .then((data) => {
      if (!data) {
        res.status(404).send({ message: 'transaksi tidak ditemukan' })
      } else {
        res.send({ message: 'data berhasil diupdate' })
      }
    })
    .catch((err) => err.status(500).send({ message: err.message }))
}

exports.delete = (req, res) => {
  const id = req.params.id

  Transaction.findByIdAndRemove(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({ message: 'transaksi tidak ditemukan' })
      } else {
        res.send({ message: 'data berhasil dihapus' })
      }
    })
    .catch((err) => err.status(500).send({ message: err.message }))
}
