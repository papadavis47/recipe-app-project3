// Require Mongoose node module
const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    alt:  {
        type: String,
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    image: String,
    servings: Number,
    description: {
        required: true,
        type: String,
        minlength: 1,
        maxlength: 280
    },
    directions: { 
        required: true,
        type: [String]
    },
    ingredients: { 
        required: true,
        type: [String]
    },
    date: { 
        type: Date, 
        default: Date.now 
    },
    tags: [{ type: String }]
})




// Use Recipe schema to create Recipe model
const Recipe = mongoose.model('Recipe', recipeSchema)

// Export Recipe Model
module.exports = Recipe;