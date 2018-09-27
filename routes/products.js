var express = require('express');
var Promise = require('bluebird');
var router = express.Router();

const getAllProducts = require('../dispatchers/products')

router.get('/', function(req, res, next) {
    Promise.try(() => getAllProducts())
    .then(response => res.status(response.status).json(response))
    .catch(err => console.log("Error to get All Products", err))
  });
  
  module.exports = router;