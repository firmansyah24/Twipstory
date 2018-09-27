const configuration   = require ('../knexfile').development
const knex            = require ('knex')(configuration)
const Nesthydrationjs = require ('nesthydrationjs')()
const images_definition = require ('../definitions/images')

module.exports = {
Images: {
    getAllImages: function() {
    return knex('Images')
    .select('*')
    .then(res => Nesthydrationjs.nest(res, images_definition))
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
    getImageById: function(id) {
        return knex('Images').where('id', id).first()
    }
    }
}