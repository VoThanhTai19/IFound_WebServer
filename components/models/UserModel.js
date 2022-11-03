const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const userSchema = new Schema({
    id: {type: ObjectId},
    email: {type: String, required: true},
    password: {type: String, required: true},
    name: {type: String},
    address: {type: String},
    phone: { type: String},
    birthday: {type: Date},
    image: {type: String},
}, {timestamps: true})

module.exports = mongoose.model('user', userSchema);
