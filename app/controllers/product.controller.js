const db = require('../models')
const Product = db.product

exports.create = (req, res) => {
  const { barcode, name, price, stock } = req.body
  if (!barcode || !name || !price || !stock) {
    res.status(400).send({ message: 'data yang dimasukkan tidak lengkap' })
    return
  }
  Product.create(req.body)
    .then(() => res.send({ message: 'produk berhasil ditambahkan' }))
    .catch((err) => res.status(500).send({ message: err.message }))
}

exports.findAll = (req, res) => {
  Product.find()
    .then((data) => res.send(data))
    .catch((err) => err.status(500).send({ message: err.message }))
}
