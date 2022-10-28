const express = require('express')
const router = express.Router()

const adminController = require('../components/controllers/AdminController')

router.get('/', function (req, res) {
    res.render('login');
})   

router.post('/', function (req, res) {
    const result = adminController.login(req.body.email, req.body.password);
    if(result) {
        res.redirect('/products')
    }else {
        res.redirect('/login')
    }
})

module.exports = router;
 