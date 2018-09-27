var express = require('express');
var Promise = require('bluebird');
var router = express.Router();

const getAllProductCategories = require('../dispatchers/product_categories')

router.get('/', function(req, res, next) {
    Promise.try(() => getAllProductCategories())
    .then(response => res.status(response.status).json(response))
    .catch(err => console.log("Error to get All Likes", err))
  });
  
  module.exports = router;