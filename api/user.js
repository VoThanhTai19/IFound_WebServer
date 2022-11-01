const express = require('express')
const router = express.Router();

router.post('/login', function(req, res, next) {
    res.json({
        message: "Login successfully !!!",
    })
})

module.exports = router;
