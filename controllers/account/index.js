const express = require('express');
const path = require('path');
const router = express.Router();
const Ticket = require('../../models/ticket');

router.get('/', function(req, res){
  console.log(req.user.id);
  const myid = req.user.id;
  Ticket.find({userid:myid}, function(err, tickets){
    
  let test = [
    {name: "Comp Sci Talk", time: new Date(), place: "Seton Hall University"},
    {name: "Jesse McCartney Concert", time: new Date(), place: "Richie Reagan Athletic Center"},
    {name: "Yankees vs. Red Sox", time: new Date(), place: "Yankee Stadium, Bronx, NY, NY"}

   ];
  res.status(200).render(path.join(__dirname, 'views/account'), {events: tickets})
  });
});

router.put('/', function(req, res){
  //TODO: update the user's list of events.
});

module.exports = router;
