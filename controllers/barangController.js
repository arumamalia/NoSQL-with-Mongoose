const crypto = require("crypto");
const path = require("path");
const { barang, pelanggan, pemasok, transaksi } = require("../models");

class BarangController {
  createBarang = async (req, res) => {
    try {
      if (req.files) {
        const file = req.files.image;

        if (!file.mimetype.startsWith("image")) {
          return res.status(400).json({ message: "File must be an image " });
        }

        if (file.size > 1000000) {
          return res.status(400).json({ message: "Image must be less than 1MB" });
        }

        let fileName = crypto.randomBytes(16).toString("hex");

        file.name = `${fileName}${path.parse(file.name).ext}`;

        req.body.image = file.name;

        await file.mv(`./public/images/${file.name}`, (err) => {
          if (err) {
            console.log(err);

            return res.status(500).json({
              message: "Internal Server Error",
              error: err,
            });
          }
        });
      }

      let createdData = await barang.create(req.body);

      let data = await barang.findOne({ _id: createdData._id })

      return res.status(201).json({
        message: "Success",
        data,
      });
    } catch (e) {
      return res.status(500).json({
        message: "Internal Server Error",
        error: e.message,
      });
    }
  };
}

module.exports = new BarangController();
