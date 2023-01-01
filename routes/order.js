const express = require('express')
const router = express.Router()
const orderController = require('../components/controllers/OrderController');
const orderStatusController = require('../components/controllers/OrderStatusController')

router.post('/order-status-store', async(req, res) => {
    const orderStatus = await orderStatusController.insert(req.body);
    res.json(orderStatus)
})

router.get('/:id/edit', async (req, res) => {
    const order = await orderController.getOrder(req.params.id);
    const orderStatus = await orderStatusController.getOrderStatus()
    res.render('order_edit', { order, orderStatus })
})

router.put('/:id', async (req, res) => {
    await orderController.update({_id: req.params.id}, req.body);
    res.redirect('/orders')
})

router.delete('/:id', async (req, res) => {
    await orderController.delete({_id: req.params.id});
    res.redirect('back');
})

router.get('/', async function(req, res){
    const orders = await orderController.getOrders();
    res.render('orders', { orders })
})


module.exports = router;
