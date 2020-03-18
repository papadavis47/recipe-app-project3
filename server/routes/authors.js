const express = require("express");
const router = express.Router();
const db = require("../models/index");

// NOTE: authors are referred to as Users in the db. 
// We consider a user to be an author if they have published content.

// get all authors
router.get("/", (req, res) => {
    db.User.find().populate()
    .then(authors=>{
        res.send(authors);
    }).catch(err=>res.send({ message: "Error in getting all authors", err }));
    
    // res.send("This page will show all authors");
})

// get a single author
router.get("/:id", (req, res) => {
    db.User.findById(req.params.id)
    .then(user=>res.send(user))
    .catch(err=>res.send({message: 'Error in getting one author', err}));
    // res.send("This page will show one author's profile");
});

module.exports = router;