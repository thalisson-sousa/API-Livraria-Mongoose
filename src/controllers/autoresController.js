const autores = require('../models/Autor.js');

class autorController {
    
    static listarAutores = async (req, res) => {
        try {
            const resultados = await autores.find();
            res.status(200).json(resultados);
        } catch (erro) {
            console.error(erro);
            res.status(500).json({ erro: 'Ocorreu um erro ao buscar os autores' });
        }
    }

    static listarPorId = async (req, res) => {
        try {
            const id = req.params.id;

            const autor = await autores.findById(id).exec();
            res.status(200).json(autor);
        } catch (error) {
            res.status(400).json({ erro: 'Ocorreu um erro ao buscar os autores' + `${error}` });
        }
    }

    static cadastrarAutor = async (req, res) => {
        try {
            const autor = new autores(req.body);
            await autores.create(autor);
            res.status(201).send(autor.toJSON());
        } catch (error) {
            (err) => {
                res.status(500).json({message: `Ocorreu um erro na criação do autor: ${error}`});                
            }
        }
    }

    static atualizarAutor = async (req, res) => {
        try {
            const id = req.params.id;

            await autores.findByIdAndUpdate(id, {$set: req.body});
            res.status(200).send(`autor com id ${id}, atualizado com sucesso!`);
        } catch (error) {
            res.status(500).json({message: `Ocorreu um erro na atualização do autor: ${error}`}); 
        }
    }

    static deletarAutor = async (req, res) => {
        try {
            const id = req.params.id;

            await autores.findByIdAndDelete(id);
            res.status(200).send(`autor com id ${id}, deletado com sucesso!`);
        } catch (error) {
            res.status(400).json({message: `Ocorreu um erro ao deletar o autor: ${error}`}); 
        }
    }
}

module.exports = autorController;
