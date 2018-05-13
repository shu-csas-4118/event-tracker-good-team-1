const express = require('express');
const router = express.Router();
const passport = require('passport');
const path = require('path');
const Account = require('../../models/account');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render(path.join(__dirname, "/views/login"), { title: 'Express2'});
});

router.post('/',
    passport.authenticate('local', {failureRedirect: '/login',}), function(req, res, next){
    res.status(302).redirect('/');
});

router.post('/register', function(req, res, next){
    

});

module.exports = router;
