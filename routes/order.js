const express = require('express')
const router = express.Router()
const orderController = require('../components/controllers/OrderController');

router.get('/:id/edit', async (req, res) => {
    const order = await orderController.getOrder(req.params.id);
    res.render('order_edit', { order })
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
