var express = require('express');
var routes = require('./routes');
var data = require('./routes/data');
var http = require('http');
var path = require('path');

var app = express();

app.set('port', process.env.PORT || 8080);
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'static')));
app.use('/', routes);
app.use('/data', data);

http.createServer(app).listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
});