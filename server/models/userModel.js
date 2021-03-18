const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        trim: true
    },
    tel: {
        type: Number,
        required: true,
        trim: true
    },
    _name: {
        type: String,
        required: true,
        trim: true
    },
    bill: {
        type: Number,
        required: true,
    }
})

const User = mongoose.model('user', UserSchema);
module.exports = User;