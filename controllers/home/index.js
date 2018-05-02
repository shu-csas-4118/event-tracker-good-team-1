var express = require('express');
var router = express.Router();
//const Event = require('../../models/event').Event;

//var myEvent = new Event({});
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('homeViews/home', { title: "title", element2:"Event2",element3: "event3"});
  
});

module.exports = router;
