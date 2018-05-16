const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EventSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    time: {
        type: Date,
        required: true
    },
    capacity: {
        type: Number,
        required: true,
    },
    attendees: {
        type: [Schema.Types.ObjectId],
        required: true,
    },
    place:{
        type: String,
        required: true
    },
    price:{
	    type: Number,
	    required: true
    }
});

EventSchema.methods.getEventName = function() {
	return this.name;
};

EventSchema.methods.getEventTime = function() {
	return this.time;
};

EventSchema.methods.getEventPrice = function() {
	return this.price;
};

const Event = mongoose.model("Event", EventSchema);

module.exports = Event;
