const MongoClient = require('mongodb').MongoClient;
const databaseURL = "mongodb://localhost:27107";

let mongoDB;

MongoClient.connect(databaseURL, function(err, client){

  if(!err)
    console.log("Connected!");

  client.createCollection('accounts', {strict:true}, function(err, collection) {
    console.log("Created collection!");
  });

  mongoDB = client.db();

});

