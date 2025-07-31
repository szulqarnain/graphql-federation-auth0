import { ApolloServer, gql } from 'apollo-server';
import { buildSubgraphSchema } from '@apollo/subgraph';

const typeDefs = gql`
  type User @key(fields: "id") {
    id: ID!
    name: String!
  }

  type Query {
    users: [User!]!
  }
`;

const resolvers = {
  Query: {
    users: (_: any, __: any, context: any) => {
      const scopes: string[] = context.scopes || [];
      console.log("scopes",context)
      if (!scopes.includes('create:client_grants')) {
        throw new Error('Unauthorized: Missing required scope "create:client_grants"');
      }

      return [
        { id: '1', name: 'John Doe' },
        { id: '2', name: 'Jane Smith' },
      ];
    },
  },
};

const server = new ApolloServer({
  schema: buildSubgraphSchema([{ typeDefs, resolvers }]),
  context: ({ req }) => {
    const scopesHeader: string | undefined = req.headers['scopes'] as string;
    const scopes = scopesHeader ? scopesHeader.split(' ') : [];

    return { scopes };
  },
});

server.listen({ port: 4001 }).then(({ url }) => {
  console.log(`🚀 Users subgraph running at ${url}`);
});
