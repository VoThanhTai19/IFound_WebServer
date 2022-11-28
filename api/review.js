const express = require('express')
const router = express.Router();
const reviewController = require('../components/controllers/ReviewController')

router.post('/store', async (req, res, next) => {
    try{
        const review = await reviewController.insert(req.body);
        res.status(200).json(review)
    }catch(err) {
        res.status(401).json(err);
    }

})

router.get('/:id/review-by-product', async (req, res) => {
    try{
        const review = await reviewController.getReviewByProduct(req.params.id);
        res.status(200).json(review)
    }catch(err) {
        res.status(401).json(err)
    }
})

router.get('/:id/review-by-user', async (req, res) => {
    try{
        const review = await reviewController.getReviewByProduct(req.params.id);
        res.status(200).json(review)
    }catch(err) {
        res.status(401).json(err)
    }
})

router.get('/review', async (req, res, next) => {
    try{
        const review = await reviewController.getReview();
        res.status(200).json(review)
    }catch(err) {
        res.status(401).json(err)
    }
})

module.exports = router;
