const { getAllProducts, getProductsByPrice, getProductById } = require('./products.model')

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
    }
}