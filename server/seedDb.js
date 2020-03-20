const db = require('./models');

db.Recipe.create({
  title: 'Spaghetti Carbonara 2',
  servings: 6,
  description: 'An Italian Classic',
  image: 'http://placekitten.com/200/300',
  ingredients: ['meatballs', 'sauce', 'pasta'],
  directions: ["Put the meat in a bowl", "Let it sit out for 3 days", "Throw the meat and the bowl away"],
  tags: ["meat", "Karma", "Balls", "Sauce", "Italian"]
})
.catch(err => {
  console.log('Error Message', err);
});

