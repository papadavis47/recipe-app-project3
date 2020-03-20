const express = require("express");
const router = express.Router();
const db = require("../models/index");

router.get("/", (req, res) => {
    let searchParams = req.query.tags ? 
    { tags: { $all: req.query.tags.split(',').map(tag=>tag.toLowerCase().trim()) } } : 
    {} 

    console.log( searchParams )
    db.Recipe.find( searchParams )
    .then(recipes => {
        console.log(recipes)
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
    Object.keys(req.body).forEach((key) => (req.body[key] == '') && delete req.body[key]);
    req.body.tags = req.body.tags.split(',').map(tag=>tag.toLowerCase().trim());
    req.body.directions = req.body.directions.split(',').map(direction=>direction.trim());
    req.body.ingredients = req.body.ingredients.split(',').map(ingredient=>ingredient.toLowerCase().trim());
    db.Recipe.create(req.body)
    .then(recipe => res.send(recipe))
    .catch(err=>res.send({ message: 'Error in creating one recipe', err}));
})

router.put("/:id", (req, res) => {
    db.Recipe.findByIdAndUpdate(req.params.id)
    // res.send("To update a recipe, not sure how this will be possible with the models of mongoose");
})

router.delete('/:id', (req, res) => {
    db.Recipe.findByIdAndDelete(req.params.id)
    .then(recipe => res.redirect('/'))
    .catch(err=> res.send({ message: 'error in deleting item', err}));
})


module.exports = router;