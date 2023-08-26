const mongoose = require('mongoose');

mongoose.connect(process.env.STRING_CONEXAO_DB);

const db = mongoose.connection;

module.exports = db;