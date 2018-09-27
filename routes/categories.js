var express = require('express');
var Promise = require('bluebird');
var router = express.Router();

const getAllCategories = require('../dispatchers/categories')

router.get('/', function(req, res, next) {
    Promise.try(() => getAllCategories())
    .then(response => res.status(response.status).json(response))
    .catch(err => console.log("Error to get All Likes", err))
  });
  
  module.exports = router;