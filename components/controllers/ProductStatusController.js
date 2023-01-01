const productStatusModel = require('../models/ProductStatusModel');

exports.getProductStatus = async() => {
    const productStatus = await productStatusModel.find();
    return productStatus;s
}

exports.insert = async(body) => {
    await productStatusModel.create({
        name: body.name,
        description: body.desc
    })
}


