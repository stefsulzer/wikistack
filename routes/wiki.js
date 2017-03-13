
var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.redirect('/');
  res.end(); // DON"T LEAVE IT HANGING
});

router.post('/add', function(req, res, next) {
  if(!req.body) return res.sendStatus(400);
  console.log(Object.keys(req.body));
  res.json(req.body);
  // res.redirect('/');//this tries to change the headers, for which we get an error: Can't set headers after they are sent
  next();
});

router.get('/add', function(req, res, next) {
  res.render('addpage');
  next();
});

module.exports = router;
//DONT FORGET TO EXPORT YOUR BITS AND PIECES
