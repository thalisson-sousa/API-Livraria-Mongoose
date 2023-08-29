const express = require('express');
const db = require('./config/dbConnect.js');
const routes = require('./routes/index.js');
const manipuladorDeErros = require('./middlewares/manipuladorDeErros.js');

db.on("erro", console.log.bind(console, 'Erro de conexâo!'))
db.once("open", () => {
    console.log('conexâo com o banco feita com sucesso!')
})

const app = express();

app.use(express.json());

routes(app);

app.use(manipuladorDeErros);

module.exports = app;
