const autores = require('../models/Autor.js');

class autorController {
    
    static listarAutores = async (req, res, next) => {
        try {
            const resultados = await autores.find();
            res.status(200).json(resultados);
        } catch (erro) {
            next(erro);
        }
    }

    static listarPorId = async (req, res, next) => {
        try {
            const id = req.params.id;
            const autor = await autores.findById(id).exec();

            if(autor !== null) {
                res.status(200).json(autor);
            } else {
                res.status(404).json({ message: 'Autor não encontrado'});
            }
        } catch (erro) {
            next(erro);
        }
    }

    static cadastrarAutor = async (req, res, next) => {
        try {
            const autor = new autores(req.body);
            await autores.create(autor);
            res.status(201).send(autor.toJSON());
        } catch (erro) {
            next(erro);
        }
    }

    static atualizarAutor = async (req, res, next) => {
        try {
            const id = req.params.id;

            await autores.findByIdAndUpdate(id, {$set: req.body});
            res.status(200).send(`autor com id ${id}, atualizado com sucesso!`);
        } catch (erro) {
            next(erro); 
        }
    }

    static deletarAutor = async (req, res, next) => {
        try {
            const id = req.params.id;

            await autores.findByIdAndDelete(id);
            res.status(200).send(`autor com id ${id}, deletado com sucesso!`);
        } catch (erro) {
            next(erro);
        }
    }
}

module.exports = autorController;
