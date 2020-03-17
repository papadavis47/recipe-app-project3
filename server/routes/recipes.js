const express = require("express");
const router = express.Router();
// const db = require("../models/index");

router.get("/", (req, res) => {
    // db.Recipe.find()
    // .then(recipes=>{
    //     res.send(recipes);
    // }).catch(err=>res.send({ message: "Error in getting all recipes", err }));
    
    res.send("This page will show homepage with search bar and recipes");
})

router.get("/about", (req, res) => {
    
    res.send("This route will render an about page");
})

router.get("/:id", (req, res) => {
    // db.Recipe.findById(req.params.id)
    // .then(recipe=>res.send(recipe))
    // .catch(err=>res.send({message: 'error in getting one recipe', err}));

    res.send("This page will show one recipe details");

})

router.post("/new", (req, res) => {
    // Remove any keys that have no value
    // Object.keys(req.body).forEach((key) => (req.body[key] == '') && delete req.body[key]);
    // db.Recipe.create(req.body)
    // .then(recipe => res.send(recipe))
    // .catch(err=>res.send({ message: 'Error in creating one recipe', err}));

    res.send("This page will have a form for someone to make a new recipe")
})

router.put("/:id/edit", (req, res) => {
    //needs to be logged in, can only change blog/recipe posted by user??
    res.send("To update a recipe, not sure how this will be possible with the models of mongoose");
})

router.delete

module.exports = router;