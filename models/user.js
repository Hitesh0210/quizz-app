const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  language: { type: String, required: true },
  score: { type: Number, default: 0 },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
