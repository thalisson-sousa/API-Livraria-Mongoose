const express = require('express');
const livros = require('./livrosRoutes');
const autores = require('./autoresRoutes');
const editoras = require('./editoraRoutes');

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send("Curso Node")
    })

    app.use(
        express.json(),
        livros,
        autores,
        editoras,
    )
}

module.exports = routes;