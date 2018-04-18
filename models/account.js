const db = require('./db').db;

exports.account = function Account(){
    this.unique_id;
    this.username;
    this.password;
    this.address;

    this.getAccountbyID = function(id){
        console.log(db[id]);
    }

};