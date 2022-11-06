const express = require('express')
const router = express.Router()

const categoryController = require('../components/controllers/CategoryContoller')

router.get('/get-categories', async function (req, res, next) {
    try {
        const categories = await categoryController.getCategories();
        res.status(200).json(categories);
    }catch(err) {
        res.status(401).json(err);
    }
})


module.exports = router;
