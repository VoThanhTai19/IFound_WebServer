const express = require('express');
const router = express.Router();
const orderController = require('../components/controllers/OrderController');

router.get('/orders', async (req, res) => {
    try{
        const orders = await orderController.getOrders();
        res.status(200).json(orders)
    }catch(err) {
        res.status(401).json(err)
    }
})

router.get('/:id/order-history', async (req, res) => {
    try{
        const orders = await orderController.getOrdersByUser(req.params.id);
        res.status(200).json(orders)
    }catch(err) {
        res.status(401).json(err)
    }
})

router.post('/store', async (req, res, next) => {
    try{
        const order = await orderController.insert(req.body);
        res.status(200).json(order);
    }catch(err) {
        res.status(401).json(err)
    }
})

module.exports = router;
