// Require Mongoose node module
const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
    title: String,
    authorId: {
        type: mongoose.Types.ObjectId,
        ref: 'Author'
    },
    image: String,
    servings: Number,
    description: {
        type: String,
        minlength: 1,
        maxlength: 280
    },
    directions: [{ type: String }],
    ingredients: [{ type: String}],
    date: { 
        type: Date, 
        default: Date.now 
    },
    tags: [tagSchema]
})




// Use Recipe schema to create Recipe model
const Recipe = mongoose.model('Recipe', recipeSchema)

// Export Recipe Model
module.exports = Recipe;