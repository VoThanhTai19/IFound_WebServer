const express = require('express')
const router = express.Router()

const categoryController = require('../components/controllers/CategoryController')

//lấy danh sách loại sản phẩm
router.get('/get-categories', async function (req, res, next) {
    try {
        const categories = await categoryController.getCategories();
        res.status(200).json(categories);
    }catch(err) {
        res.status(401).json(err);
    }
})

router.get('/:id/get-category', async (req, res) => {
    try {
        const category = await categoryController.getCategoryById(req.params.id);
        res.status(200).json(category);
    }catch(err) {
        res.status(401).json(err);
    }
})


module.exports = router;
