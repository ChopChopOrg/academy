import ApolloClient from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { WebSocketLink } from "apollo-link-ws";

export const createApolloClient = () => {
  return new ApolloClient({
    link: new WebSocketLink({
      uri:
        "wss://chop-chop-academy-app.herokuapp.com/v1/graphql",
      options: {
        reconnect: true,
      },
      webSocketImpl:
        typeof window !== "undefined"
          ? undefined
          : // eslint-disable-next-line global-require
            require("ws"),
    }),
    cache: new InMemoryCache(),
  });
};
