const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = {
  generateAccessToken(userId) {
    const payload = {
      user: {
        id: userId,
      },
    };

    return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: '30m',
    });
  },

  generateRefreshToken(userId) {
    const payload = {
      user: {
        id: userId,
      },
    };

    return jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, {
      expiresIn: '14d',
    });
  },
};
