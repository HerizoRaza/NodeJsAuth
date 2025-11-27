// models/User.js
const mongoose = require("mongoose");

const driverSchema = new mongoose.Schema({
  firstname: { type: String, required: true },
  lastname:{type: String,required:true },
  email: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model("Chauffeur", driverSchema);