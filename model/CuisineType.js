const mongoose = require('mongoose');

const cuisineSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
      unique: true
    },
    description: {
      type: String,
      required: true
    },
  });

const Cuisine = mongoose.model('Cuisine', cuisineSchema);

module.exports = Cuisine;