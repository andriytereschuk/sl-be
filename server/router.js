const express = require('express');
const router = express.Router();
const hotelController = require('./controllers/hotels.controller');

router.get('/hotels', hotelController.getHotels);

module.exports = router;
