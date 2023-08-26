const editoras = require('../models/Editora.js');

class editoraController {
    
    static listarEditoras = async (req, res) => {
        try {
            const resultados = await editoras.find();
            res.status(200).json(resultados);
        } catch (erro) {
            console.error(erro);
            res.status(500).json({ erro: 'Ocorreu um erro ao buscar os editoras' });
        }
    }

    static listarPorId = async (req, res) => {
        try {
            const id = req.params.id;

            const editora = await editoras.findById(id).exec();
            res.status(200).json(editora);
        } catch (error) {
            res.status(400).json({ erro: 'Ocorreu um erro ao buscar os editoras' + `${error}` });
        }
    }

    static cadastrarEditora = async (req, res) => {
        try {
            const editora = new editoras(req.body);
            await editoras.create(editora);
            res.status(201).send(editora.toJSON());
        } catch (error) {
            (err) => {
                res.status(500).json({message: `Ocorreu um erro na criação do editora: ${error}`});                
            }
        }
    }

    static atualizarEditora = async (req, res) => {
        try {
            const id = req.params.id;

            await editoras.findByIdAndUpdate(id, {$set: req.body});
            res.status(200).send(`editora com id ${id}, atualizado com sucesso!`);
        } catch (error) {
            res.status(500).json({message: `Ocorreu um erro na atualização do editora: ${error}`}); 
        }
    }

    static deletarEditora = async (req, res) => {
        try {
            const id = req.params.id;

            await editoras.findByIdAndDelete(id);
            res.status(200).send(`editora com id ${id}, deletado com sucesso!`);
        } catch (error) {
            res.status(400).json({message: `Ocorreu um erro ao deletar o editora: ${error}`}); 
        }
    }
}

module.exports = editoraController;
