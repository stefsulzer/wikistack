
var express = require('express');
var router = express.Router();
var models = require('../models');
var Page = models.Page;
var User = models.User;

router.get('/', function(req, res, next) {
  res.redirect('/'); // REDIRECT TAKES FULL ROUTE PATH AFTER SERVER HOST
  res.end(); // DON"T LEAVE IT HANGING
});

// router.post('/add', function(req, res, next) {
//   if(!req.body) return res.sendStatus(400);
//   console.log(Object.keys(req.body));
//   res.json(req.body);//res.json sets headers?

//   // res.redirect('/');
//   // //this tries to change the headers, for which we get an error: Can't set headers after they are sent
//   // next();
// });

router.post('/', function(req, res, next) {
  if(!req.body) return res.sendStatus(400);



  var page = Page.build({
    title: req.body.title,
    content: req.body.content
  });

  // console.log(page.urlTitle); // THIS IS UNDEFINED


  // STUDENT ASSIGNMENT:
  // make sure we only redirect *after* our save is complete!
  // note: `.save` returns a promise or it can take a callback.
  page.save().then( function(page){
    console.log('/' + page.urlTitle);
    res.redirect('/wiki/' + page.urlTitle);
    // res.json(req.body);
  });

});

router.get('/add', function(req, res, next) {
  res.render('addpage');
  next();
});

router.get('/:urlTitle', function(req, res) {
  res.send(req.params.urlTitle);
});

module.exports = router;
//DONT FORGET TO EXPORT YOUR BITS AND PIECES
