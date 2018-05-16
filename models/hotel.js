const hash = require('./utils/hash').hash;
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HotelSchema = new Schema({
   name: {
       type: String,
       max: 15,
       required: true
   },
   city:{
       type: String,
       max: 15,
       required: false
   },
   state:{
    type: String,
    required: false
    },
   
   phoneNumber:{
      type: String,
      required: false
   }
});


const Hotel = mongoose.model('Hotel', HotelSchema);

module.exports = Hotel;
