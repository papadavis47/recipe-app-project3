const express = require("express");
const router = express.Router();
// const dd = require("../models/index");

router.get("/", (req, res) => {
    // db.Blogpost.find()
    // .then(blogposts=>{
    //     res.send(blogposts);
    // }).catch(err=>res.send({ message: "Error in getting all blogposts", err }));
    
    res.send("This page will show homepage with search bar and blogposts");
})

router.get("/about", (req, res) => {
    
    res.send("This route will render an about page");
})

router.get("/:id", (req, res) => {
    // db.Blogpost.findById(req.params.id)
    // .then(blogpost=>res.send(blogpost))
    // .catch(err=>res.send({message: 'error in getting one blogpost', err}));

    res.send("This page will show one blogpost/recipe details");

})

router.post("/", (req, res) => {
    // Remove any keys that have no value
    // Object.keys(req.body).forEach((key) => (req.body[key] == '') && delete req.body[key]);
    // db.Blogpost.create(req.body)
    // .then(blogpost => res.send(blogpost))
    // .catch(err=>res.send({ message: 'Error in creating one blogpost', err}));

    res.send("This page will have a form for someone to make a new blogpost/recipe")
})

router.put("/:id", (req, res) => {
    //needs to be logged in, can only change blog/recipe posted by user??
    res.send("To update a blogpost, not sure how this will be possible with the models of mongoose");
})