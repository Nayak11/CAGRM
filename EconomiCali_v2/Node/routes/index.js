var express = require('express');
var router = express.Router();
var pool = require('./../pool');


router.get('/', function(req, res, next) {
    res.send('Freelancer' );
});


module.exports = router;
