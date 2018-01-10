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

    firstName: {
        type: String,
        required: true
    },

    lastName: {
        type: String,
        required: true
    },

    profession: {
        type: String,
        required: true
    },

    age:{
        type: Number,
        required: true
    }
});

export default mongoose.model('Chef', Schema);