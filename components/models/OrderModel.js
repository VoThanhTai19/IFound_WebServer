const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const orderSchema = new Schema({
    id: { type: ObjectId},
    user_id: {type: Schema.Types.ObjectId, ref: 'user'},
    pay_method_id: {type: Schema.Types.ObjectId, ref: 'payMethod'},
    product: [{
        id: {type: ObjectId},
        product_id: {type: Schema.Types.ObjectId, ref: 'product'},
        quantity: {type: Number},
        price: {type: Number},
    }],
    total_price: {type: Number},
    status: {type: String}
}, { timestamps:true })

module.exports = mongoose.model('order', orderSchema);
