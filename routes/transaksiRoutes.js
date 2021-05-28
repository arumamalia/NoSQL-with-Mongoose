const express = require('express') // Import express
const router = express.Router() // Make router from app
const TransaksiController = require('../controllers/transaksiController.js') // Import TransaksiController
const TransaksiValidator = require('../middlewares/validators/transaksiValidator.js') // Import validator to validate every request from user

router.get('/', TransaksiController.getAll) // If accessing localhost:3000/transaksi, it will call getAll function in TransaksiController class
router.get('/:id', TransaksiValidator.getOne, TransaksiController.getOne) // If accessing localhost:3000/transaksi/:id, it will call getOne function in TransaksiController class
router.post('/', TransaksiValidator.createTransaksi, TransaksiController.create) // If accessing localhost:3000/transaksi/create, it will call create function in TransaksiController class
router.put('/:id', TransaksiValidator.updateTransaksi, TransaksiController.updateTransaksi) // If accessing localhost:3000/transaksi/update/:id, it will call update function in TransaksiController class
router.delete('/:id', TransaksiValidator.deleteTransaksi, TransaksiController.deleteTransaksi) // If accessing localhost:3000/transaksi/delete/:id, it will call delete function in TransaksiController class

module.exports = router; // Export router
