const express = require('express')
const router = express.Router();

const userController = require('../components/controllers/UserController');


router.delete('/:id', async function (req, res) {
    await userController.delete({_id: req.params.id})
    res.redirect('back');
})

router.get('/', async function (req, res, next) {
    const users = await userController.getUsers();
    res.render('users', { users })
})

module.exports = router;
