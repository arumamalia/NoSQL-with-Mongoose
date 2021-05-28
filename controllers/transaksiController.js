const { barang, pemasok, pelanggan, transaksi } = require("../models");

class TransaksiController {
  async getAll(req, res) {
    try {
      const data = await transaksi.find();

      if (data.length === 0) {
        return res.status(400).json({
          message: "Transaksi Not Found",
        });
      }

      return res.status(200).json({
        message: "Success",
        data,
      });
    } catch (e) {
      return res.status(500).json({
        message: "Internal Server Error",
        error: e,
      });
    }
  }

  async create(req, res) {
    try {
      const data = await transaksi.create({
        barang: req.body.barang,
        pelanggan: req.body.pelanggan,
        jumlah: req.body.jumlah,
        total: req.body.total,
      });

      return res.status(201).json({
        messge: "Success",
        data,
      });
    } catch (e) {
      return res.status(500).json({
        message: "Internal Server Error",
        error: e,
      });
    }
  }

  getOne = async(req, res) => {
    try {
      const data = await transaksi.findOne({
        _id: req.params.id
      })
      return res.status(201).json({
        messge: "Success",
        data,
      });
    } catch (e) {
      return res.status(500).json({
        message: "Internal Server Error",
        error: e,
      });
    }
  }

  updateTransaksi = async(req, res) => {
    try {
      const data = await transaksi.updateOne({
        _id: req.params.id
      }, req.body, {new: true})

      return res.status(201).json({
        message: "Success",
        data
      })
    } catch (e) {
      return res.status(500).json({
        message: "Internal Server Error at Controller",
        error: e
      })
    }
  }

  deleteTransaksi = async(req, res) => {
    try {
      await transaksi.deleteOne({
        _id: req.params.id
      })

      return res.status(200).json({
        message: "Success"
      })
    } catch (error) {
      return res.status(500).json({
        message: "Internal Server Error at Cont"
      })
    }
  }
}

module.exports = new TransaksiController();
