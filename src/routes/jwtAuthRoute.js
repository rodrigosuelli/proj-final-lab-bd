const express = require('express');
const authController = require('../controllers/authController');
const validateInfo = require('../middleware/validateInfo');
const {
  verifyRefreshToken,
  verifyAccessToken,
} = require('../middleware/authorizeToken');

// Inicia um novo Router do express
const router = express.Router();

// Cadastro/criar conta
router.post('/register', validateInfo, authController.createUser);

// Login
router.post('/login', validateInfo, authController.signinUser);

// Pedir novo access token a partir do refresh-token
router.post('/refresh-token', verifyRefreshToken, authController.refreshToken);

// Mudar senha
router.post(
  '/change-password',
  verifyAccessToken,
  authController.changePassword
);

// Verificar se está logado
router.get('/verify', verifyAccessToken, authController.verify);

// exporta o objeto router
module.exports = router;
