'use strict';

const expect = require('chai').expect;
const mongoose = require('mongoose');
const Account = require("../models/account");

describe('Tests for user account', () => {

	before((done) => {
		const db = mongoose.connect('mongodb://localhost/eventtrack');
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
		Account.findOne({ username: 'john.doe@shu.edu' }, (err, account) => {
			expect(account.username).to.eql('john_doe');
			done();
		});
	});

	/*afterEach((done) => {
		Account.remove({}, () => {
			done();
		});
	});*/
});
