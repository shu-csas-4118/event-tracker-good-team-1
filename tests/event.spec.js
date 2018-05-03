'use strict';

const expect = require('chai').expect;
const mongoose = require('mongoose');
const config = require('../config/env/development');
const Event = require("../models/event");

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
		var e = new Event({
			name: 'Coachella 2019',
			time: new Date('2019-04-13'),
			capacity: 1000,
			attendees: [],
			place: {},
			price: 440
		});

		e.save((error) => {
			if (error) console.log('error ' + error.message);
			done();
		});
	});

	it('should check if the price matches', (done) => {
		Event.findOne({ name : "Coachella 2019" }, (err, ev) => {
			expect(ev.price).to.eql(440);
			done();
		});
	});
	
	it('should find an event by capacity and return the Coachella event', (done) => {
		Event.findOne({ capacity: 1000 }, (err, ev) => {
			expect(ev.name).to.eql("Coachella 2019");
			done();
		});
	});
	
		
	afterEach((done) => {
		Event.remove({}, () => {
			done();
		});
	});
	
});
