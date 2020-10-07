const fornecedorController = require('../controllers/FornecedorController');
const express = require('express');
const router = express.Router();


router.get('/', fornecedorController.listAll);

router.get('/:idfornecedor', fornecedorController.listOne);

router.put('/', fornecedorController.register);

router.post('/', fornecedorController.update);

router.delete('/:idfornecedor', fornecedorController.delete);


module.exports = app => app.use('/api/fornecedor', router);