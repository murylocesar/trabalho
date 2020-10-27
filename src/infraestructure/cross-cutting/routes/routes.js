const express = require('express');
const routes = express.Router();

const funcionario = require('./funcionario');

routes.use('/funcionario', funcionario);

module.exports = routes;