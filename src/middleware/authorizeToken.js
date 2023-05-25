const jwt = require('jsonwebtoken');

module.exports = {
  verifyAccessToken(req, res, next) {
    // Pega o token dos headers (cabeçalho) da requisição
    const authHeader = req.headers.authorization;
    // Remove o prefixo 'Bearer' do token caso houver. Exemplo: 'Bearer eyJhbGciOiJIUzI1Ni' => 'eyJhbGciOiJIUzI1Ni'
    const accessToken = authHeader && authHeader.split(' ')[1];

    // Retorna erro caso token não tenha sido inserido
    if (!accessToken) {
      return res.status(403).json({ msg: 'token not provided' });
    }

    try {
      // Verifica se o token é válido e retorna os dados extraídos do token (no caso, o id do usuário)
      const verify = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);

      // Cria uma propriedade user no objeto da requisição e guarda nela as informações extraídas do token (no caso, o id do usuário)
      req.user = verify.user;

      // Vai para a próxima funcão/endpoint/funcão do controller espeficiado no arquivo de rotas
      next();
    } catch (err) {
      // Retorna mensagem de erro com status 401 caso o try/catch pegue algum erro
      res.status(401).json({ msg: 'invalid token' });
    }
  },

  verifyRefreshToken(req, res, next) {
    // Pega o token do req.body (corpo da requisição)
    const { refreshToken } = req.body;

    // Retorna erro caso token não tenha sido inserido
    if (!refreshToken) {
      return res.status(403).json({ msg: 'authorization denied' });
    }

    try {
      // Verifica se o token é válido e retorna os dados extraídos do token (no caso, o id do usuário)
      const verify = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);

      // Cria uma propriedade user no objeto da requisição e guarda nela as informações extraídas do token (no caso, o id do usuário)
      req.user = verify.user;

      // Vai para a próxima funcão/endpoint/funcão do controller espeficiado no arquivo de rotas
      next();
    } catch (err) {
      // Retorna mensagem de erro com status 401 caso o try/catch pegue algum erro
      res.status(401).json({ msg: 'invalid token' });
    }
  },
};
