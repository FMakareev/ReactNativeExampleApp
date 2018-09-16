import React from 'react';
import { ApolloProvider } from 'react-apollo'
import { client} from '../Apollo/index'

export const ApolloClientProvider = (props) => <ApolloProvider {...props} client={client}/>

export default ApolloClientProvider;