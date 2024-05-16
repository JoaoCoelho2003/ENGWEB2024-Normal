var express = require('express');
var router = express.Router();
var ContratoController = require('../controllers/contratos');

// GET /contratos?entidade=EEEE: devolve a lista dos contratos correspondentes à entidade EEEE;

router.get('/', function(req, res, next) {
  if(req.query.entidade){
    ContratoController.lookUpEntidade(req.query.entidade)
      .then(dados => res.jsonp(dados))
      .catch(erro => res.status(500).jsonp(erro));
  }
  else{
    next();
  }
});

// GET /contratos?tipo=AAA: devolve a lista dos contratos com tipo de procedimento igual a AAA;

router.get('/', function(req, res, next) {
  if(req.query.tipo){
    ContratoController.lookUpTipo(req.query.tipo)
      .then(dados => res.jsonp(dados))
      .catch(erro => res.status(500).jsonp(erro));
  }
  else{
    next();
  }
});

// GET /contratos: devolve uma lista com todos os registos;

router.get('/', function(req, res, next) {
  ContratoController.list()
    .then(dados => res.jsonp(dados))
    .catch(erro => res.status(500).jsonp(erro));
});

// GET /contratos/entidades: devolve a lista de entidades comunicantes ordenada alfabeticamente e sem repetições

router.get('/entidades', function(req, res, next) {
  ContratoController.entidades()
    .then(dados => res.jsonp(dados))
    .catch(erro => res.status(500).jsonp(erro));
});

// GET /contratos/tipos: devolve a lista dos tipos de procedimento ordenada alfabeticamente e sem repetições;

router.get('/tipos', function(req, res, next) {
  ContratoController.tipos()
    .then(dados => res.jsonp(dados))
    .catch(erro => res.status(500).jsonp(erro));
});

// GET /contratos/:id: devolve o registo com identificador id (corresponde ao idcontrato);

router.get('/:id', function(req, res, next) {
  ContratoController.lookUp(req.params.id)
    .then(dados => res.jsonp(dados))
    .catch(erro => res.status(500).jsonp(erro));
});

// POST /contratos: acrescenta um registo novo à BD;

router.post('/', function(req, res, next) {
  ContratoController.insert(req.body)
    .then(dados => res.jsonp(dados))
    .catch(erro => res.status(500).jsonp(erro));
});

// DELETE /contratos/:id: elimina da BD o registo com o identificador id;

router.delete('/:id', function(req, res, next) {
  ContratoController.delete(req.params.id)
    .then(dados => res.jsonp(dados))
    .catch(erro => res.status(500).jsonp(erro));
});

// PUT /contratos/:id: altera o registo com o identificador id.

router.put('/:id', function(req, res, next) {
  ContratoController.update(req.params.id, req.body)
    .then(dados => res.jsonp(dados))
    .catch(erro => res.status(500).jsonp(erro));
});


module.exports = router;
