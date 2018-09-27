const configuration   = require ('../knexfile').development
const knex            = require ('knex')(configuration)
const Nesthydrationjs = require ('nesthydrationjs')()
const categories_definition = require ('../definitions/categories')

const getAllCategories = () => {
    return knex('Categories')
    .select('*')
    .then(res => Nesthydrationjs.nest(res, categories_definition))
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
}

module.exports = getAllCategories