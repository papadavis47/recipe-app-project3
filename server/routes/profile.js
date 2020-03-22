const express = require("express");
const router = express.Router();
const db = require("../models/index");
const bcrypt = require('bcrypt')



// need to change a line on Editprofile.js:

// line 28 need to be the following

//  fetch(`${process.env.REACT_APP_SERVER_URL}/profiles/edit/${props.user_id}`, {

router.post("/edit/:id", (req, res) => {
password = req.body.password
req.body.password = bcrypt.hashSync(password, 12)
db.User.findByIdAndUpdate(req.params.id, {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    image: req.body.image,
    bio: req.body.bio
})
.then(user => res.send(user))
})

module.exports = router;