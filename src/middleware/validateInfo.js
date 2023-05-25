module.exports = (req, res, next) => {
  const { email, name, password } = req.body;

  // Retorna true se o email for valido
  function isValidEmail(userEmail) {
    // Regex (expressão regular) que verifica se o email tem @ e .com
    return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(userEmail);
  }

  // Se estiver na rota /register (rota de criar conta)
  if (req.path === '/register') {
    // Retorna erro se os campos email, nome  e senha nao foram inseridos
    if (![email, name, password].every(Boolean)) {
      res.status(401).json('Missing Credentials');
    }

    // Retorna erro se a função isValidEmail retornar false, indicando que o email é invalido
    if (!isValidEmail(email)) {
      return res.status(401).json('Invalid Email');
    }
  }
  // Se estiver na rota /login (rota de criar conta)
  else if (req.path === '/login') {
    // Retorna erro se os campos email e senha nao foram inseridos
    if (![email, password].every(Boolean)) {
      return res.status(401).json('Missing Credentials');
    }

    // Retorna erro se a função isValidEmail retornar false, indicando que o email é invalido
    if (!isValidEmail(email)) {
      return res.status(401).json('Invalid Email');
    }
  }

  // Vai para a próxima funcão/endpoint/funcão do controller espeficiado no arquivo de rotas
  next();
};
