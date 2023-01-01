const mongoose = require('mongoose') 
const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

const cartSchema = new Schema({
    id: { type: ObjectId },
    user_id: { type: Schema.Types.ObjectId,  ref: 'user' },
    product: [{
        id: { type: ObjectId },
        product_id: { type: Schema.Types.ObjectId, ref: 'product'},
        quantity: { type: Number },
        price: { type: Number }
    }],
    total_price: { type: Number }
}, {timestamps:true})

module.exports = mongoose.model('cart', cartSchema)
