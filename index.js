var express = require('express');

var app = express();
var path = require("path");
var Firebase = require("firebase");

app.get('/', function(req, res){
	res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/admin', function(req, res){
	res.sendFile(path.join(__dirname + '/views/admin.html'));
});

app.use('/styles', express.static(path.join(__dirname + '/styles')));

app.use('/resources', express.static(path.join(__dirname + '/resources')));

app.use('/app', express.static(path.join(__dirname + '/app')));


var server = app.listen(8080, function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log('My site is listening at http://%s:%s', host, port);
});
