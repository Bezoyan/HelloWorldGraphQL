// const {graphqlExpress, graphiqlExpress, gql} = require('apollo-server-express');
// const bodyParser = require('express');
const { ApolloServer, gql, makeExecutableSchema } = require('apollo-server-express');
const cors = require('cors');
const express = require('express');
// const {makeExecutableSchema} = require('graphql-tools');

const port = 4000;
const app = express();
const path = '/graphql';


const typeDefs = gql`
  type Query {
    hello: String

  }
`;

const resolvers = {
  Query: {
    hello: () => 'Hello world!',
  },
};
console.log(resolvers);
// const schema = makeExecutableSchema({typeDefs, resolvers});

const server = new ApolloServer({
  typeDefs,
  resolvers
});



app.use(cors());

server.applyMiddleware({app, path});
app.listen(port, () => console.log(`Server ready at http://localhost:4000${server.graphqlPath}`));
