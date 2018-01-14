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
import recipes from './routes/route'

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

// Connect to database
// TODO connect to external database
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/recipies', {
    useMongoClient: true,
});

// add Source Map Support
SourceMapSupport.install();

// Test routes
app.get('/', (req, res) => {
    return res.end('Api working');
})
// app.use('/users', users);
// app.use('/foo', foo);

// app.get('/api/hello', (req, res) => {
//     res.send({ express: 'Hello From Express' });
// });

// Catch 404
app.use((req, res, next) => {
    res.status(404).send('<h2 align=center>Page Not Found!</h2>');
});

// Set listening console message
app.listen(port, () =>
    console.log(`Listening on port ${port}`)
);