const express = require('express');
const comprehendController = require('../controllers/comprehend.controller')
const rekognitionController = require('../controllers/rekognition.controller');
const analysisController = require('../controllers/analysis.controller');

const router = express.Router();

router.route('/job/:jobId').get(analysisController.processJob);
router.route('/sentiment').post(comprehendController.getSentiment);
router.route('/facial').post(rekognitionController.getFacialAnalysis);

module.exports = router;