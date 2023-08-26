const express = require('express');
const LivroController = require('../controllers/livroController.js');

const router = express.Router();

router
    .get('/livros', LivroController.listarLivros)
    .get('/livros/busca', LivroController.listarLivroPorEditora)
    .get('/livros/:id', LivroController.listarPorId)
    .post('/livros', LivroController.cadastrarLivro)
    .put('/livros/:id', LivroController.atualizarLivro)
    .delete('/livros/:id', LivroController.deletarLivro)
module.exports = router;