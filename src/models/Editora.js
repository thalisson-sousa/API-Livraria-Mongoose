const mongoose = require('mongoose');

const editoraSchema = new mongoose.Schema(
    {
        id: {type: String},
        nome: {type: String, required: true},
        localidade: {type: String},
    },
    {
        versionKey: false,
    }
)

const editora = mongoose.model("editoras", editoraSchema);

module.exports = editora;
