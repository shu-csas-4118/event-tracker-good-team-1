const mongoose = require('mongoose');
const databaseURL = "mongodb://127.0.0.1:27017";

mongoose.connect(databaseURL).then(console.log(`Mongoose Connection opened on ${databaseURL}`));

mongoose.connection.on('error', (err) => console.log(`There was an error connecting to Mongo. \n${err}`));

mongoose.connection.on('disconnected', () => console.log(`Disconnected from Mongo at port ${databaseURL}`));

process.on('SIGINT', function() {
    mongoose.connection.close(function () {
        console.log('Server shutting down, closing Mongo connection...');
        process.exit(0);
    });
});

module.exports = mongoose;