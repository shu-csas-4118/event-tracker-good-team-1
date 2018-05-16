const hash = require('./utils/hash').hash;
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TicketSchema = new Schema({
   firstName: {
       type: String,
       max: 15,
       required: true
   },
   lastName:{
       type: String,
       max: 15,
       required: true
   },
   userid:{
    type: String,
    max: 50,
    required: false
    },
   email:{
    type: String,
    required: false
    },
   eventId:{
       type: String,
       required: false
   },
   phoneNumber:{
      type: String,
      required: false
   },
   username:{
    type: String,
    required: false
 }
});


const Ticket = mongoose.model('Ticket', TicketSchema);

module.exports = Ticket;
