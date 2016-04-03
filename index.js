var express = require('express');

var app = express();
var path = require("path");
var Firebase = require("firebase");

app.get('/', function(req, res){
	res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/stylesheet.css', function(req, res){
  res.sendFile(path.join(__dirname + '/styles/stylesheet.css'));
});

app.use('/resources', express.static(path.join(__dirname + '/resources')));

app.get('/hair.png', function(req, res){
  res.sendFile(path.join(__dirname + '/resources/hair.png'));
});

app.get('/app.js', function(req, res){
  res.sendFile(path.join(__dirname + '/app/app.js'));
});


var server = app.listen(80, function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log('My site is listening at http://%s:%s', host, port);
});
