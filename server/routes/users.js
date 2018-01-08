let express = require('express');
let router = express.Router();

router.get('/', function(req, res) {
    res.json([{
        id: 1,
        username: "Foo"
    }, {
        id: 2,
        username: "Bar"
    }]);
});

router.post('/', function(req, res) {
    res.send('POST handler for /dogs route.');
});

module.exports = router;