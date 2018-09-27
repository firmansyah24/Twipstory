var express = require('express');
var Promise = require('bluebird');
var router = express.Router();

const getAllComments = require('../dispatchers/comments')

router.get('/', function(req, res, next) {
    Promise.try(() => getAllComments())
    .then(response => res.status(response.status).json(response))
    .catch(err => console.log("Error to get All Likes", err))
  });
  
  module.exports = router;