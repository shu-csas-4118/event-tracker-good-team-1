const express = require('express');
const router = express.Router();
const passport = require('passport');
const path = require('path');
const Account = require('../../models/account');
const mongoose = require('../../models/db');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render(path.join(__dirname, "/views/login"), { title: 'Express2'});
});

router.post('/',
    passport.authenticate('local', {failureRedirect: '/login',}), function(req, res, next){
    console.log(`Authenticated user ${req.user.username}`);
    res.status(302).redirect('/');
});

router.post('/register', function(req, res, next){
    let body = req.body;

    Account.findOne({username: body.username}, function(error, account){
        if(error)
            console.error(error.message);
        if(account){
          console.warn('Account already exists!');
          res.status(400).redirect('/login');
        }
        else{
            let acct = new Account();
            acct.username = body.username;
            acct.password = body.password;
            acct.address = body.address;
            acct.events.push(mongoose.Types.ObjectId('5af3de6bbd6a793388bdf1fe'));

            console.log(`Adding user ${body.username} to Account store.`);
            acct.save();

            res.status(302).redirect('/');
        }
    });

    next();
});

module.exports = router;
