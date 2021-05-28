require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
})
// Express
const express = require('express');
const app = express();
const fileUpload = require('express-fileupload')
const transaksiRoutes = require('./routes/transaksiRoutes.js')
const barangRoutes = require('./routes/barangRoutes.js')

//Set body parser for HTTP post operation
app.use(express.json()); // support json encoded bodies
app.use(express.urlencoded({
  extended: false
})); // support encoded bodies

app.use(fileUpload());
//set static assets to public directory
// app.use(express.static('public'));

app.use('/transaksi', transaksiRoutes) // if accessing localhost:3000/transaksi/* we will go to transaksiRoutes
app.use('/barang', barangRoutes)

app.listen(3000, () => console.log("server running on http://localhost:3000"))
