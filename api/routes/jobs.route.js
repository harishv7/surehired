const express = require('express');
const jobsController = require('../controllers/jobs.controller')

const router = express.Router();

router.route('/').post(jobsController.create);
router.route('/testQueue').get(jobsController.testQueue);
router.route('/:jobId').patch(jobsController.patch);

module.exports = router;