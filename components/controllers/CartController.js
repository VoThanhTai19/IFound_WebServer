const cartModel = require('../models/CartModel')

exports.getCarts = async () => {
    const carts = await cartModel
        .find()
        .populate('user_id')
        .populate({ path: 'product', populate: { path: 'product_id', populate: {path: 'status'}} });

    return carts;
}

exports.getCart = async (userId) => {
    const cart = await cartModel
        .find({user_id: userId})
        .populate('user_id')
        .populate({ path: 'product', populate: { path: 'product_id' } });

    return cart;
}

exports.insert = async (body) => {
    await cartModel.create({
        user_id: body.user_id,
        product: body.product,
        total_price: body.total_price
    })
}
