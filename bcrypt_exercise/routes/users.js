var express = require('express');
var router = express.Router();
var db = require('monk')('localhost/bcrypt-testing')
var Users = db.get('users')
var bcrypt = require('bcrypt')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('users/index', {  title: 'Welcome'});
});

router.get('/register', function (req, res, next){
  res.render('users/register', {  title: 'Create new Account'})
})

router.post('/register', function (req, res, next){
  var errors = []
  var hash = bcrypt.hashSync(req.body.password, 10)
  var regularExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;
  if (!req.body.username.trim()){
    errors.push('username cannot be blank')
  }
  if (req.body.password.length < 8 ){
    errors.push('Invalid Password - must be at least 8 characters')
  }
  if (!regularExpression.test(req.body.password)){
    errors.push('Invalid Password - must contain at least one number and one special character')
  }
  if (!req.body.email.match(/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i)){
    errors.push('Invalid Email')
  }
  if (req.body.password !== req.body.pwconfirm){
    errors.push('Passwords must match')
  }
  if (errors.length){
    res.render('users/register', {  title: 'Create new Account', errors: errors})
  } else {
    Users.find({email: req.body.email}, function(err, user){
      if (user.length > 0){
        errors.push('Email already in use')
        res.render('users/register', {  title: 'Create New Account', errors: errors})
      } else {
        Users.insert({  username: req.body.username,
                        email: req.body.email,
                        passwordDigest: hash
                      })
        req.session.user = req.body.username
        res.redirect('/home')
      }
    })
  }
})

router.get('/login', function (req, res, next){
  res.render('users/login', { title: 'Login to Account'})
})

router.post('/login', function (req, res, next){
  var errors = []
  Users.findOne({ email: req.body.email }, function (err, user){
    if (user){
      if (bcrypt.compareSync(req.body.password, user.passwordDigest)){
        req.session.user = user.username
        res.redirect('/home')
      } else {
        errors.push('Invalid Email / Password')
        res.render('users/login', { title: "Login to Account", errors: errors})
      }
    } else {
      errors.push('Invalid Email / Password')
      res.render('users/login', { title: "Login to Account", errors: errors})
    }
  })
})

router.get('/logout', function (req, res, next){
  req.session = null;
  res.redirect('/')
})

module.exports = router;
