const db = require('./db').db;
const hash = require('./utils/hash').hash;

function Account(username, password, address){
    this._username = username || "";
    this._password = hash(password);
    this._address = address || "";

    this.getUsername = () => this._username;
    this.getPasswordDigest = () => this._password;
    this.getAddress = () => this._address;

    this.changeUsername = (user) => this._username = user;
    this.changePassword = (pass) => this._password = hash(pass);

    this.passwordMatches = (pass) => this._password === hash(pass);
}

//Static Functions

Account.getAccountByID = function(){

};

Account.getAccounts = function(){

};


exports.account = Account;
