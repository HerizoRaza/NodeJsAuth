const mongoose = require("mongoose");

const carSchema = new mongoose.Schema(
  {
    immatriculation: { type: String, required: true },
    model: { type: String, required: true },
    band: { type: String, required: true },
    fuel: { type: String, required: true },
    engine: { type: Number, required: true },
    year: { type: Number, required: true },
  },
  { collection: "cars" } // équivalent de freezeTableName
);

module.exports = mongoose.model("Car", carSchema);
