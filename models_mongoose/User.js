const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const Schema = mongoose.Schema;
const UserSchema = new Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        unique: true,
        required: true
    }
});

// Hash password using passport-local-mongoose plugin
UserSchema.plugin(passportLocalMongoose, { usernameField : 'email' });

module.exports = mongoose.model('User', UserSchema);