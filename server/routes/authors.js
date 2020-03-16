const express = require("express");
const router = express.Router();
// const dd = require("../models/index");

router.get("/", (req, res) => {
    // db.Author.find()
    // .then(authors=>{
    //     res.send(authors);
    // }).catch(err=>res.send({ message: "Error in getting all authors", err }));
    
    res.send("This page will show all authors");
})

router.get("/:id", (req, res) => {
    // db.Author.findById(req.params.id)
    // .then(author=>res.send(author))
    // .catch(err=>res.send({message: 'error in getting one author', err}));

    res.send("This page will show one author's profile");

})
