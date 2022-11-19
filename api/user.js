const express = require('express')
const router = express.Router();
const userController = require('../components/controllers/UserController')

//Đăng nhập
router.post('/login', async function(req, res, next) {
    try {
        const user = await userController.login(req.body.email, req.body.password)
        res.status(200).json(user)
    }catch(err) {
        res.status(401).json({message: err})
    }
})

//đăng ký
router.post('/register', async function(req, res, next) {
    try {
        const user = await userController.register(req.body.name, req.body.email, req.body.password, req.body.confirm_password)
        res.status(200).json(user)
    }catch(err) {
        res.status(401).json({message: err})
    }
})

//đổi mật khẩu
router.post('/:id/change-password', async function(req, res, next) {
    try {
        const newPassword = await userController.changePassword(
            {_id: req.params.id},
            req.body.new_password,
            req.body.confirm_new_password
        )
        res.json({ status: true, newPassword })
    }catch(err) {
        res.json(err)
    }
})

//lấy thông tin profile
router.get('/:id/profile', async function (req, res) {
    try{
        const profile = await userController.getProfile(req.params.id);
        res.status(200).json(profile)
    }catch(err) {
        res.status(401).json(err)
    }
})

//update profile
router.post('/:id/update-profile', async function(req, res) {
    try{
        const profile = await userController.updateProfile({_id: req.params.id}, req.body);
        res.status(200).json({status: true, profile});
    }catch(err){
        res.status(401).json(err)
    }
})

module.exports = router;
