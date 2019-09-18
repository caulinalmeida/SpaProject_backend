const express = require('express');
const AgendsController = require('./controllers/AgendsController');
const CadController = require('./controllers/CadController');
const AutController = require('./controllers/AutController');
const VerifyController = require('./controllers/VerifyController');
const authMiddleware = require('./middlewares/auth');

const routes = express.Router();

routes.post('/cadastro', CadController.store);
routes.post('/autenticacao', AutController.store);
routes.post('/agends', AgendsController.store);
routes.get('/verify', authMiddleware, VerifyController.store);

module.exports = routes;