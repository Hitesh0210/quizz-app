// exerciseController.js

exports.submitAnswer = async (req, res) => {
    try {
      const { answer } = req.body;
      const userId = req.user.userId; // Extracted from the JWT token during authentication
  
      // Add logic to validate the answer, update the score, etc.
      // For simplicity, let's assume the answer is always correct.
  
      // Update the user's score
      await User.findByIdAndUpdate(userId, { $inc: { score: 1 } });
  
      res.status(200).json({ message: 'Answer submitted successfully' });
    } catch (error) {
      console.error('Error submitting answer:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  