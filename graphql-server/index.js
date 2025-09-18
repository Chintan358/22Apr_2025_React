const express = require("express")
const { ApolloServer } = require("@apollo/server")
const { expressMiddleware } = require("@as-integrations/express4");
const cors = require("cors")
const axios = require("axios")


const startServer = async () => {

    const app = express()
    const server = new ApolloServer(
        {
            typeDefs: `

                type Address {
                    city : String!,
                    zipcode : String!
                }
                type User {
                    id : ID!,
                    name : String!,
                    username : String!,
                    email : String!,
                    website:String!,
                    address : Address

                }
                type Todo {
                    id : ID!,
                    title : String!,
                    completed:Boolean,
                    userId : ID!
                    user : User
                }                
              
                type Query  {
                    getTodos : [Todo],
                    getUsers : [User],
                    getUser(id : ID!) : User
                } 
                `,
            resolvers: {

                Todo: {
                    user: async (todo) => (await axios.get(`https://jsonplaceholder.typicode.com/users/${todo.userId}`)).data
                },

                Query: {
                    getTodos: async () => (await axios.get("https://jsonplaceholder.typicode.com/todos")).data,
                    getUsers: async () => (await axios.get("https://jsonplaceholder.typicode.com/users")).data,
                    getUser: async (parent, { id }) => (await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)).data

                }
            }
        }
    )

    app.use(express.json())
    app.use(cors())
    await server.start()
    app.use("/graphql", expressMiddleware(server))
    app.listen(8000, () => console.log(`Server running  http://localhost:8000/graphql`,))
}

startServer()