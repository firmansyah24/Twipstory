var express = require('express');
var router = express.Router();

const Images = require('../dispatchers/images')

router.get('/', function(req, res) {
    Images
    .Images
    .getAllImages()
    .then(Image => {
      res.json(Image)
    })
  });

router.get('/:id', function(req, res) {
    Images
    .Images
    .getImageById(req.params.id)
    .then(Image => {
      res.json(Image)
    })
})
  
  module.exports = router;