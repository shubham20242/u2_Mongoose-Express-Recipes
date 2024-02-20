const mongoose = require('mongoose');


const menuSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  ingredients: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Ingredient'
  }],
  instructions: {
    type: String,
    required: true
  },
  cuisine: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Cuisine'
  },
  
});


const Menu= mongoose.model('Menu', menuSchema);


module.exports = Menu;
