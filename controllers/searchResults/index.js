const express = require('express');
const router = express.Router();
const Event = require('../../models/event');

/* GET home page. */
router.get('/', function(req, res, next) {
  const stuff = ["This is an item", "this is another item"];
  Event.find({}).maxTime(10000).exec(function(err, events){
    if(err){
      console.error(err);
      res.status(500).redirect('/error');
    }
    else res.status(200).render('searchViews/search', {events: events});
  });

});

module.exports = router;
