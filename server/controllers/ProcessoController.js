const processoService = require("../services/ProcessoService");
 
exports.getAllProcessos = async (req, res) => {
  try {
    processos = await processoService.getAllProcessos();
    res.json({ data: processos, status: "success" })
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getProcessosByTribunal = async (req, res) => {
  try {
    processos = await processoService.getProcessosByTribunal(req.params.id);
    res.json({ data: processos, status: "success" })
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getProcessoByCNJ = async (req, res) => {
  try {
    processo = await processoService.getProcessoByCNJ(req.params.id);
    if (!processo) {
      res.status(404).json({ error: "Processo não encontrado" })
    } else {
      res.json({ data: processo, status: "success" })
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 
exports.createProcesso = async (req, res) => {
  try {
    const existsProcesso = await processoService.existsProcesso(req.body.cnj)
    if (existsProcesso) {
      res.status(409).json({ error: "Processo com mesmo CNJ já existe" });
    } else {
      const processo = await processoService.createProcesso(req.body);
      res.json({ data: processo, status: "success" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 
exports.getProcessoById = async (req, res) => {
  try {
    const processo = await processoService.getProcessoById(req.params.id);
    if (!processo) {
      res.status(404).json({ error: "Processo não encontrado" });
    } else{
      res.json({ data: processo, status: "success" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateProcesso = async (req, res) => {
  try {
    const processo = await processoService.updateProcesso(req.params.id, req.body);
    if (!processo) {
      res.status(404).json({ error: "Processo não encontrado" });
    } else{
      res.json({ data: processo, status: "success" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 
exports.deleteProcesso = async (req, res) => {
  try {
    const processo = await processoService.deleteProcesso(req.params.id);
    if (!processo) {
      res.status(404).json({ error: "Processo não encontrado" });
    } else{
      res.json({ data: processo, status: "success" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};