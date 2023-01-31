const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movimentacaoSchema = new Schema({
    data: {
      type: String,
      required: true
    },
    descricao: {
      type: String,
      required: true
    }
})
 
const processoSchema = new Schema({
  cnj: {
    type: String,
    required: true,
    validate: {
        validator: function(v) {
            var regex = /^[0-9]{7}\-[0-9]{2}\.[0-9]{4}\.[0-9]\.[0-9]{2}\.[0-9]{4}$/;
            return (!v || !v.trim().length) || regex.test(v)
        },
        message: "CNJ inválido"
    }
  },
  autor: {
    type: String,
    required: true
  },
  reu: {
    type: String,
    required: true
  },
  tribunalOrigem: {
    type: String,
    required: true
  },
  dataInicial: {
    type: String,
    required: true
  },
  movimentacoes: {
    type: [movimentacaoSchema],
    required: true
  }
});

module.exports = mongoose.model("Processo", processoSchema);