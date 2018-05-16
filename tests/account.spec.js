'use strict';

const expect = require('chai').expect;
const mongoose = require('mongoose');
const config = require('../config/env/development');
const Account = require("../models/account");
const hash = require('../utils/hash').hash;

describe('Tests for user account', () => {

	before((done) => {
		const db = mongoose.connect(config.mongodb.url);
		done();
	});

	after((done) => {
		mongoose.connection.close();
		done();
	});

	beforeEach( (done) => {
		var account = new Account({
			username: 'john_doe',
			password: 'password',
			address: 'john.doe@shu.edu'
		});

		account.save((error) => {
			if (error) console.log('error ' + error.message);
			done();
		});
	});

	it('should find a user by their username', (done) => {
		Account.findOne({ username: 'john_doe' }, (err, acc) => {
			expect(acc.username).to.eql('john_doe');
			done();
		});
	});

	it('should check if the password matches', (done) => {
		Account.findOne({ username: 'john_doe' }, (err, acc) => {
			expect(acc.password).to.eql(hash('password'));
			done();
		});
	});

		
	afterEach((done) => {
		Account.remove({}, () => {
			done();
		});
	});
	
});
