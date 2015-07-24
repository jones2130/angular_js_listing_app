var express = require('express');
var router = express.Router();

var options = {
        root: __dirname + '/../views/'
};

router.get('/', function(req, res){
    res.sendFile('index.html', options);
});

module.exports = router;