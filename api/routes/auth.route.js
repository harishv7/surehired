const express = require('express');
const authController = require('../controllers/auth.controller');
// const tileController = controllers.tiles;
const router = express.Router();

// router.route('/').post(tileController.create);
router.route('/').get(authController.get);
// router.route('/:id').patch(tileController.patch);
// router.route('/:id').delete(tileController.delete);

module.exports = router;