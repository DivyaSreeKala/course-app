const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
        userName:String,
        password:String,
        phNo:String
,})


const userData = mongoose.model('user',userSchema);

module.exports = userData;