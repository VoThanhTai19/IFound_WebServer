const express = require('express')
const router = express.Router()

const productController = require('../components/controllers/ProductController');

//Lấy danh sách tất cả sản phẩm
router.get('/products', async function (req, res, next) {
    const products = await productController.getProducts();
    res.status(200).json(products) 
}) 

//Lấy chi tiết sản phẩm
router.get('/:id/product-detail', async function (req, res, next) {
    const product = await productController.getProductById(req.params.id)
    res.status(200).json(product)
}) 

//Lấy danh sách sản phẩm theo loại sản phẩm
router.get('/:id/products-by-category', async function (req, res, next) {
    const products = await productController.getProductsByCategoryId(req.params.id);
    res.status(200).json(products)
})

//Tìm kiếm sản phẩm
router.post('/product/search', async function (req, res, next) {
    const product = await productController.searchProduct(req.body.name);
    res.status(200).json(product);
})

module.exports = router;
