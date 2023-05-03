module.exports = (mongoose) => {
  const schema = mongoose.Schema(
    {
      barcode: String,
      name: String,
      price: Number,
      stock: Number,
    },
    {
      timestamps: true,
    }
  )

  schema.method('toJSON', function () {
    const { __v, _id, ...object } = this.toObject()
    return { id: _id, ...object }
  })

  return mongoose.model('product', schema)
}
