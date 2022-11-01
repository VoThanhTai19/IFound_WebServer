const express = require('express')
const router = express.Router()

const productDetailController = require('../components/controllers/ProductDetailController');
 
router.get('/:id/detail', async function (req, res, next) {
    await productDetailController.insert({_id: req.params.id})
    const productDetail = await productDetailController.getProductDetail(req.params.id);
    res.render('product_detail', {productDetail})
}) 

router.put('/:id', async function (req, res, next) {
    const product = await productDetailController.update({_id: req.params.id}, req.body)
    res.json(product)
})

module.exports = router
