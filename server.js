const path = require('path')
const express = require('express')
const { graphqlHTTP } = require('express-graphql')

const { loadFilesSync } = require('@graphql-tools/load-files')
const { makeExecutableSchema } = require('@graphql-tools/schema')

const typesArray = loadFilesSync('**/*', {
    extensions: ['graphql'],
  });

const schema = makeExecutableSchema({
    typeDefs: typesArray
})

const root = {
    orders: require('./orders/orders.model'),
    products: require('./products/products.model')
}

const app = express()

app.use('/graphql' ,graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}))

const PORT = 3000

app.listen(PORT, () => {
    console.log(`Running GraphQL server on port ${PORT}...`)
})