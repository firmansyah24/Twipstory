const configuration   = require ('../knexfile').development
const knex            = require ('knex')(configuration)
const Nesthydrationjs = require ('nesthydrationjs')()
const like_definition = require ('../definitions/likes')

const getAllLikes = () => {
    return knex('Likes')
    .leftJoin('Users', { 'Users.id': 'Likes.user_id'})
    .leftJoin('Products', { 'Products.id': 'Likes.product_id'})
    .select(
        'Likes.id',
        'Likes.user_id',
        'Likes.product_id',

        'Users.firstname as username',
    )
    .then(res => Nesthydrationjs.nest(res, like_definition))
    .then(res => {
        let succesResponseWithData = (response, message, status) => ({
            name: "Success",
            message: message,
            status: status,
            data: response
        })
    return succesResponseWithData(res, "Success get All Likes", 200)
    })
    .catch(err => console.log(err))
}

module.exports = getAllLikes