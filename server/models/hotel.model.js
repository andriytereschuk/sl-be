const mongoose = require('mongoose');

const schema = new mongoose.Schema(
  {
    name: String,
    distance: Number,
    services: Array,
    price: Number,
  },
  { timestamps: true }
);

module.exports = mongoose.model('hotels', schema);
