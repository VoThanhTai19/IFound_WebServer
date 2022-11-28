const express = require('express')
const router = express.Router();

const payMethodController = require('../components/controllers/PayMethodController')

router.get('/get-pay-methods', async (req, res) => {
    try {
        const payMethods = await payMethodController.getPayMethods();
        res.status(200).json(payMethods)
    }catch(err) {
        res.status(401).json(err)
    }

})

router.get('/:id/get-pay-method', async (req, res) => {
    try{
        const payMethod = await payMethodController.getPayMethod(req.params.id);
        res.status(200).json(payMethod)
    }catch(err) {
        res.status(401).json(err)
    }
})

module.exports = router;
