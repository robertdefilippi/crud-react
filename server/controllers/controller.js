import mongoose from 'mongoose';

import Chef from '../models/model';

// Import the models created in ../models/model

// GET Request
export const getRequest = (req, res) => {
    Chef.find().exec((err, chef) => {
        if(err) {
            return res.json({
                'success':false,
                'message':'An error has been called'
            });
        }

        // If no error return message, and the object
        return res.json({
            'success':true,
            'message':'Object got successfully', chef
        });
    });
};