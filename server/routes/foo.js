let express = require('express');
let router = express.Router();

router.get('/', function(req, res) {
    res.send([{text: "Foo"}]);
});

router.post('/', function(req, res) {
    res.send('POST handler for /foo route.');
});

module.exports = router;