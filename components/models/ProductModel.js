const mongoose = require('mongoose')
const Schema = mongoose.Schema; 
const ObjectId = Schema.ObjectId;

const productSchema = new Schema({
    id: { type: ObjectId}, 
    name: { type: String },
    price: { type: Number},
    image: { type: String },
    category_id: { type: Schema.Types.ObjectId, ref: 'category'},
    status: {type: String},
    description: {type: String},
}, { timestamps: true })

module.exports = mongoose.model('product', productSchema);
