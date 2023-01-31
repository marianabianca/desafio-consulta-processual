const express = require("express");
const {
  getAllProcessos,
  createProcesso,
  getProcessoById,
  updateProcesso,
  deleteProcesso,
} = require("../controllers/ProcessoController");
 
const router = express.Router();
 
router.route("/")
    .get(getAllProcessos)
    .post(createProcesso);

router.route("/:id")
    .get(getProcessoById)
    .put(updateProcesso)
    .delete(deleteProcesso);
 
module.exports = router;