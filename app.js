const routes = require('./src/infraestructure/cross-cutting/routes/routes');
const cors = require('cors');

//const bd = require('./src/infraestructure/data/oracle');

const express = require('express');
const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);

module.exports = app;