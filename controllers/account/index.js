const express = require('express');
const path = require('path');
const router = express.Router();
const Ticket = require('../../models/ticket');
const Event = require('../../models/event');

router.get('/', function(req, res){

  let events = [];
  const myid = req.user.id;
  Ticket.find({userid: myid}, function(err, tickets){

    for(let i = 0; i < tickets.length; i++){

        Event.findById(tickets[i].eventId, (err, event) => {
            console.log("Pulling event with id: " + event._id);
            events.push(event);
        })
    }
  });
  res.status(200).render(path.join(__dirname, 'views/account'), {events: events})
});

module.exports = router;
