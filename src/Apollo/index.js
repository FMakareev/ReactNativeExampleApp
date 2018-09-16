import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { from } from 'apollo-link'
import { HttpLink } from 'apollo-link-http'
import apolloLogger from 'apollo-link-logger'

const httpLink = new HttpLink({
  uri: `http://graphql-compose.herokuapp.com/northwind`,
});

export const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: from([apolloLogger, httpLink]),
    queryDeduplication: true,
});

export default client;