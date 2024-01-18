const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/getProfile', userController.getProfile);
router.post('/updateLanguage', userController.updateLanguage);
router.post('/resetProgress', userController.resetProgress);

module.exports = router;
