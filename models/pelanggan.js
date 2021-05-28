const mongoose = require("mongoose");
const mongoose_delete = require("mongoose-delete");

const PelangganSchema = new mongoose.Schema(
  {
    nama: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      default: null,
      required: false,
      get: getPhoto,
    },
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
    toJSON: { getters: true },
  }
);

function getPhoto(photo) {
  if(!photo) return null
  return `/images/${photo}`;
}

PelangganSchema.plugin(mongoose_delete, { overrideMethods: "all" });

module.exports = mongoose.model("pelanggan", PelangganSchema, "pelanggan");
