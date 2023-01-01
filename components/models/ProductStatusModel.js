const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const productStatusSchema = new Schema({
    id: {type: ObjectId},
    name: {type: String, required: true},
    description: {type: String}
}, {timestamps:true})

module.exports = mongoose.model('productStatus', productStatusSchema);
