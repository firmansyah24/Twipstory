const configuration   = require ('../knexfile').development
const knex            = require ('knex')(configuration)
const Nesthydrationjs = require ('nesthydrationjs')()
const product_categories = require ('../definitions/product_categories')

const getAllProductCategories = () => {
    return knex('Products Categories')
    .leftJoin('Products', { 'Products.id': 'Products Categories.product_id' })
    .leftJoin('Categories', { 'Categories.id': 'Products Categories.categories_id' })
    .select(
        'Products Categories.id',
        'Products Categories.product_id',
        'Products Categories.categories_id',

        'Categories.name as category_name'
    )
    .then(res => Nesthydrationjs.nest(res, product_categories))
    .then(res => {
        let succesResponseWithData = (response, message, status) => ({
            name: "Success",
            message: message,
            status: status,
            data: response
        })
    return succesResponseWithData(res, "Success get All Product Categories", 200)
    })
    .catch(err => console.log(err))
}

module.exports = getAllProductCategories