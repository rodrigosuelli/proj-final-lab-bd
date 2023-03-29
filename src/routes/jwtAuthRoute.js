const express = require('express');
const authController = require('../controllers/authController');

const validateInfo = require('../middleware/validateInfo');
const {
  verifyRefreshToken,
  verifyAccessToken,
} = require('../middleware/authorizeToken');

const router = express.Router();

router.post('/register', validateInfo, authController.createUser);

router.post('/login', validateInfo, authController.signinUser);

router.post('/refresh-token', verifyRefreshToken, authController.refreshToken);

router.get('/verify', verifyAccessToken, authController.verify);

module.exports = router;
