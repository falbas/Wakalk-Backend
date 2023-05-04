require('dotenv').config()
const express = require('express')
const cors = require('cors')
const db = require('./app/models')

const app = express()
const port = process.env.PORT || 8000

const corsOption = {
  origin: '*',
}

app.use(cors(corsOption))
app.use(express.json())

const mongooseConfig = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}

db.mongoose
  .connect(db.url, mongooseConfig)
  .then(() => console.log('database connected'))
  .catch((err) => {
    console.log(`connection failed ${err.message}`)
    process.exit
  })

require('./app/routes/product.routes')(app)
require('./app/routes/transaction.routes')(app)

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})
