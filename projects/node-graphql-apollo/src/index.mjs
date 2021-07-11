import apollo from 'apollo-server';

import resolvers from './resolvers.mjs';
import typeDefs from './type-defs.mjs';

const server = new apollo.ApolloServer({ resolvers, typeDefs });

// The `listen` method launches a web server.
server
  .listen({
    port: 4001,
  })
  .then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`)
  })
