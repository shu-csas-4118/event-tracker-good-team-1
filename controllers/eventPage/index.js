const express = require('express');
const router = express.Router();
const path = require('path');
const Event = require('../../models/event');
const Account = require('../../models/account');
const Ticket = require('../../models/ticket');
const Hotel = require('../../models/hotel');
const mail = require('gmail-send');
const mongoose = require('mongoose');

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
        Hotel.find({}).maxTime(10000).exec(function(err, hotels){
          if(err)
          res.send(err);
        else res.status(200).render(path.join(__dirname, 'views/eventPage'), {event: event, hotels:hotels});
          });
      
    });
  });
router.post('/register', function(req, res, next){
    let body = req.body;
    let user = req.user;

    const ticket = new Ticket();

    ticket.firstName = body.firstName;
    ticket.lastName = body.lastName;
    ticket.email = body.email;
    ticket.eventId = body.idnum;
    ticket.phoneNumber = body.phoneNumber;
    ticket.username = user._id;

    try{
        ticket.save();
    }catch(e){
        console.warn("Ticket could not be saved!");
    }

    Account.findByIdAndUpdate(req.user.id, { $push: {events: ticket._id}}, () => console.log("updated the account."));

    try{
        console.log("Sending emails...");
        let mail = require('gmail-send')({
            user: "eventtracker2@gmail.com",
            pass: "Adriano14",
            to: (user.address === ticket.email) ? user.address : [user.address, ticket.email],
            subject: "Your Ticket Itinerary",
            text: "You purchased a ticket. Nice."
        })({});
    }catch(e){
        console.error("Couldn't send the email properly!");
    }

    res.redirect('/');
});

module.exports = router;