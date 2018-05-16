const express = require('express');
const router = express.Router();
const path = require('path');
const Event = require('../../models/event');
const Ticket = require('../../models/ticket');
const Hotel = require('../../models/hotel');

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
    let user = 
    Ticket.findOne({firstName: body.firstName}, function(error, ticket){
        if(error){
            console.error(error.message);
            }
            let tic = new Ticket();
            tic.firstName = body.firstName;
            tic.lastName = body.lastName;
            tic.eventId = body.idnum;
            tic.userid = body.useridnum;
            //acct.address = body.address;
            //acct.events.push(mongoose.Types.ObjectId('5af3de6bbd6a793388bdf1fe'));

            //console.log(`Adding user ${body.username} to Account store.`);
            tic.save();

            res.status(302).redirect('/');
        
    });

    next();
});


module.exports = router;