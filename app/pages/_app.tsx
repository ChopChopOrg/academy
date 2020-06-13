import { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/react-hooks";

import { createApolloClient } from "../src/lib/apolloWsClient";

const client = createApolloClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
