const express = require('express');
const criandoCartaoController = require('../controllers/cartao/criandoCartaoController');









const cartaoRouter = express.Router()

cartaoRouter.post("/cartao", criandoCartaoController)









module.exports = cartaoRouter