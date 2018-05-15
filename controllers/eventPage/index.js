const express = require('express');
const router = express.Router();
const path = require('path');
const Event = require('../../models/event');

router.get('/', function(req, res){
  Event.find({}, function(err, events){
    if(err)
      res.send(err);
    else res.status(200).json(events);
  });
});

router.get('/:user_id', function(req, res){
  const id = req.params.user_id;
  Event.findById(id, function(err, event){
    if(err)
      res.send(err);
    else res.status(200).render(path.join(__dirname, 'views/eventPage'), {event: event});
  });
});

module.exports = router;