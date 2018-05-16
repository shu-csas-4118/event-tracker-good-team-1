const express = require('express');
const path = require('path');
const router = express.Router();
const Event = require('../../models/event');
const Ticket = require('../../models/ticket');
/* GET home page. */


router.get('/:user_id', function(req, res, next){
    const user = req.params._id;
    Ticket.find({user: user }).maxTime(10000).exec(function(err, tickets){
        if(err){
            console.error(err);
            res.status(500).redirect('/error');
        }
        else res.status(200).render(path.join(__dirname, 'views/myRegisteredEvents'), {tickets: tickets});
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
