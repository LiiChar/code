const express = require('express')
const {graphqlHTTP} = require('express-graphql')
const cors = require('cors')
const schema = require('./schema/schema')
const users = [{id: 1, username: "Vova", age: 18 }]

const app = express()
const PORT = process.env.PORT || 5000
app.use(express.json())
app.use(cors())

const createUser = (input) => {
    const id = Date.now()
    return {
        id, ...input
    }
}
const root = {
    getAllUsers: () => {
        return users
    },
    getUser: ({id}) => {
        return users.find(user => user.id == id)
    },
    createUser: ({input}) => {
        const user = createUser(input)
        users.push(user)
        return user
    }
}

app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema,
    rootValue: root,
}))

app.listen(PORT, () => console.log(`Server been started on port ${PORT}`))


