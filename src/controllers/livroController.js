const livros = require('../models/Livro.js');

class LivroController {
    
    static listarLivros = async (req, res) => {
        try {
            const resultados = await livros.find().populate('autor').populate('editora').exec();
            res.status(200).json(resultados);
        } catch (erro) {
            console.error(erro);
            res.status(500).json({ erro: 'Ocorreu um erro ao buscar os livros' });
        }
    }

    static listarPorId = async (req, res) => {
        try {
            const id = req.params.id;

            console.log(typeof(id))

            const livro = await livros.findById(id).populate('autor', 'nome').populate('editora', 'nome').exec();
            res.status(200).json(livro);
        } catch (error) {
            res.status(400).json({ erro: 'Ocorreu um erro ao buscar os livros' + `${error}` });
        }
    }

    static listarLivroPorEditora = async (req, res) => {
        try {
            const editora = req.query.editora;

            console.log(typeof(editora))

            const livro = await livros.find({'editora': editora}, {}).populate('autor', 'nome').populate('editora', 'nome').exec();
            res.status(200).json(livro);
        } catch (error) {
            res.status(500).json({ message: `${error.message}` });
        }
    }

    static cadastrarLivro = async (req, res) => {
        try {
            const livro = new livros(req.body);
            await livros.create(livro);
            res.status(201).send(livro.toJSON());
        } catch (error) {
            (err) => {
                res.status(500).json({message: `Ocorreu um erro na criação do Livro: ${error}`});                
            }
        }
    }

    static atualizarLivro = async (req, res) => {
        try {
            const id = req.params.id;

            await livros.findByIdAndUpdate(id, {$set: req.body});
            res.status(200).send(`Livro com id ${id}, atualizado com sucesso!`);
        } catch (error) {
            res.status(500).json({message: `Ocorreu um erro na atualização do Livro: ${error}`}); 
        }
    }

    static deletarLivro = async (req, res) => {
        try {
            const id = req.params.id;

            await livros.findByIdAndDelete(id);
            res.status(200).send(`Livro com id ${id}, deletado com sucesso!`);
        } catch (error) {
            res.status(400).json({message: `Ocorreu um erro ao deletar o Livro: ${error}`}); 
        }
    }
}

module.exports = LivroController;
