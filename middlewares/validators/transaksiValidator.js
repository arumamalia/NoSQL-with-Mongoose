const validator = require("validator");
const mongoose = require("mongoose");
const { transaksi, barang, pelanggan, pemasok } = require("../../models");

class TransaksiValidator {
  createTransaksi = async (req, res, next) => {
    const errors = [];

    try {
      if (!mongoose.Types.ObjectId.isValid(req.body.id_barang)) {
        errors.push("id_barang is not valid and must be 24 character & hexadecimal");
      }

      // Check id_pelanggan is valid or not
      if (!mongoose.Types.ObjectId.isValid(req.body.id_pelanggan)) {
        errors.push("id_pelanggan is not valid and must be 24 character & hexadecimal");
      }

      const findData = await Promise.all([
        barang.findOne({ _id: req.body.id_barang }),
        pelanggan.findOne({ _id: req.body.id_pelanggan }),
      ]);

      if (!findData[0]) {
        errors.push("Barang not found");
      }
      if (!findData[1]) {
        errors.push("Pelanggan not found");
      }

      if (errors.length > 0) {
        return res.status(400).json({
          message: errors.join(", "),
        });
      }

      req.body.barang = findData[0];
      req.body.pelanggan = findData[1];
      req.body.total = eval(findData[0].harga * req.body.jumlah);

      next();
    } catch (e) {
      return res.status(500).json({
        message: "Internal Server Error",
        error: e,
      });
    }
  };

  getOne = async (req, res, next) => {
    const errors = [];
    try {
      if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        errors.push("Parameter is not valid and must be 24 character & hexadecimal");
      }

      const findData = await transaksi.findOne({
        _id: req.params.id,
      });

      if (findData == null) {
        errors.push("Data Not Found");
      }

      if (errors.length > 0) {
        return res.status(400).json({
          message: errors.join(", "),
        });
      }

      next();
    } catch (e) {
      return res.status(500).json({
        message: "Internal Server Error",
        error: e,
      });
    }
  };

  updateTransaksi = async (req, res, next) => {
    const errors = [];
    try {
      if (!mongoose.Types.ObjectId.isValid(req.body.id_barang)) {
        errors.push("id_barang is not valid and must be 24 character & hexadecimal");
      }

      // Check id_pelanggan is valid or not
      if (!mongoose.Types.ObjectId.isValid(req.body.id_pelanggan)) {
        errors.push("id_pelanggan is not valid and must be 24 character & hexadecimal");
      }

      if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        errors.push("Parameter is not valid and must be 24 character & hexadecimal");
      }

      const findData = await Promise.all([
        barang.findOne({ _id: req.body.id_barang }),
        pelanggan.findOne({ _id: req.body.id_pelanggan }),
        transaksi.findOne({ _id: req.params.id }),
      ]);

      if (!findData[0]) {
        errors.push("Barang not found");
      }
      if (!findData[1]) {
        errors.push("Pelanggan not found");
      }

      if (!findData[2]) {
        errors.push("Item to Update Not Found");
      }

      if (errors.length > 0) {
        return res.status(400).json({
          message: errors.join(", "),
        });
      }

      req.body.barang = findData[0];
      req.body.pelanggan = findData[1];
      req.body.total = eval(findData[0].harga * req.body.jumlah);

      next();
    } catch (e) {
      return res.status(500).json({
        message: "Internal Server Error",
        error: e,
      });
    }
  };

  deleteTransaksi = async (req, res, next) => {
    const errors = [];
    try {
      if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        errors.push("Parameter is not valid and must be 24 character & hexadecimal");
      }

      const findData = await transaksi.findOne({
        _id: req.params.id,
      });

      if (!findData) {
        errors.push("Item to Delete Not Found");
      }

      if (errors.length > 0) {
        return res.status(400).json({
          message: errors.join(", "),
        });
      }

      next();
    } catch (e) {
      return res.status(500).json({
        message: "Internal Server Error",
        error: e,
      });
    }
  };
}

module.exports = new TransaksiValidator();
