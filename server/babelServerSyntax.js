// Allow for ES6 notation in the app
require('babel-register')({
    presets: ['es2015-node6']
});

// Connect to main file
require('./server.js');