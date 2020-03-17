// Require needed node modules
const express = require('express');
const cors = require('cors');

// Create an instance of express
const app = express();

// Middleware, etc
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// Declare controllers
app.use('/auth', require('./routes/auth'));
app.use('/authors', require('./routes/authors'));
app.use('/profile', require('./routes/profile'));
// app.use('/recipes', require('./routes/recipes));

// Make 404 route
app.get('/', (req, res) => {
  res.send({'error': 'page not found'});
});

// Listen
app.listen(process.env.PORT || 3000, () => {
  console.log(`🎻 listening to the smooth sounds of port ${process.env.PORT || 3000} 🎻`)
});