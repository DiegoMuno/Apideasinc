const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var UserSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    role: String
});
module.exports = mongoose.model('User', UserSchema);