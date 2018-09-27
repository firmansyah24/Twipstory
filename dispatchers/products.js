const configuration   = require ('../knexfile').development
const knex            = require ('knex')(configuration)
const Nesthydrationjs = require ('nesthydrationjs')()
const product_definition = require ('../definitions/products')

const getAllProducts = () => {
    return knex('Products')
    .leftJoin('Users', {'Products.user_id': 'Users.id'})
    .select(
        'Products.id',
        'Products.location',
        'Products.title',

        'Users.id as user_id',
        'Users.firstname as username'
    )
    .then(res => Nesthydrationjs.nest(res, product_definition))
    .then(res => {
        let succesResponseWithData = (response, message, status) => ({
            name: "Success",
            message: message,
            status: status,
            data: response
        })
    return succesResponseWithData(res, "Success get All Products", 200)
    })
    .catch(err => console.log(err))
}

module.exports = getAllProducts