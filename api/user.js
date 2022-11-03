const express = require('express')
const router = express.Router();
const userController = require('../components/controllers/UserController')

router.post('/login', async function(req, res, next) {
    try {
        const user = await userController.login(req.body.email, req.body.password)
        res.status(200).json(user)
    }catch(err) {
        res.status(401).json({message: err})
    }
})

router.post('/register', async function(req, res, next) {
    try {
        const user = await userController.register(req.body.email, req.body.password, req.body.confirm_password)
        res.status(200).json(user)
    }catch(err) {
        res.status(401).json({message: err})
    }
})

module.exports = router;
