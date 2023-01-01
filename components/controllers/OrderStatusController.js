const orderStatusModel = require('../models/OrderStatusModel')

exports.getOrderStatus = async() => {
    const orderStatus = await orderStatusModel.find();
    return orderStatus;s
}

exports.insert = async(body) => {
    await orderStatusModel.create({
        name: body.name,
        description: body.desc
    })
}