const payMethodModel = require('../models/PayMethodModel')

exports.getPayMethod = async () => {
    const payMethod = await payMethodModel.find();
    return payMethod;
}

exports.insert = async (body) => {
    const payMethod = new payMethodModel({
        name: body.name,
        description: body.description
    })
    return await payMethod.save();
}

