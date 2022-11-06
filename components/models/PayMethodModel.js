const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const payMethodSchema = new Schema({
    id: {type: ObjectId},
    name: {type: String, required: true},
    description: {type: String}
}, { timestamps})

module.exports = mongoose.model('payMethod', payMethodSchema)

