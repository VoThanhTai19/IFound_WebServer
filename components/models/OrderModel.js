const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const orderSchema = new Schema({
    id: { type: ObjectId}
}, { timestamps:true })

module.exports = mongoose.model('order', orderSchema);
