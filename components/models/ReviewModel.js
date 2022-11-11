const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const reviewModel = new Schema({
    id: { type: ObjectId},
    content: {type: String, required: true},
    user_id: {type: Schema.Types.ObjectId, ref: 'user'},
    product_id: {type: Schema.Types.ObjectId, ref: 'product'}
}, { timestamps})

module.exports = mongoose.model('review', reviewModel);

