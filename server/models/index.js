const mongoose = require('mongoose');

// Connect to Mongo database
mongoose.connect(
  process.env.MONGO_URL || 'mongodb://localhost:27017/recipeapp',
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }
);
let db = mongoose.connection;
db.once('open', () => {
  console.log(`Connected to MongoDB on ${db.host}: ${db.port}`);
});
db.on('error', err => {
  console.log(`Bad news! MongoDB error:\n${err}`);
});

// Require your other models, and export them
// NOTE: Your files can have multiple module.exports statements!
// Make sure to export both your Museum and Piece models!
module.exports.Recipe = require('./recipe');
module.exports.Tag = require('./tag');
module.exports.User = require('./user')
