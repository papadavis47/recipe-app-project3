// set imports
require("dotenv").config();
let jwt = require("jsonwebtoken");
let db = require("../models");
const express = require('express');
let router = express.Router();

// POST for login data
router.post("/login", (req, res) => {
    // find my user by their email
    db.User.findOne({ email: req.body.email })
    .then( user => {
        // check that user or password exists in db
        if (!user || !user.password) {
            return res.status(404).send({ message: "E R R O R. User not found. E R R O R" });
        }

        // check if user matches password
        if (!user.isAuthenticated(req.body.password)) {
            return res.status(406).send({ message: "Invalid password. GAME OVER" });
        }

        // if user authenticated, create token
        let token = jwt.sign(user.toJSON(), process.env.JWT_SECRET, {
            expiresIn: 60 * 60 * 8
        });

        // send token as response
        res.send({ token });

    }).catch(err => {
        console.log(`ERROR on /login POST attempt: ${err}`);
        res.status(503).send({ message: "Incorrect login attempt. Check db and credentials." });
    });
    // res.send("This page is for a user who is logging in");
});

// POST for signup data
router.post("/signup", (req, res) => {
    db.User.findOne({ email: req.body.email })
    .then(user => {
        // if my user exists already
        if (user) {
            return res.status(409).send({ message: "Email address already in db" });
        }
        
        // create new user in db
        db.User.create(req.body)
        .then(newUser => {
            let token = jwt.sign(newUser.toJSON(), process.env.JWT_SECRET, {
                expiresIn: 60 * 60 * 8
            });
            res.send({ token });
        });
    }).catch(err => {
        console.log(`ERROR on /signup POST attempt: ${err}`);
        res.status(500).send({ message: "New user not created error" });
    });
    // res.send("This page is for a user who is signing up");
});

// router.length("/current/user", (req, res) => {
//     console.log(req.user);
    
//     if (!req.user) {
//         return res.status(417).send({ message: "Current user not found. Check for error at login/auth routes." });
//     }

//     req.send({ user: req.user });
//     // res.send("This route is to check for login errors")
// });

module.exports = router;