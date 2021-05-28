const express = require('express') // Import express
const router = express.Router() // Make router from app
const BarangController = require('../controllers/barangController.js') // Import TransaksiController
const BarangValidator = require('../middlewares/validators/barangValidator.js') // Import validator to validate every request from user

// router.get('/', BarangController.getAll) // If accessing localhost:3000/transaksi, it will call getAll function in TransaksiController class
// router.get('/:id', BarangValidator.getOne, BarangController.getOne) // If accessing localhost:3000/transaksi/:id, it will call getOne function in TransaksiController class
router.post('/', BarangValidator.create, BarangController.createBarang) // If accessing localhost:3000/transaksi/create, it will call create function in TransaksiController class
// router.put('/:id', BarangValidator.updateTransaksi, BarangController.updateTransaksi) // If accessing localhost:3000/transaksi/update/:id, it will call update function in TransaksiController class
// router.delete('/:id', BarangValidator.deleteTransaksi, BarangController.deleteTransaksi) // If accessing localhost:3000/transaksi/delete/:id, it will call delete function in TransaksiController class

module.exports = router; // Export router