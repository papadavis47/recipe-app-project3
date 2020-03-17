const db = require('./models');

db.Recipe.create({
  title: 'Spaghetti Carbonara',
  servings: 6,
  description: 'An Italian Classic',
  image: 'http://placekitten.com/200/300'
})
.then(result => {
  console.log('Created the First part');
  db.Tag.create({
    title: 'Comfort food',
    })
  .then(result => {
    console.log('successfully created tag');
    process.exit();
  })
  .catch(err => {
    console.log('Error Message', err);
  });
})
.catch(err => {
  console.log('Error Message', err);
});
