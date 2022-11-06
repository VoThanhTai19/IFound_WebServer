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
        const user = await userController.register(req.body.name, req.body.email, req.body.password, req.body.confirm_password)
        res.status(200).json(user)
    }catch(err) {
        res.status(401).json({message: err})
    }
})

router.post('/:id/change-password', async function(req, res, next) {
    try {
        const newPassword = await userController.changePassword(
            {_id: req.params.id},
            req.body.new_password,
            req.body.confirm_new_password
        )
        res.status(200).json(newPassword)
    }catch(err) {
        res.status(401).json(err)
    }
})

router.get('/:id/profile', async function (req, res) {
    try{
        const profile = await userController.getProfile(req.params.id);
        res.status(200).json(profile)
    }catch(err) {
        res.status(401).json(err)
    }
})

module.exports = router;
