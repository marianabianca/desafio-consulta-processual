const ProcessoModel = require("../models/Processo");
 
exports.getAllProcessos = async () => {
  return await ProcessoModel.find();
};
 
exports.createProcesso = async (processo) => {
  return await ProcessoModel.create(processo);
};

exports.existsProcesso = async (cnj) => {
  return await ProcessoModel.exists({ cnj: cnj })
}

exports.getProcessoById = async (id) => {
  return await ProcessoModel.findById(id);
};
 
exports.updateProcesso = async (id, processo) => {
  return await ProcessoModel.findByIdAndUpdate(id, processo);
};
 
exports.deleteProcesso = async (id) => {
  return await ProcessoModel.findByIdAndDelete(id);
};

exports.getProcessosByCNJ = async (cnj) => {
  return await ProcessoModel.find({ cnj: cnj })
}

exports.getProcessosByTribunal = async (tribunal) => {
  return await ProcessoModel.find({ tribunalOrigem: tribunal })
}