let passport = require('passport');
let LocalStrategy = require('passport-local').Strategy;
let Account = require('../account');

passport.use(new LocalStrategy({}, function(username, password, next){
        Account.findOne({'username' : username}, function(error, account){
            if(error)
                return next(error);
            if(!account || !account.passwordMatches(password)){
                return next(null, false);
            }
            else{
                return next(null, account);
            }
        })
    }
));

passport.serializeUser((user, next) => next(null, user._id));

passport.deserializeUser((id, next) => Account.findById(id, (err, user) => next(err, user)));

module.exports = passport;
