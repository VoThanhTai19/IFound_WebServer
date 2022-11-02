const express = require('express')
const router = express.Router()

const productController = require('../components/controllers/ProductController');

router.get('/products', async function (req, res, next) {
    const products = await productController.getProducts();
    res.status(200).json(products) 
}) 

router.get('/:id/product-detail', async function (req, res, next) {
    const product = await productController.getProductById(req.params.id)
    res.status(200).json(product)
}) 

router.get('/:id/products-by-category', async function (req, res, next) {
    const products = await productController.getProductsByCategoryId(req.params.id);
    res.status(200).json(products)
})

router.post('/product/search', async function (req, res, next) {

})

module.exports = router;
