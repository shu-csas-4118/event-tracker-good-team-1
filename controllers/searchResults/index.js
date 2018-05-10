const express = require('express');
const path = require('path');
const router = express.Router();
const Event = require('../../models/event');

/* GET home page. */
router.get('/', function(req, res, next) {
  Event.find({}).maxTime(10000).exec(function(err, events){
    if(err){
      console.error(err);
      res.status(500).redirect('/error');
    }
    else res.status(200).render(path.join(__dirname, 'views/search'), {events: events});
  });
});

module.exports = router;
