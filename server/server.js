// Require needed node modules
const express = require('express');
<<<<<<< HEAD
const cors = require('cors');
=======
const cors = require("cors");
>>>>>>> 40db1a7f4e605afa94cf9ecb1109c405d633166a

// Create an instance of express
const app = express();

// Middleware, etc
app.use(express.urlencoded({ extended: false }));
<<<<<<< HEAD
app.use(cors());

// Declare controllers
app.use('/auth', require('./routes/auth'));
app.use('/authors', require('./routes/authors'));
app.use('/profile', require('./routes/profile'));
// app.use('/recipes', require('./routes/recipes));
=======
app.use(express.json());
app.use(cors());

// Declare controllers
app.use('/recipes', require('./routes/recipes'));
app.use('/authors', require('./routes/authors'));
app.use('/profiles', require('./routes/profiles'));
>>>>>>> 40db1a7f4e605afa94cf9ecb1109c405d633166a

// Make 404 route
app.get('/', (req, res) => {
  res.send({'error': 'page not found'});
});

// Listen
app.listen(process.env.PORT || 3000, () => {
<<<<<<< HEAD
  console.log(`🎻 listening to the smooth sounds of port ${process.env.PORT || 3000} 🎻`)
=======
  console.log(`🎧 You're listening to the smooth sounds of port ${process.env.PORT || 3000} ☕️`)
>>>>>>> 40db1a7f4e605afa94cf9ecb1109c405d633166a
});