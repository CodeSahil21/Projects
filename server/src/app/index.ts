import express from 'express';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import bodyParser from 'body-parser';
import { User } from './user/index';
import {Tweet} from './tweet/index';
import cors from 'cors';
import { GraphqlContext } from '../interfaces';
import JWTService from '../services/jwt';

export async function initializeServer() {
  const app = express();
  app.use(cors({ origin: 'http://localhost:3000' }));
  app.use(bodyParser.json());
  const graphqlServer = new ApolloServer<GraphqlContext>({
    typeDefs: `
    ${User.types}
    ${Tweet.types}
    
    type Query {
      ${User.queries}  
      ${Tweet.queries}
    }
      type Mutation {
      ${Tweet.mutations}
      }
    `,
    resolvers: {
      Query: {
        ...User.resolvers.queries,
        ...Tweet.resolvers.queries,
      },
      Mutation:{
        ...Tweet.resolvers.mutations,
      },
      ...Tweet.resolvers.extraResolvers,
      ...User.resolvers.extraResolvers,
    },
  });
  await graphqlServer.start();
  app.use("/graphql", expressMiddleware(graphqlServer, {
    context: async ({ req, res }) => {
      const authHeader = req.headers.authorization || '';
      const token = authHeader.replace('Bearer ', '');
      let user = null;
      if (token) {
        try {
          user = JWTService.decodeToken(token);
        } catch (e) {
          console.log('Invalid token', e);
        }
      }
      return { user };
    }
  }));
  return app;
}