const mongoose = require('mongoose');
const roomSchema = new mongoose.Schema({
    date_time: { type: Date, required: true },
    time_in: { type: String, required: true }, // Consider using Date type
    time_out: { type: String, required: true }, // Consider using Date type
    building_name: { type: String, required: true },
    room_name: { type: String, required: true },
    user_name: { type: String, required: true },
    phone: { type: String, required: true },
    objective: { type: String, required: true }, // Corrected spelling
    adviser: { type: String, required: true },

}, { timestamps: true, versionKey: false });

module.exports = mongoose.model('room', roomSchema);
