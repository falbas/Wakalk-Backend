const db = require('../models')
const Product = db.product

exports.create = (req, res) => {
  const { barcode, name, price, stock } = req.body
  if (!barcode || !name || !price || !stock) {
    res.status(400).send({ message: 'data yang dimasukkan tidak lengkap' })
    return
  }
  Product.create(req.body)
    .then(() =>
      res.send({
        message: 'produk berhasil ditambahkan',
        data: req.body,
      })
    )
    .catch((err) => res.status(500).send({ message: err.message }))
}

exports.findAll = (req, res) => {
  const { barcode, name } = req.query
  if (barcode !== undefined) {
    Product.find({ barcode: { $regex: barcode, $options: 'i' } })
      .then((data) => res.send({ data: data }))
      .catch((err) => res.status(500).send({ message: err.message }))
  } else if (name !== undefined) {
    Product.find({ name: { $regex: name, $options: 'i' } })
      .then((data) => res.send({ data: data }))
      .catch((err) => res.status(500).send({ message: err.message }))
  } else {
    Product.find()
      .then((data) => res.send({ data: data }))
      .catch((err) => res.status(500).send({ message: err.message }))
  }
}

exports.findById = (req, res) => {
  const id = req.params.id

  Product.findById(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({ message: 'produk tidak ditemukan' })
      } else {
        res.send({ data: data })
      }
    })
    .catch((err) => err.status(500).send({ message: err.message }))
}

exports.update = (req, res) => {
  const id = req.params.id

  Product.findByIdAndUpdate(id, req.body)
    .then((data) => {
      if (!data) {
        res.status(404).send({ message: 'produk tidak ditemukan' })
      } else {
        res.send({ message: 'data berhasil diupdate' })
      }
    })
    .catch((err) => err.status(500).send({ message: err.message }))
}

exports.delete = (req, res) => {
  const id = req.params.id

  Product.findByIdAndRemove(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({ message: 'produk tidak ditemukan' })
      } else {
        res.send({ message: 'data berhasil dihapus' })
      }
    })
    .catch((err) => err.status(500).send({ message: err.message }))
}
