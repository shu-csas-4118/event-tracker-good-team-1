let express = require('express');
let path = require('path');
let logger = require('morgan');
let cookieParser = require('cookie-parser');
let bodyParser = require('body-parser');
let MongoDB = require('./models/db');
let book = require('./controllers/book/index');
let confirmation = require('./controllers/confirmation/index');
let homepage = require('./controllers/home/index');
let login = require('./controllers/login/index');
let register = require('./controllers/register/index');
let searchResults = require('./controllers/searchResults/index');
let Account = require('./models/account');
let passport = require('passport');
let LocalStrategy = require('passport-local').Strategy;
let session = require('express-session');

let app = express();


app.use(session({secret: 'i really love dr racket'}));



let strat = new LocalStrategy({}, function(username, password, next){
    Account.findOne({'username' : username}, function(error, account){
      if(error)
        return next(error);
      if(!account || !account.passwordMatches(pass))
        return next(null, false);
      else
        return next(null, account);
    })
  }
);

passport.serializeUser((user, next) => next(null, user._id));

passport.deserializeUser((id, next) => Account.findById(id, (err, user) => next(err, user)));

//authentication setup
passport.use(strat);
app.use(passport.initialize());
app.use(passport.session());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', homepage);
app.use('/login', login);
app.use('/events', searchResults);

const acc = new Account();

acc.username = "ghostocean52";
acc.password = "Adriano14";
acc.address = "A Place";

console.log(acc);

acc.save();


app.listen(8080);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
