let express = require('express');
let router = express.Router();
let passport = require('passport');
//const Event = require('../../models/event').Event;

//var myEvent = new Event({});
/* GET home page. */
router.get('/',

  (req, res, next) => res.render('homeViews/home', { /*USER ID*/id: req.session.user,
    title: "title", element2:"Event2",element3: "event3"})

);

module.exports = router;
