const express = require('express');
const comprehendController = require('../controllers/comprehend.controller')

const router = express.Router();

router.route('/').post(comprehendController.getSentiment);

module.exports = router;