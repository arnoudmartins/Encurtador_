var express = require('express');
var urlRouter = express.Router();

var urlsController = require('../controllers/urlController');

urlRouter.route('')
    .get(urlRouter.get)
    .post(urlRouter.inserirURL);

urlRouter.route('/:id')    
   .get(urlController.consultarURLPorId);

urlRouter.route('/:data')    
   .get(urlController.listarUrlPorData);

urlRouter.route('/:url')    
   .get(urlController.listarUrl);

module.exports = urlRouter; 