import cors from "cors";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import schema from "./schema";
import models from "./models";
import resolvers from "./resolvers";

const app = express();

app.use(cors());

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
  context: {
    models,
    me: models.users[2],
  },
});

server.applyMiddleware({ app, path: "/graphql" });

app.listen({ port: 8000 }, () => {
  console.log("Apollo Server running on http://localhost:8000/graphql");
});
