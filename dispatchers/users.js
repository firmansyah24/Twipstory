const configuration   = require ('../knexfile').development
const knex            = require ('knex')(configuration)
const Nesthydrationjs = require ('nesthydrationjs')()
const user_definition = require ('../definitions/users')

module.exports = {
Users: { 
    getAllUsers: function() {
        return knex('Users')
    .select('*')
    .then(res => Nesthydrationjs.nest(res, user_definition))
        .then(res => {
        let succesResponseWithData = (response, message, status) => ({
            name: "Success",
            message: message,
            status: status,
            data: response
            })
        return succesResponseWithData(res, "Success get All Users", 200)
            })
        .catch(err => console.log(err))
    },
    getUsersById: function(id) {
        return knex('Users').where('id', id).first()
    },
    postNewUser: function(User) {
        return knex('Users').insert(User).returning('Users')
    }
    }
}