import {
  ApolloError,
  ApolloServer,
  ValidationError,
} from "apollo-server-micro";
import resolvers from "./resolvers";
import typeDefs from "./typeDefs";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    return {
      req,
    };
  },
  introspection: true,
  formatError: (err) => {
    console.log(err);

    const safeError =
      err.originalError instanceof ApolloError ||
      err instanceof ValidationError ||
      err.originalError?.message === "Not allowed by CORS";

    // This is an unexpected error and might have secrets
    if (!safeError) {
      return new Error("There was an unknown error on the server");
    }

    // Might want to hide the stack trace for security in production
    if (
      process.env.NODE_ENV === "production" &&
      err.extensions &&
      err.extensions.exception &&
      err.extensions.exception.stacktrace
    ) {
      delete err.extensions.exception.stacktrace;
    }

    return err;
  },
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
});

export default apolloServer;
