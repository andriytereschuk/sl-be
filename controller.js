const hotels = require('./data/hotels.json');

const getHotels = (req, res) => res.json(hotels);

module.exports = {
  getHotels
}