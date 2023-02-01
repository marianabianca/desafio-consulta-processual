const express = require("express");
const {
  getAllProcessos,
  getProcessosByTribunal,
  getProcessoByCNJ,
  createProcesso,
  getProcessoById,
  updateProcesso,
  deleteProcesso,
} = require("../controllers/ProcessoController");

const router = express.Router();

router.route("/")
  .get(getAllProcessos)
  .post(createProcesso);

router.route("/tribunal/:id")
  .get(getProcessosByTribunal)

router.route("/cnj/:id")
  .get(getProcessoByCNJ)

router.route("/:id")
  .get(getProcessoById)
  .put(updateProcesso)
  .delete(deleteProcesso);

module.exports = router;