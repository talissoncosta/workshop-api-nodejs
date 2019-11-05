const express = require('express');
const router = express.Router();

const authController = require('../controller/auth')

router.get('/getauth', authController.gerar_jwt);

module.exports = router;