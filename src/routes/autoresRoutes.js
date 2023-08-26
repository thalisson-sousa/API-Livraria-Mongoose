const express = require('express');
const autoresController = require('../controllers/autoresController.js');

const router = express.Router();

router
    .get('/autores', autoresController.listarAutores)
    .get('/autores/:id', autoresController.listarPorId)
    .post('/autores', autoresController.cadastrarAutor)
    .put('/autores/:id', autoresController.atualizarAutor)
    .delete('/autores/:id', autoresController.deletarAutor)
module.exports = router;