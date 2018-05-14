const express = require('express');
const router = express.Router();
const path = require('path');
const Event = require('../../models/event');

router.use(function(req, res, next) {
  console.log(`Accessing api at path ${req.path}`);
  next();
});

router.get('/events', function(req, res){
  Event.find({}, function(err, events){
    if(err)
      res.send(err);
    else res.status(200).json(events);
  });
});

router.get('/events/:user_id', function(req, res){
  const id = req.params.user_id;
  Event.findById(id, function(err, event){
    if(err)
      res.send(err);
    else res.status(200).json(event);
  });
});

module.exports = router;
