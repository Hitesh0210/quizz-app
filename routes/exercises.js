const express = require('express');
const router = express.Router();
const exerciseController = require('../controllers/exerciseController');

router.get('/getExercise', exerciseController.getExercise);
router.post('/submitAnswer', exerciseController.submitAnswer);

module.exports = router;
