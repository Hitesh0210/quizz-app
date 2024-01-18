const mongoose = require('mongoose');

const exerciseSchema = new mongoose.Schema({
  language: { type: String, required: true },
  difficulty: { type: Number, required: true },
  question: { type: String, required: true },
  answer: { type: String, required: true },
});

const Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise;
