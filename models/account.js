const db = require('./db').db;
const hash = require('./utils/hash').hash;
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AccountSchema = new Schema({
   username: {
       type: String,
       max: 15,
       required: true
   },
   password:{
       type: String,
       set: hash,
       required: true
   },
   address:{
       type: String,
       required: true
   }
});

AccountSchema.methods.passwordMatches = function(pass){
    return pass === this.password;
};

AccountSchema.statics.getAccountByID = function(){

};

AccountSchema.statics.getAccounts = function(){

};

const Account = mongoose.model('Account', AccountSchema);

module.exports = Account;
