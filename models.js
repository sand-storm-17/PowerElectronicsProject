const mongoose = require("mongoose");

const SoilSchema = new mongoose.Schema({
  Nitrogen: {
    type: Number,
  },
  Phosphorus: {
    type: Number,
  },
  Potassium: {
    type: Number,
  },
});

const Soil = mongoose.model("Soil", SoilSchema);

module.exports = Soil;
