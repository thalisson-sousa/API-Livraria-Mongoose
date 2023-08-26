const express = require('express');
const editoraController = require('../controllers/editoraController');

const router = express.Router();

router.get('/editora', editoraController.listarEditoras)
.get('/editora/:id', editoraController.listarPorId)
.post('/editora', editoraController.cadastrarEditora)
.put('/editora/:id', editoraController.atualizarEditora)
.delete('/editora/:id', editoraController.deletarEditora)

module.exports = router;