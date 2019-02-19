const hotels = require('../models/hotel.model');

const getHotels = (req, res) => hotels.find((err, data) => err ? res.send(err) : res.json(data));

module.exports = {
  getHotels
};
