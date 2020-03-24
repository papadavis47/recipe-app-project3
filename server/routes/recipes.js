const express = require("express");
const cors = require("cors");
const router = express.Router();
const db = require("../models/index");

router.use(cors());

router.get("/", (req, res) => {
    let searchParams = req.query.tags ? 
    { tags: { $all: req.query.tags.split(',').map(tag=>tag.toLowerCase().trim()) } } : 
    {} 

    //console.log( searchParams )
    db.Recipe.find( searchParams )
    .populate("userId", "name")
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
    
    let newRecipe = req.body;
    newRecipe.servings = parseInt(req.body.servings)
    newRecipe.tags = req.body.tags.split(',').map(tag=>tag.toLowerCase().trim());
    newRecipe.directions = req.body.directions.split(',').map(direction=>direction.trim());
    newRecipe.ingredients = req.body.ingredients.split(',').map(ingredient=>ingredient.toLowerCase().trim());
    
    //need to pass user to new recipes (here or front end???)
    console.log(newRecipe);
    db.Recipe.create({
        title: newRecipe.title,
        alt: newRecipe.alt,
        userId: newRecipe.userId,
        image: newRecipe.image,
        servings: newRecipe.servings,
        description: newRecipe.description,
        directions: newRecipe.directions,
        ingredients: newRecipe.ingredients,
        tags: newRecipe.tags
    })
    .then(recipe => {
        console.log(req.body);
        db.User.findByIdAndUpdate(req.body.userId,
            {$push: { userRecipes: recipe._id }},
            {safe: true, upsert: true}
        )
        .then((recipe)=>res.send(recipe))
        .catch(err=>res.send({ message: 'Error in adding favRecipe to user', err}));
        
        // res.send(recipe);
    })
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