const { default: mongoose } = require('mongoose');

function manipuladorDeErros(erro, req, res, next) {
    if(erro instanceof mongoose.Error.CastError) {
        res.status(400).json({ erro: 'erro ao buscar o autor, favor verifique os dados informados'});
    } else {
        res.status(400).json({ erro: 'Ocorreu um erro ao buscar os autores' + `${erro}` });
    }
}

module.exports = manipuladorDeErros;