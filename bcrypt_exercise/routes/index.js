var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'BCrypt Testing' });
});

router.get('/home', function (req, res, next){
  var username = req.session.user
  res.render('users/home', {  title: 'Welcome', user: username})
})

module.exports = router;
