const express = require("express");
const router = express.Router();
const db = require("../models/index");
const bcrypt = require('bcrypt')

// find by document id and update and push item in array
// users.findByIdAndUpdate(userID,
//     {$push: {friends: friend}},
//     {safe: true, upsert: true},
//     function(err, doc) {
//         if(err){
//         console.log(err);
//         }else{
//         //do stuff
//         }
//     }
// );

// Route to update user's favRecipes
router.post("/addFav", (req, res) => {
    console.log("👻")
    db.User.findByIdAndUpdate(req.body.userId,
        {$addToSet: { favRecipes: req.body.recipeId }},
        {safe: true}
    )
    .then((updated)=>res.send(updated))
    .catch(err=>res.send({ message: 'Error in adding favRecipe to user', err}));
})


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