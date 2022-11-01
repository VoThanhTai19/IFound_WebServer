const express = require('express')
const router = express.Router()

const productController = require('../components/controllers/ProductController');

router.get('/products', async function (req, res, next) {
    const products = await productController.getProducts();
    res.status(200).json([products])
})

module.exports = router;
