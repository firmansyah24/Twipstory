var express = require('express');
const configuration   = require ('../knexfile').development
const knex            = require ('knex')(configuration)
var router = express.Router();

const Users = require('../dispatchers/users')

router.get('/', (req, res) => {
  Users
  .Users
  .getAllUsers()
  .then(Users => {
    res.json(Users)
  })
})

router.get('/:id', (req, res) => {
  Users
  .Users
  .getUsersById(req.params.id)
  .then(Users => {
    res.json(Users)
  })
})

router.post('/', (req, res) => {
  Users
  .Users
  .postNewUser(req.body)
  .then(Users => {
      res.json(Users)
  })
})

router.put('/:id', (req, res) => {
  return knex('Users').where({id: req.params.id}).update(req.body).returning('id')
  .then(Users => {
      res.send('Update Succesfully!')
  })
})

router.delete('/:id', (req, res) => {
  return knex('Users').where({id: req.params.id}).delete()
  .then(Users => {
      res.send('Delete Succesfully!')
  })
})

module.exports = router