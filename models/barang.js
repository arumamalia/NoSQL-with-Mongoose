const mongoose = require("mongoose");
const mongooseDelete = require("mongoose-delete");

const BarangSchema = new mongoose.Schema(
  {
    nama: {
      type: String,
      required: true,
      unique: true,
    },
    harga: {
      type: Number,
      required: true,
    },
    pemasok: {
      type: mongoose.Schema.ObjectId,
      ref: "pemasok",
      required: true,
    },
    image: {
      type: String,
      default: null,
      required: false,
      get: getImage,
    },
  },
  {
    timestamps: {
      createdAt: "createdAt",
      updatedAt: "updatedAt",
    },
    toJSON: { getters: true },
  }
);

function getImage(image) {
  if (!image) return null;
  return `/images/${image}`;
}

BarangSchema.plugin(mongooseDelete, { overrideMethods: "all" });

module.exports = mongoose.model("barang", BarangSchema, "barang");
