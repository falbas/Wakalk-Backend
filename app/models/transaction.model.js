module.exports = (mongoose) => {
  const schema = mongoose.Schema(
    {
      total: Number,
      products: [{}],
    },
    {
      timestamps: true,
    }
  )

  schema.method('toJSON', function () {
    const { __v, _id, ...object } = this.toObject()
    return { id: _id, ...object }
  })

  return mongoose.model('transaction', schema)
}
