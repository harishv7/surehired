const express = require('express');
const jobsController = require('../controllers/jobs.controller')

const router = express.Router();

router.route('/').post(jobsController.create);
router.route('/start-analytics').post(jobsController.startAnalytics);
router.route('/:jobId').patch(jobsController.patch);

module.exports = router;