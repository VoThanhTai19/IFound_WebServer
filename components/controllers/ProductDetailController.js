
const productDetailModel = require('../models/ProductDetailModel')

exports.getProductDetail = async (id) => {
    const productDetail = await productDetailModel.find({
        product_id: id
    }).populate('product_id')
    return productDetail
}

exports.insert = async (body) => {
    const productDetail = new productDetailModel({
        product_id: body
    })
    await productDetail.save();
}

exports.update = async (id, body) => {
    await productDetailModel.updateOne(id, {
        quantity: body.product_quantity,
        status: body.product_status,
        description: body.product_desc,       
    })
}

exports.delete = async (id) => {
    await productDetailModel.deleteOne(id);
}
