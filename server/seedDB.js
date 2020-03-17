const db = require('./models');

db.Recipe.create({
  title: 'Spaghetti Carbonara',
  servings: 6,
  description: 'An Italian Classic',
  image: 'http://placekitten.com/200/300'
})
.then(result => {
  console.log('Created the First part');
  db.Piece.create({
    name: 'Mona Lisa',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/1024px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg',
    museum: result._id,
    creator: {
      name: 'Leonardo da Vinci',
      image: 'http://www.leonardodavinci.net/images/leonardo-da-vinci.jpg',
      birthyear: 1452,
      deathyear: 1519
    }
  })
  .then(result => {
    console.log('successfully created Mona Lisa');
    process.exit();
  })
  .catch(err => {
    console.log('Error Message', err);
  });
})
.catch(err => {
  console.log('Error Message', err);
});
