// importa express
const express = require('express');
// importa biblioteca cors
const cors = require('cors');
// inicia biblioteca cors para podermos acessar o arquivo .env no código
require('dotenv').config();

// importa as rotas de autenticação
const jwtAuthRoute = require('./routes/jwtAuthRoute');
// importa as rotas de conteúdo(textos)
const textsRoute = require('./routes/textsRoute');

// Inicia (starta) o express
const app = express();

// Define a porta que vamos usar
const PORT = 3333;

// Fala pro express usar o cors para permitir acesso de outras origins 
app.use(cors());
// Fala pro express aceitar requisições que usam json
app.use(express.json());

// Diz para o express usar as rotas de autenticação no endereço "/api/auth"
app.use('/api/auth', jwtAuthRoute);
// Diz para o express usar as rotas de textos no endereço "/api/texts"
app.use('/api/texts', textsRoute);

// Roda o aplicativo na porta especificada (porta 3333 neste caso)
app.listen(PORT);
