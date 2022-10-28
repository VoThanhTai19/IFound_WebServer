const express = require('express')
const router = express.Router();

const categoryController = require('../components/controllers/CategoryContoller');
const productController = require('../components/controllers/ProductController');

router.get('/insert', async function (req, res, next){
    const categories = await categoryController.getCategories();
    res.render('product_insert', {category: categories})
})

router.post('/store', async function (req, res, next){
    await productController.insert(req.body);
    res.redirect('/products')
})

router.get('/:id/edit', async function (req, res, next){
    const product = await productController.getProductById(req.params.id)
    const categories = await categoryController.getCategories();
    res.render('product_edit', {product: product, categories: categories});
})

router.put('/:id', async function (req, res, next) {
    await productController.update({_id: req.params.id}, req.body)
    res.redirect('/products')
})

router.delete('/:id', async function (req, res, next) {
    await productController.delete({_id: req.params.id})
    res.redirect('back')
})

router.get('/', async function (req, res){
    const products = await productController.getProducts();
    res.render('products', {product: products})
})

module.exports = router;
