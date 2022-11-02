const productModel = require('../models/ProductModel')

exports.getProducts = async () => {
    const products = await productModel.find().populate('category_id')
    return products
}

exports.getProductById = async (id) => {
    const product = await productModel.findById(id)
    return product;
}

exports.getProductsByCategoryId = async (categoryId) => {
    const products = await productModel.find({category_id: categoryId}).populate('category_id');
    return products
}

exports.insert = async (body) => {
    const product = productModel({
        name: body.product_name,
        quantity: body.product_quantity,
        price: body.product_price,
        image: body.product_image,
        category_id: body.category_id,
        status: body.product_status,
        description: body.product_desc
    });
    await product.save();
}

exports.update = async (id, body) => {
    await productModel.updateOne(id, {
        name: body.product_name,
        quantity: body.product_quantity,
        price: body.product_price,
        image: body.product_image,
        category_id: body.category_id,
        status: body.product_status,
        description: body.product_desc
    });
}

exports.delete = async (id) => {
    await productModel.deleteOne(id);
}

exports.searchProduct = async (name) => {
    const product = productModel.find({name: name}).populate('category_id')
    return product
}
