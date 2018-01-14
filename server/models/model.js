let mongoose = require('mongoose');

let recipeSchema = new mongoose.Schema({

    id:{
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },

    createdAt:{
        type: Date,
        default: Date.now,
        required: true
    },

    recipeName: {
        type: String,
        required: true
    },

    chefName: {
        type: String,
        required: true
    },

    sourceOfWebsite: {
        type: String,
        required: true
    },

    linkToRecipe:{
        type: String,
        required: true
    },

    raitingOfRecipe: {
        type: Number,
        required: true,
        min: 1,
        max: 5
    }

});

// Export recipeSchema model
module.exports = mongoose.model('Recipe', recipeSchema);