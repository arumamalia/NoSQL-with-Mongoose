const validator = require("validator");
const mongoose = require("mongoose");
const { transaksi, barang, pelanggan, pemasok } = require("../../models");

class BarangValidator {
  create = async (req, res, next) => {
    const errors = [];
    try {
      if (!mongoose.Types.ObjectId.isValid(req.body.id_pemasok)) {
        errors.push("id_barang is not valid and must be 24 character & hexadecimal");
      }

      const findData = await pemasok.findOne({
        _id: req.body.id_pemasok,
      });
      if (findData == null) {
        errors.push("Data Not Found");
      }

      if (!validator.isAlpha(req.body.nama, ["en-US"], { ignore: " -1234567890" })) {
        errors.push("Nama is Invalid");
      }

      if (!validator.isNumeric(req.body.harga)) {
        errors.push("Harga must be a number");
      }

      if (errors.length > 0) {
        return res.status(400).json({
          message: errors.join(", "),
        });
      }
      req.body.pemasok = findData
      next()
    } catch (error) {
      return res.status(500).json({
        message: error.message
      })
    }
  };
}

module.exports = new BarangValidator();
