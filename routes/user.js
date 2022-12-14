const express = require('express')
const router = express.Router();

const userController = require('../components/controllers/UserController');
const orderController = require('../components/controllers/OrderController');
const reviewController = require('../components/controllers/ReviewController');

router.get('/:id/user-review', async (req, res) => {
    const review = await reviewController.getReviewByUser(req.params.id);
    res.render('user_review', { review })
})

router.delete('/:id', async function (req, res) {
    await userController.delete({_id: req.params.id})
    res.redirect('back');
})

router.get('/', async function (req, res, next) {
    const users = await userController.getUsers();
    res.render('users', { users })
})

router.get('/:id/get-orders', async (req, res, next) => {
    const orders = await orderController.getOrdersByUser(req.params.id);
    res.render('orders_by_user', { orders })
})

module.exports = router;
