const reviewModel = require('../models/ReviewModel');

exports.getReview = async () => {
    const review = await reviewModel.find().populate('product_id').populate('user_id');
    return review;
}

exports.getReviewByProduct = async (productId) => {
    const review = await reviewModel.find({product_id: productId}).populate('product_id').populate('user_id')
    return review
}

exports.getReviewByUser = async (userId) => {
    const review = await reviewModel.find({user_id: userId}).populate('product_id').populate('user_id');
    return review;
}

exports.insert = async (body) => {
    const review = new reviewModel({
        content: body.content,
        user_id: body.user_id,
        product_id: body.product_id,
    })
    return await review.save();
}