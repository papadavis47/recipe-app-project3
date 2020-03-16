// Require Mongoose 
const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: 1,
        maxlength: 99
    },
    image: 
    
    
    lastName: String,
    email: String,
})




// Use Author schema to create Author model
const Author = mongoose.model('Author', authorSchema)

// Export Author Model
module.exports = Author;
