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

  return mongoose.model('product', schema)
}
