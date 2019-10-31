const express = require('express');
const router = express.Router();

const profissionaisController = require('../controller/profissionais')

//Verbos HTTP
//GET - Receber dados de um Resource
router.get('/profissionais', profissionaisController.buscar_todos);
router.get('/profissionais/:id', profissionaisController.buscar_id);
//POST - Enviar dados ou informações para serem processados por um Resource.
router.post('/profissionais', profissionaisController.salvar);
//PUT - Atualizar dados de um Resource
router.put('/profissionais/:id', profissionaisController.atualizar);
//DELETE - Deletar um Resource
router.delete('/profissionais/:id', profissionaisController.remover);


module.exports = router;