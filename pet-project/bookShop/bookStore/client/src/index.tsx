import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './Routes';
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import client from './apollo/apollo-client';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </ApolloProvider>
);
