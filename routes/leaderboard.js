const express = require('express');
const router = express.Router();
const leaderboardController = require('../controllers/leaderboardController');

router.get('/getLeaderboard', leaderboardController.getLeaderboard);

module.exports = router;
