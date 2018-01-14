// The main file for the node server, routes, and controller

import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import logger from 'morgan';
import mongoose from 'mongoose';
import SourceMapSupport from 'source-map-support';

// Import routes
// const users = require('./routes/users');
// const foo = require('./routes/foo');
import recipeRoutes from './routes/route'

// Import recipe model
let recipeModel = require('./models/model');

// Define express app and port
const app = express();
const port = process.env.PORT || 8080;

// Allow Cross Origin Resource Sharing (CORS)
// Allows AJAX requests to skip the "same-origin policy" and access resources
// from remote hosts.
// TODO see if the 'cors' package works as well
app.use(function(req, res, next){
    // Allow access from any origin
    res.header("Access-Control-Allow-Origin", "*");

    // Indicate which HTTP headers will be available
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Configure express app
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));
app.use(express.static(path.join(__dirname, 'public')));

// Connect to external Mongo DB hosted on Mlab
// Created user for the db
let mongoDB = 'mongodb://admin:password@ds255767.mlab.com:55767/recipes-db';
mongoose.connect(mongoDB, {
    useMongoClient: true
});

mongoose.Promise = global.Promise;

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Add Source Map Support to support for stack tracing.
// Makes it easier to find errors
SourceMapSupport.install();

// Set routes for recipe .. use recipeRoutes at /api
app.use('/api', recipeRoutes);

// Route for testing purposes
app.get('/test', (req, res) => {
    return res.end('Api working');
});

// Catch 404 errors
// TODO is the next parameter necessary?
app.use((req, res, next) => {
    res.status(404).send('<h2 align=center>Page Not Found!</h2>');
});

// Set listening console message
app.listen(port, () =>
    console.log(`Listening on port ${port}`)
);