var express = require('express');

var app = express();
var path = require("path");
var Firebase = require("firebase");

app.get('/', function(req, res){
	res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/stylesheet.css', function(req, res){
  res.sendFile(path.join(__dirname + '/stylesheet.css'));
});

app.get('/hat.png', function(req, res){
  res.sendFile(path.join(__dirname + '/hat.png'));
});

app.get('/app.js', function(req, res){
  res.sendFile(path.join(__dirname + '/app.js'));
});


var server = app.listen(80, function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log('My site is listening at http://%s:%s', host, port);
});
