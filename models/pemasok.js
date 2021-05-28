const mongoose = require("mongoose");
const mongoose_delete = require("mongoose-delete");

const PemasokSchema = new mongoose.Schema(
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
  if(!image) return null
  return `/images/${photo}`;
}

PemasokSchema.plugin(mongoose_delete, { overrideMethods: "all" });

module.exports = mongoose.model("pemasok", PemasokSchema, "pemasok");
