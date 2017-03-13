
var express = require('express');
var router = express.Router();
var models = require('../models');
var Page = models.Page;
var User = models.User;

router.get('/', function(req, res, next) {
  res.redirect('/');
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

router.post('/add', function(req, res, next) {
  if(!req.body) return res.sendStatus(400);

  var page = Page.build({
    title: req.body.title,
    content: req.body.content
  });



  // STUDENT ASSIGNMENT:
  // make sure we only redirect *after* our save is complete!
  // note: `.save` returns a promise or it can take a callback.
  page.save().then( function(){
    res.redirect('/');
  });
});

router.get('/add', function(req, res, next) {
  res.render('addpage');
  next();
});

module.exports = router;
//DONT FORGET TO EXPORT YOUR BITS AND PIECES
