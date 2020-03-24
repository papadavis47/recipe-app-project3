const db = require('./models');

// db.Recipe.create({
//   title: 'Spaghetti Carbonara 2',
//   servings: '6',
//   description: 'An Italian Classic',
//   alt: 'some sweet spaghetti',
//   image: 'http://placekitten.com/200/300',
//   ingredients: ['meatballs', 'sauce', 'pasta'],
//   directions: ["Put the meat in a bowl", "Let it sit out for 3 days", "Throw the meat and the bowl away"],
//   tags: ["meat", "Karma", "Balls", "Sauce", "Italian"]
// })
// .catch(err => {
//   console.log('Error Message', err);
// });

db.User.create({
  name: 'Maangchi Fan Club',
  email: 'maangchi@test.com',
  password: 'maangchi1234',
  image: 'https://www.maangchi.com/wp-content/uploads/2015/01/Maangchis-Real-Korean-Cooking.jpg',
  bio: 'Unofficial fan club for Korean Cooking Expert and Extraordinare, Maangchi',
  userRecipes: [],
  favRecipes: []
}).then()
