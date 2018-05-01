const mongoose = require("./db");
const Schema = mongoose.Schema;

const EventSchema = new Schema({
    _id: Schema.Types.ObjectId,
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
        type: {},
        required: true
    }
});

const Event = mongoose.model("Event", EventSchema);

module.exports = Event;
