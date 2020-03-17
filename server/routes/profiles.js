const express = require("express");
const router = express.Router();
// const dd = require("../models/index");

router.get("/", (req, res) => {
    // db.Profile.find()
    // .then(profile=>{
    //     res.send(profile);
    // }).catch(err=>res.send({ message: "Error in getting your profile", err }));
    
    res.send("This page will show user's profile");
})

router.put("/edit", (req, res) => {

    res.send("This page will update a user's profile");

})

module.exports = router;