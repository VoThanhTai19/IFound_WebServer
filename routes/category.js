const express = require('express');
const router = express.Router();

const categoryController = require('../components/controllers/CategoryController')
const productController = require('../components/controllers/ProductController')

router.get('/insert', function (req, res, next) {
    res.render('category_insert')
})

router.post('/store', async function (req, res, next) {
    await categoryController.insert(req.body);
    res.redirect('/categories')
}) 

router.get('/:id/edit', async function (req, res, next) {
    const category = await categoryController.getCategoryById(req.params.id);
    res.render('category_edit', { category: category})
})

router.put('/:id', async function (req, res, next) {
    await categoryController.update({_id: req.params.id}, req.body);
    res.redirect('/categories')
})

router.delete('/:id', async function (req, res, next) {
    await categoryController.delete({_id: req.params.id})
    res.redirect('back')
})

router.get('/:id/get-products', async function (req, res, next) {
    const getProducts = await productController.getProductsByCategoryId(req.params.id);
    res.render('products_by_category', {getProducts})
}) 

router.get('/', async function (req, res) {
    const categories = await categoryController.getCategories();
    res.render('categories', {
        category: categories
    });
})

module.exports = router;
