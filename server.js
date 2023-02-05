const express = require('express')
const { buildSchema } = require('graphql')
const { graphqlHTTP } = require('express-graphql')

const schema = buildSchema(`
    type Query {
        description: String
        price: Float
    }
`)

const root = {
    description: 'Red Shoe',
    price: 42.12,
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