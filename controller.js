const mongojs = require('mongojs');
const config = require('./config');
// const hotels = require('./data/hotels.json');

const db = mongojs(config.dbUrl, ['hotels']);

// const getHotels = (req, res) => res.json(hotels);
const getHotels = (req, res) => db.hotels.find((err, data) => err ? res.send(err) : res.json(data));

module.exports = {
  getHotels
}