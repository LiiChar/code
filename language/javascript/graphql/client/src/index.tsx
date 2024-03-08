import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client'
import { NormalizedCache, NormalizedCacheObject } from '@apollo/client/cache';

const client = new ApolloClient<NormalizedCacheObject>({
  uri: 'http://localhost:5000/graphql',
  cache: new InMemoryCache()
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);