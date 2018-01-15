/*req*/
var init = require('../nodetest');
var express = require('express');
var favicon = require('serve-favicon');
var path = require('path');

/*tMIME*/
var tmimeHTML = "text/html";

/* port */
var port = 8080;

/** begin **/
var app = express();
app.use(favicon(path.join(__dirname, 'client', 'favicon.ico')));
app.use(express.static(__dirname + '/client'));


/** REST Ful **/
/* GET - return f(vector)*/
/*app.get('/result/', function(req, res) {
    res.send(["1", "2", "3", "4"]);
    console.log('debug');
});*/

/* POST - store vector*/
/*app.post('/vector', function(req, res, next) {
    next();
});*/

/* PUT - update vector*/
/*app.put('/point/:x/:y', function(req, res, next) {
    next();
});*/

/*launch Server0*/
app.listen(port);

/*log*/
console.log("server started on port " + port);
