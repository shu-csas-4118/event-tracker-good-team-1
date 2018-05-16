//Import node utils / middleware
let express = require('express');
let app = express();
let session = require('express-session');
let path = require('path');
let logger = require('morgan');
let cookieParser = require('cookie-parser');
let bodyParser = require('body-parser');
let hbs = require('hbs');

//Import controllers
let book = require('./controllers/book/index');
let confirmation = require('./controllers/confirmation/index');
let homepage = require('./controllers/home/index');
let login = require('./controllers/login/index');
let register = require('./controllers/register/index');
let searchResults = require('./controllers/searchResults/index');
let eventPage = require('./controllers/eventPage/index');
let myEventPage = require('./controllers/myRegisteredEvents/index');
let account = require('./controllers/account/index');
let api = require('./controllers/eventAPI/index');
let createEvent = require('./controllers/createEvent/index');

//Import utilities / models
let passport = require('./models/utils/passport');
let mongoose = require('./models/db');
let Account = require('./models/account');
let Event = require('./models/event');

//Use statements
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
    secret: 'i really love dr racket',
    resave: false,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

app.use(function(req, res, next){
  console.log(`Local variable user is: ${req.user ? req.user.username : undefined}`);
  res.locals.user = req.user;
  next();
});

//Set statements
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

//Controllers / Route setup
app.use('/', homepage);
app.use('/login', login);
app.use('/events', searchResults);
app.use('/account', account);
app.use('/eventPage', eventPage);
app.use('/myEvents', myEventPage);
app.use('/api', api);
app.use('/createEvent', createEvent);

//Launch app
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Node is listening on port: ${port}`));

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
