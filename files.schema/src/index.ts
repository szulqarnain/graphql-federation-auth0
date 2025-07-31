import { ApolloServer } from 'apollo-server';
import { buildSubgraphSchema } from '@apollo/subgraph';
import { gql } from 'apollo-server';

const typeDefs = gql`
  type File {
    id: ID!
    filename: String!
    uploadedBy: User
  }

  extend type User @key(fields: "id") {
    id: ID!
  }

  extend type Query {
    files: [File!]!
  }
`;

const resolvers = {
  Query: {
    files: () => [
      { id: 'f1', filename: 'resume.pdf', uploadedBy: { id: '1' } },
    ],
  },
  File: {
    uploadedBy(file: any) {
      return { id: file.uploadedBy.id };
    },
  },
};

const server = new ApolloServer({
  schema: buildSubgraphSchema([{ typeDefs, resolvers }]),
});

server.listen({ port: 4002 }).then(({ url }) => {
  console.log(`🚀 Files subgraph running at ${url}`);
});
