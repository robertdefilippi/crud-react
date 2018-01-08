const express = require('express');
const users = require('./routes/users');
const foo = require('./routes/foo');

const app = express();
const port = process.env.PORT || 8080;

// Set a route for when commands are processed for users
app.use('/users', users);
app.use('/foo', foo);

app.get('/api/hello', (req, res) => {
    res.send({ express: 'Hello From Express' });
});

app.listen(port, () => console.log(`Listening on port ${port}`));