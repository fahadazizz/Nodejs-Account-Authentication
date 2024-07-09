const express = require('express');
const router = express.Router();
const userAccount = require('../Controller/accountController.js');

router.post('/register', userAccount.RegisterUser);

router.post('/login', userAccount.LoginUser);


module.exports = router;