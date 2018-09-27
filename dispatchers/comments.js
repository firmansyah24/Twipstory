const configuration   = require ('../knexfile').development
const knex            = require ('knex')(configuration)
const Nesthydrationjs = require ('nesthydrationjs')()
const comment_definition = require ('../definitions/comments')

const getAllComments = () => {
    return knex('Comments')
    .leftJoin('Users', { 'Users.id': 'Comments.user_id'})
    .leftJoin('Products', { 'Products.id': 'Comments.product_id'})
    .select(
        'Comments.id',
        'Comments.user_id',
        'Comments.product_id',
        'Comments.description',

        'Users.firstname as username'
    )
    .then(res => Nesthydrationjs.nest(res, comment_definition))
    .then(res => {
        let succesResponseWithData = (response, message, status) => ({
            name: "Success",
            message: message,
            status: status,
            data: response
        })
    return succesResponseWithData(res, "Success get All Comments", 200)
    })
    .catch(err => console.log(err))
}

module.exports = getAllComments