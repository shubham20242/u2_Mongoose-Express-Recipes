const mongoose = require('mongoose');
const Recipe = require('./models/menus');

const dbURI = `mongodb://127.0.0.1:27017/Recipes`;

mongoose.connect(dbURI);