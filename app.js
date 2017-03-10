'use strict';

var express = require('express');
var router = express.Router();
var morgan = require('morgan');
var nunjucks = require('nunjucks');
var bodyParser = require('body-parser');
// var makesRouter = require('./routes');
// var fs = require('fs');
var path = require('path');
var app = express();

// templating boilerplate setup
app.engine('html', nunjucks.render); // how to render html templates
app.set('view engine', 'html'); // what file extension do our templates have
nunjucks.configure('views', { noCache: true }); // where to find the views, caching off

// logging middleware
app.use(morgan('dev'));

// body parsing middleware
app.use(bodyParser.urlencoded({ extended: true })); // for HTML form submits
app.use(bodyParser.json()); // would be for AJAX requests

// start the server
var server = app.listen(1337, function(){
  console.log('listening on port 1337');
});

app.use(express.static(path.join(__dirname, '/public')));

app.get('/', function(req, res) {
  res.render('index');
});
