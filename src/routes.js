const express = require('express');
const AgendsController = require('./controllers/AgendsController');
const CadController = require('./controllers/CadController');
const AutController = require('./controllers/AutController');

const routes = express.Router();

routes.post('/cadastro', CadController.store);
routes.post('/autenticacao', AutController.store);
routes.post('/agends', AgendsController.store);

module.exports = routes;