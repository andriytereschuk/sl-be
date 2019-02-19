const express = require('express');
const router = express.Router();
const hotelController = require('./controllers/hotels.controller');

router.get('/api/hotels', hotelController.getHotels);

module.exports = router;
