const express = require('express');
const authController = require('../controllers/login-controller.js');

const router = express.Router();

router.post('/login', authController.login);

module.exports = router;
