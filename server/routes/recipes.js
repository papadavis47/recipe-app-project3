const express = require("express");
const router = express.Router();
const db = require("../models/index");

router.get("/", (req, res) => {
    let searchParams = req.query.tags ? 
    { tags: { $all: req.query.tags.split(',').map(tag=>tag.toLowerCase().trim()) } } : 
    {} 

    //console.log( searchParams )
    db.Recipe.find( searchParams )
    .then(recipes => {
        //console.log(recipes)
        res.send(recipes)
    }).catch(err=>res.send({ message: "Error in getting all recipes", err }));
});

router.get("/about", (req, res) => {
    
    res.send("This route will render an about page");
})

router.get("/:id", (req, res) => {
    db.Recipe.findById(req.params.id)
    .then(recipe=>res.send(recipe))
    .catch(err=>res.send({message: 'error in getting one recipe', err}));
})

router.post("/", (req, res) => {
    // Remove any keys that have no value
    req.body.tags = req.body.tags.split(',').map(tag=>tag.toLowerCase().trim());
    req.body.directions = req.body.directions.split(',').map(direction=>direction.trim());
    req.body.ingredients = req.body.ingredients.split(',').map(ingredient=>ingredient.toLowerCase().trim());
    //need to pass user to new recipes (here or front end???)
    db.Recipe.create(req.body)
    .then(recipe => res.send(recipe))
    .catch(err=>res.send({ message: 'Error in creating one recipe', err}));
})

// we will need to decide which part of the recipe schema to update - title, ingredients, etc
// will be similar to process of how recipe ingredients are created - however that is sent back

router.put("/:id", (req, res) => {
    req.body.servings = parseInt(req.body.servings)
    req.body.tags = req.body.tags.split(',').map(tag=>tag.toLowerCase().trim());
    req.body.directions = req.body.directions.split(',').map(direction=>direction.trim());
    req.body.ingredients = req.body.ingredients.split(',').map(ingredient=>ingredient.toLowerCase().trim());
    db.Recipe.findByIdAndUpdate(req.params.id, {
        title: req.body.title,
        alt: req.body.alt,
        image: req.body.image,
        servings: req.body.servings,
        description: req.body.description,
        directions: req.body.directions,
        ingredients: req.body.ingredients,
        tags: req.body.tags
    }, (err, recipe) => res.send( recipe ))
    // .then(recipe => )
})

router.delete('/:id', (req, res) => {
    db.Recipe.findByIdAndDelete(req.params.id)
    .then(recipe => res.redirect('/'))
    .catch(err=> res.send({ message: 'error in deleting item', err}));
})


module.exports = router;