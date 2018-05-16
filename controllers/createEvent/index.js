const express = require('express');
const router = express.Router();
const path = require('path');
const Event = require('../../models/event');
//const mongoose = require('mongoose');

router.get('/',
  (req, res, next) => res.status(200).render(path.join(__dirname, "views/createEvent"), { /*USER ID*/id: req.session.user,
    title: "Create an event!"})
);

router.post('/', function(req, res, next){
    let body = req.body;
    let user = req.user;

    const ev = new Event();

    ev.name = body.eventName;
	ev.time = body.eventDate;
	ev.capacity = body.eventCapacity;
	ev.attendees = [];
	ev.place = body.eventLocation;
	ev.price = body.eventPrice;

    try{
        ev.save();
    }catch(e){
        console.warn("Event could not be saved!");
    }

    res.redirect('/');
});

module.exports = router;