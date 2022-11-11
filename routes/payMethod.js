const express = require('express')
const router = express.Router();

const payMethodController = require('../components/controllers/PayMethodController');

router.post('/store', async function(req, res) {
    const payMethod = await payMethodController.insert(req.body)
    res.json(payMethod)
})

module.exports = router;