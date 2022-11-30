const express = require('express');
const router = express.Router();


const Alunos = require("../controller/AlunoController");


router.post("/Aluno",Alunos.CadAluno);
router.put("/Aluno",Alunos.updateAluno);
router.get("/Aluno",Alunos.listarAluno);
router.delete("/Aluno/:id",Alunos.ExcluirAluno);

module.exports = router;