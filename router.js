const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.get('/api/hotels', controller.getHotels);

module.exports = router;
