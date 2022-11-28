const payMethodModel = require('../models/PayMethodModel')

exports.getPayMethods = async () => {
    const payMethod = await payMethodModel.find();
    return payMethod;
}

exports.getPayMethod = async (id) => {
    const payMethod = await payMethodModel.findById(id);
    return payMethod;
}

exports.insert = async (body) => {
    const payMethod = new payMethodModel({
        name: body.name,
        description: body.description
    })
    return await payMethod.save();
}

