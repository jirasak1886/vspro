const mongoose = require('mongoose');

const userschema = new mongoose.Schema(
    {
    user_name: { type: String, required: true },
    password: { type: String, required: true },
    name: { type: String, required: false },
    role: { type: String, required: false }
    },
    {Timestamp : true, versionKey : false}
);
const user = mongoose.model('user',userschema)
module.exports = user;