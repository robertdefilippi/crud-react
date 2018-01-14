// import mongoose from 'mongoose';

// Import the models created in ../models/model
let Recipe = require('../models/model');
// import Recipe from '../models/model';

// Request f    unctions for different recipes
// TODO connect to database rather than having the data local

// GET/READ Recipe Request
export const getRequest = (req, res) => {
    Recipe.find().exec((err, recipe) => {
        if (err) {
            return res.json({
                'success': false,
                'message': 'An error occurred: ' + err
            });
        }

        // If no error, return message
        return res.json({
            'success': true,
            'message': 'Object GET success',
            recipe
        });
    });
};

// POST/ADD Recipe Request
export const postRequest = (req, res) => {
    const newRecipe = new Recipe(req.body);
    newRecipe.save((err, recipe) => {
        if (err) {
            return res.json({
                'success': false,
                'message': 'Some Error: ' + err
            });
        }
        return res.json({
            'success': true,
            'message': 'Recipe added successfully',
            recipe
        });
    })
};

// PUT/UPDATE recipe Request, based on unique ID
export const putRequest = (req, res) => {

    Recipe.findOneAndUpdate({
            id: req.body.id
        },

        req.body, {
            new: true
        },

        // TODO change the error key/value to appear in one line
        (err, recipe) => {
            if (err) {
                return res.json({
                    'success': false,
                    'message': 'An error occurred when finding the recipe',
                    'error': err
                });
            }

            // TODO change recipe return to live in a json key value pair
            console.log(recipe);
            return res.json({
                'success': true,
                'message': 'Updated successfully',
                recipe
            });
        })
};

// GET Recipe Request based on ID
export const getRequestByID = (req, res) => {

    Recipe.find({
        _id: req.params.id
    }).exec((err, recipe) => {
        if (err) {
            return res.json({
                'success': false,
                'message': 'Some Error'
            });
        }

        // TODO Consider using exists(true) instead of chef.length
        if (recipe.length) {
            return res.json({
                'success': true,
                'message': 'Recipe fetched by id successfully',
                recipe
            });
        }
        else {
            return res.json({
                'success': false,
                'message': 'Recipe with the given id not found'
            });
        }
    })
};

// DELETE Recipe Request by ID
export const deleteRequestById = (req, res) => {

    // TODO change the error handler
    Recipe.findByIdAndRemove(req.params.id, (err, recipe) => {
        if (err) {
            return res.json({
                'success': false,
                'message': 'An error occurred', err
            });
        }

        return res.json({
            'success': true,
            'message': recipe.createdAt + ' deleted successfully'
        });
    })
};