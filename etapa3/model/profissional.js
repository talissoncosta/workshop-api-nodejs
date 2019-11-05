const mongoose = require("mongoose");

const ProfissionalSchema = new mongoose.Schema(
  {

    nome: {
      type: String,
      required: true
    },
    email: {
        type: String,
        required: true
      },
    data_nascimento: String,
    genero:String,
    tratamento:String,
    celular:String,
    especialidade:String
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Profissional", ProfissionalSchema);