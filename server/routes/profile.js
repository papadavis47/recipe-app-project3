const express = require("express");
const router = express.Router();
const db = require("../models/index");

// This route only needed in front end
// router.get("/", (req, res) => {
//     db.user.find().populate()
//     .then(profile=>{
//         res.send(profile);
//     }).catch(err=>res.send({ message: "Error in getting your profile", err }));
    
//     // res.send("This page will show user's profile");
// })

router.put("/edit", (req, res) => {

    res.send("This page will update a user's profile");

})

module.exports = router;