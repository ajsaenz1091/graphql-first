const { getAllProducts, getProductsByPrice, getProductById, addNewProduct } = require('./products.model')

module.exports = {
    Query: {
        products: () => {
            return getAllProducts()
        },
        productsByPrice: (_, args) => {
            return getProductsByPrice(args.min, args.max);
        },
        product: (_, args) => {
            return getProductById(args.id)
        },
    },
    Mutation: {
        newProduct: (_, args) => {
            return addNewProduct(args.id, args.description, args.price)
        }
    }
}