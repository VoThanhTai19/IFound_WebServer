const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;

const productDetailSchema = new Schema({
    id: {type: ObjectId},
    product_id: {type: Schema.Types.ObjectId, ref: 'product'},
    quantity: {type: Number},
    status: {type: String},
    description: {type: String},
}, { timestamps: true })

module.exports = mongoose.model('product-detail', productDetailSchema)
