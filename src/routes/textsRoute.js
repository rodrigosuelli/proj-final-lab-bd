const express = require('express');
const textsController = require('../controllers/textsController');
const { verifyAccessToken } = require('../middleware/authorizeToken');

// Inicia um novo Router do express
const router = express.Router();

// Retorna todos os textos do usuário
router.get('/', verifyAccessToken, textsController.index);

// Retorna 1 texto a partir do id informado
router.get('/:id', verifyAccessToken, textsController.show);

// Cria 1 novo texto vazio
router.post('/', verifyAccessToken, textsController.create);

// Atualiza 1 texto com novo titulo e conteudo a partir do id informado
router.put('/:id', verifyAccessToken, textsController.update);

// Deleta 1 texto a partir do id informado
router.delete('/:id', verifyAccessToken, textsController.delete);

// exporta o objeto router
module.exports = router;
