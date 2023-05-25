const jwt = require('jsonwebtoken');

module.exports = {
  generateAccessToken(userId) {
    // Define quais informações vamos guardar no token, id do usuário nesse caso
    const payload = {
      user: {
        id: userId,
      },
    };

    // "Assina"/Cria e retorna um token valido a partir do payload, secret, e tempo para expirar passados como parametro
    return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: '30m',
    });
  },

  generateRefreshToken(userId) {
    // Define quais informações vamos guardar no token, id do usuário nesse caso
    const payload = {
      user: {
        id: userId,
      },
    };

    // "Assina"/Cria e retorna um token valido a partir do payload, secret, e tempo para expirar passados como parametro
    return jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, {
      expiresIn: '14d',
    });
  },
};
