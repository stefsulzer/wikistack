
var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.redirect('/');
  res.end(); // DON"T LEAVE IT HANGING
});

router.post('/', function(req, res, next) {
  // req.body
  // res.('addpage');
  next();
});

router.get('/add', function(req, res, next) {
  res.render('addpage');
  next();
});

module.exports = router;
//DONT FORGET TO EXPORT YOUR BITS AND PIECES
