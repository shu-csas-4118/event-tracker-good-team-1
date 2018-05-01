'use strict';

const expect = require('chai').expect;
const mongoose = require('../models/db');
const config = require('../config/env/development');
const Event = require("../models/event");
const EventId = mongoose.Types.ObjectId;

describe('Tests for event creation', () => {

	before((done) => {
		const db = mongoose.connect(config.mongodb.url);
		done();
	});

	after((done) => {
		mongoose.connection.close();
		done();
	});

	beforeEach( (done) => {
		var _event = new Event({
			_id: new EventId(),
			name: 'Coachella 2019',
			time: new Date('2019-04-13'),
			capacity: 1000,
			attendees: [],
			place: {}
		});

		_event.save((error) => {
			if (error) console.log('error ' + error.message);
			done();
		});
	});

	it('should find an event based on a search', (done) => {
		Event.findOne({ name : 'Coachella 2019' }, (err,_event) => {
			expect(_event.capacity).to.eql(1000);
			done();
		});
	});
	/*

	it('should check if the password matches', (done) => {
		Account.findOne({ username: 'john_doe' }, (err, account) => {
			expect(account.password).to.eql(hash('password'));
			done();
		});
	});
	*/

	afterEach((done) => {
		Event.remove({}, () => {
			done();
		});
	});
});
