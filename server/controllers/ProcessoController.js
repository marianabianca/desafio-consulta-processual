const processoService = require("../services/ProcessoService");
 
exports.getAllProcessos = async (req, res) => {
  try {
    let processos
    if (req.query.tribunal) {
      processos = await processoService.getProcessosByTribunal(req.query.tribunal);
    } else if (req.query.cnj) {
      processos = await processoService.getProcessosByCNJ(req.query.cnj);
      if (processos.length == 0) {
        res.status(404).json({ error: "Processo não encontrado" })
        return
      }
    } else {
      processos = await processoService.getAllProcessos();
    }
    res.json({ data: processos, status: "success" })
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
    res.json({ data: processo, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateProcesso = async (req, res) => {
  try {
    const processo = await processoService.updateProcesso(req.params.id, req.body);
    res.json({ data: processo, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 
exports.deleteProcesso = async (req, res) => {
  try {
    const processo = await processoService.deleteProcesso(req.params.id);
    res.json({ data: processo, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};