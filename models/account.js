const hash = require('./utils/hash').hash;
const mongoose = require('./db');
const Schema = mongoose.Schema;

const AccountSchema = new Schema({
   _id: Schema.Types.ObjectId,
   username: {
       type: String,
       max: 15,
       required: true
   },
   password:{
       type: String,
       set: x => hash(x),
       required: true
   },
   address:{
       type: String,
       required: true
   }
});

AccountSchema.methods.passwordMatches = function(pass){
    return hash(pass) === this.password;
};

const Account = mongoose.model('Account', AccountSchema);

module.exports = Account;
