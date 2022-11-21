const express = require('express');
const router = express.Router();
const orderController = require('../components/controllers/OrderController');

router.get('/orders', async (req, res) => {
    try{
        const orders = await orderController.getOrders();
        res.status(200).json({status: true, orders})
    }catch(err) {
        res.status(401).json(err)
    }
})

router.post('/store', async (req, res, next) => {
    try{
        const order = await orderController.insert(req.body);
        res.status(200).json({status: true, order});
    }catch(err) {
        res.status(401).json(err)
    }
})

module.exports = router;
