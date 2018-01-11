import mongoose from 'mongoose';

// Import the models created in ../models/model
import Chef from '../models/model';

// Request functions

// GET/READ Request
export const getRequest = (req, res) => {
    Chef.find().exec((err, chef) => {
        if (err) {
            return res.json({
                'success': false,
                'message': 'An error has been called'
            });
        }

        // If no error return message, and the object
        return res.json({
            'success': true,
            'message': 'Object got successfully', chef
        });
    });
};

// ADD/CREATE Request
export const addRequest = (req, res) => {

    // Get an instance of the model
    // Verify the save occurred, else throw and error
    const newChef = new Chef(req.body);
    newChef.save((err, itemToAdd) => {
        if (err) {
            return res.json({
                'success': false,
                'message': 'Some Error'
            });
        }
        return res.json({
            'success': true,
            'message': 'Todo added successfully', itemToAdd
        });
    })
};

// UPDATE Request based on unique ID
export const updateRequest = (req, res) => {

    // Get an instance of the model
    // Verify the the id exists or throw an error
    Chef.findOneAndUpdate({
            _id: req.body.id
        },
        req.body, {
            new: true
        },
        (err, chef) => {
            if (err) {
                return res.json({
                    'success': false,
                    'message': 'Some Error',
                    'error': err
                });
            }

            // Verify the object has made it past the error catcher
            console.log(chef);
            return res.json({
                'success': true,
                'message': 'Updated successfully',
                chef
            });
        })
};

// GET Request based on ID
export const getRequestByID = (req, res) => {

    // Get an instance of the model
    // Verify the the id exists or throw an error
    Chef.find({
        _id: req.params.id
    }).exec((err, chef) => {
        if (err) {
            return res.json({
                'success': false,
                'message': 'Some Error'
            });
        }

        // TODO Consider using exists(true) instead of chef.length
        if (chef.length) {
            return res.json({
                'success': true,
                'message': 'Todo fetched by id successfully', chef
            });
        }
        else {
            return res.json({
                'success': false,
                'message': 'Todo with the given id not found'
            });
        }
    })
};

// DELETE Request by ID
export const deleteRequest = (req, res) => {

    // Get an instance of the model
    // Verify the the id exists or throw an error
    Chef.findByIdAndRemove(req.params.id, (err, chef) => {
        if(err){
            return res.json({
                'success': false,
                'message': 'Some Error'
            });
        }
        return res.json({
            'success': true,
            'message': chef.createdAt+' deleted successfully'});
    })
};