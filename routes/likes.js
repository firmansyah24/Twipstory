var express = require('express');
var Promise = require('bluebird');
var router = express.Router();

const getAllLikes = require('../dispatchers/likes')

router.get('/', function(req, res, next) {
    Promise.try(() => getAllLikes())
    .then(response => res.status(response.status).json(response))
    .catch(err => console.log("Error to get All Likes", err))
  });
  
  module.exports = router;