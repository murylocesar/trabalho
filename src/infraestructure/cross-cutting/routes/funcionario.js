const express = require('express');
const funcionario = require('../../../application/funcionario');

const router = express.Router();

router.route('/').get(funcionario.getAll);

module.exports = router; 