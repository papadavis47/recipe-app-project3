const express = require("express");
const router = express.Router();
// const dd = require("../models/index");

router.get("/", (req, res) => {
    db.Profile.find().populate()
    .then(profile=>{
        res.send(profile);
    }).catch(err=>res.send({ message: "Error in getting your profile", err }));
    
    // res.send("This page will show user's profile");
})

<<<<<<< HEAD:server/routes/profile.js

// TODO: JOHN
router.put("/", (req, res) => {
=======
router.put("/edit", (req, res) => {
>>>>>>> micajank-master:server/routes/profiles.js

    res.send("This page will update a user's profile");

})

module.exports = router;