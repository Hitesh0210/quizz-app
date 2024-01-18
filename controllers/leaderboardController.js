// leaderboardController.js

exports.getLeaderboard = async (req, res) => {
    try {
      const { language } = req.query;
  
      // Fetch the leaderboard based on the user's language
      const leaderboard = await Leaderboard.find({}).populate('userId', 'username score').sort({ score: -1 }).limit(10);
  
      res.status(200).json(leaderboard);
    } catch (error) {
      console.error('Error fetching leaderboard:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  