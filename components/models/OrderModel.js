const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const orderSchema = new Schema({
    id: { type: ObjectId},
    user_id: {type: Schema.Types.ObjectId, ref: 'user'},
    pay_method_id: {type: Schema.Types.ObjectId, ref: 'payMethod'},
    cart_id: { type: Schema.Types.ObjectId, ref: 'cart'},
    total_price: {type: Number},
    status: {type: Schema.Types.ObjectId, ref: 'orderStatus'}
}, { timestamps:true })

module.exports = mongoose.model('order', orderSchema);
