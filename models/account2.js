import { mongo } from 'mongoose';

var mongoose = require('mongoose');
var Schema = mongoos.Schema;

var accountSchema = new Schema(
    {
        username: String,
        password: String
    }
);

accountSchema.methods.login = function(username, password, callback)
{
    return this.model('users').findOne({username: this.type },callback);
}

module.exports = mongoos.model('users', accountSchema);
