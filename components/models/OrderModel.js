const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const orderSchema = new Schema({

}, { timestamps:true })

module.exports = mongoose.model('order', orderSchema);
