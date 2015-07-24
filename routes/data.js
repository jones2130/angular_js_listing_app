var express = require('express');
var router = express.Router();

var options = {
        root: __dirname + '/../data/'
};

router.get('/:file', function(req, res){
   res.sendFile(req.params.file, options);
});

module.exports = router;