const MongoClient = require('mongodb').MongoClient;
const databaseURL = "mongodb://127.0.0.1:27017";

let _db;

const connectToServer = function(callback){
  MongoClient.connect(databaseURL, function (err, db){

    if(err) console.error(err);
    else{
      _db = db.db();

      _db.createCollection('accounts', function(err, collection){
        if(err)
          console.error(err);
        else console.log("\nCollection 'accounts' has been created!");
      });

      _db.createCollection('events', function (err, collection) {
        if(err)
          console.log(err);
        else console.log("\nCollection 'events' has been created!");
      });

      return callback(err);
    }

  });
};

const getDB = () => _db;

module.exports = { connectToServer, getDB };
