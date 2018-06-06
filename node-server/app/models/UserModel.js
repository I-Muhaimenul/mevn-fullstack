const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// creating user model for db
var UserSchema = new Schema({
    name: {
        type: String,
        Required: 'Please enter name'
    },
    email: {
        type: String,
        Required: 'Please enter email'
    },
    password: {
        type: String,
        Required: 'Please enter password'
    },
    created_at: {
        type: Date,
        default: Date.now
    }
    // timestamps: true
});
// controllers can call this model use Users
module.exports = mongoose.model('User', UserSchema);