
'use strict';

const expect = require('chai').expect;
const mongoose = require('mongoose');
const config = require('../config/env/development');
const Ticket = require("../models/ticket");

describe('Tests for Ticket creation', () => {

	before((done) => {
		const db = mongoose.connect(config.mongodb.url);
		done();
	});

	after((done) => {
		mongoose.connection.close();
		done();
	});

	beforeEach((done) => {
		var t = new Ticket({
            firstName: 'Yukti',
            lastName: 'Gaur',
            email:'yukti.gaur@student.shu.edu',
		});

		t.save((error) => {
			if (error) console.log('error ' + error.message);
			done();
		});
	});

	it('should check if the firstname matches', (done) => {
		Ticket.findOne({ firstName : "Yukti" }, (err, t) => {
			expect(t.firstName).to.eql("Yukti");
			done();
		});
	});
	
	it('should find account my emailID', (done) => {
		Ticket.findOne({ email:'yukti.gaur@student.shu.edu' }, (err, t) => {
			expect(t.email).to.eql("yukti.gaur@student.shu.edu");
			done();
		});
	});
	
		
	afterEach((done) => {
		Ticket.remove({}, () => {
			done();
		});
	});
	
});
