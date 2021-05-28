const mongoose = require("mongoose");
const mongoose_delete = require("mongoose-delete");

const TransaksiSchema = new mongoose.Schema(
  {
    barang: {
      type: mongoose.Schema.Types.Mixed,
      required: true,
    },
    pelanggan: {
      type: mongoose.Schema.Types.Mixed,
      required: true,
    },
    jumlah: {
      type: Number,
      required: true,
    },
    total: {
      type: mongoose.Schema.Types.Decimal128,
      required: true,
    },
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

TransaksiSchema.plugin(mongoose_delete, {
  overrideMethods: "all",
});

module.exports = mongoose.model("transaksi", TransaksiSchema, "transaksi");
