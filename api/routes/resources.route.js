const express = require('express');
const resourceController = require('../controllers/resources.controller')

const multipart = require('connect-multiparty')
const multipartMiddleware = multipart()

const router = express.Router();

router.route('/').post(multipartMiddleware, resourceController.uploadResource);
router.route('/pdf-to-text').post(resourceController.convertPdfToText);

module.exports = router;