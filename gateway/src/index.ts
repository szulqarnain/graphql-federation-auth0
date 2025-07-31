import { ApolloServer } from 'apollo-server-express';
import { ApolloGateway } from '@apollo/gateway';
import express from 'express';
import passport from 'passport';
import { auth0Middleware } from './infrastructure/auth0.middleware';

const app:any = express();

app.use(passport.initialize());
app.use(auth0Middleware);

const gateway = new ApolloGateway({
  serviceList: [
    { name: 'users', url: 'http://localhost:4001/graphql' },
    { name: 'files', url: 'http://localhost:4002/graphql' },
  ],
});

const server = new ApolloServer({
  gateway,
  context: ({ req }) => {
    const user:any = req.user || {};
    console.log("user",user.scope , user.scope?.split(' '))
    return {
      user,
      scopes: user.scope?.split(' ') || ["create:client_grants"], // e.g., ['create:client_grants']
    };
  },  
});

(async () => {
    await server.start();
    server.applyMiddleware({ app });
  
    app.listen({ port: 4000 }, () => {
      console.log(`🚀 Gateway running at http://localhost:4000${server.graphqlPath}`);
    });
  })();
  