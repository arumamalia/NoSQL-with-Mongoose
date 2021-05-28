const mongoose = require('mongoose');

const uri = process.env.MONGO_URI

mongoose
  .connect(uri, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false
})
  .then(() => console.log("mongoose connected"))
  .catch((err) => console.log(err))

const barang = require('./barang')
const transaksi = require('./transaksi')
const pelanggan = require('./pelanggan')
const pemasok = require('./pemasok')


module.exports = {transaksi, barang, pelanggan, pemasok}

