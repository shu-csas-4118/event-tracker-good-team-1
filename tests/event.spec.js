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

	beforeEach((done) => {
		var _event = new Event({
			_id: new EventId(),
			name: 'Coachella 2019',
			time: new Date('2019-04-13'),
			capacity: 1000,
			attendees: [],
			place: {},
			price: 440
		});

		_event.save((error) => {
			if (error) console.log('error ' + error.message);
			done();
		});
	});

	it('should check if the price matches', (done) => {
		Event.findOne({ name : "Coachella 2019" }, (err, _event) => {
			expect(_event.price).to.eql(440);
			done();
		});
	});
	

	it('should find an event by capacity and return the Coachella event', (done) => {
		Event.findOne({ capacity: 1000 }, (err, _event) => {
			expect(_event.name).to.eql("Coachella 2019");
			done();
		});
	});
	

	afterEach((done) => {
		Event.remove({}, () => {
			done();
		});
	});
});
