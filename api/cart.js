const express = require('express')
const router = express.Router();

const cartController = require('../components/controllers/CartController');

router.get('/carts', async (req, res) => {
    try {
        const cart = await cartController.getCarts();
        res.status(200).json(cart);
    }catch(err) {
        res.status(400).json(err)
    }
})

router.get('/:id/cart', async (req, res) => {
    try {
        const cart = await cartController.getCart(req.params.id);
        res.status(200).json(cart);
    }catch(err) {
        res.status(400).json(err)
    }
}) 

router.post('/store', async (req, res) => {
    try {
        const cart = await cartController.insert(req.body);
        res.status(200).json(cart);
    }catch(err) {
        res.status(400).json(err)
    }
})

module.exports = router;
