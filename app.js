'use strict';

var express = require('express');
var router = express.Router();
var morgan = require('morgan');
var nunjucks = require('nunjucks');
var bodyParser = require('body-parser');
var Sequelize = require('sequelize');
var path = require('path');
var models = require('./models');
var app = express();

// var makesRouter = require('./routes');
// var fs = require('fs');


// templating boilerplate setup
app.engine('html', nunjucks.render); // how to render html templates
app.set('view engine', 'html'); // what file extension do our templates have
nunjucks.configure('views', { noCache: true }); // where to find the views, caching off

// logging middleware
app.use(morgan('dev'));

// body parsing middleware
app.use(bodyParser.urlencoded({ extended: true })); // for HTML form submits
app.use(bodyParser.json()); // would be for AJAX requests

app.use(express.static(path.join(__dirname, '/public')));

app.get('/', function(req, res){
  res.render('index');
});

//synchronising up with the models.
models.User.sync({})
.then(function() {
  return models.Page.sync({})
})
.then(function() {
  app.listen(3000, function() {
    console.log('Server is listening on port 3000!');
  });
})
.catch(console.error);
