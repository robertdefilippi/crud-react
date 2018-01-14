import mongoose from 'mongoose';

let Schema = mongoose.Schema({

    id:{
        type: Schema.Types.ObjectId,
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

export default mongoose.model('Recipe', Schema);