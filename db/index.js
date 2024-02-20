const mongoose = require('mongoose');

const dbURI = `mongodb://127.0.0.1:27017/Recipes`;

mongoose.connect(dbURI);

const db = mongoose.connection;

db.on('connected', () => {
console.log(`Mongoose connected to ${dbURI}`);
});

db.on('error', (err) => {
console.log('Mongoose connection error:', err);
});

db.on('disconnected', () => {
console.log('Mongoose disconnected');
});

process.on('SIGINT', () => {
    db.close(() => {
      console.log('Mongoose connection disconnected through app termination');
      process.exit(0);
    });
  });
  

module.exports = db;