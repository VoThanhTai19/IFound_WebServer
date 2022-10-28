const categoryModel = require('../models/CategoryModel')

exports.getCategories = async () => {
    const categories = await categoryModel.find();
    return categories;
}

exports.getCategoryById = async (id) => {
    const category = await categoryModel.findById(id);
    return category;
}

exports.insert = async (body) => {
    console.log(body)
    const category = new categoryModel({
        name: body.category,
        description: body.desc
    })
    await category.save()
}

exports.update = async (id, body) => {
    await categoryModel.updateOne(id, {
        name: body.category,
        description: body.desc
    })
}

exports.delete = async (id) => {
    await categoryModel.deleteOne(id)
}

