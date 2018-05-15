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

router.get('/:event', function(req, res, next){
    const event = req.params.event;
    Event.find({name: { $regex: new RegExp(event, 'i') } }).maxTime(10000).exec(function(err, events){
        if(err){
            console.error(err);
            res.status(500).redirect('/error');
        }
        else res.status(200).render(path.join(__dirname, 'views/search'), {events: events});
    });
});

router.post('/', function(req, res, next) {
    if(req.body.event)
        res.status(302).redirect(`events/${req.body.event}`);
    else{
        console.error(`The search bar couldn't find any results. The post body was undefined.`);
        res.status(404).redirect('/error');
    }
});

module.exports = router;
