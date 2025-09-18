import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ApolloProvider } from '@apollo/client/react';
import { ApolloClient } from '@apollo/client';
import { InMemoryCache } from '@apollo/client';
import { HttpLink } from '@apollo/client';

const client = new ApolloClient({
  link: new HttpLink({ uri: "http://localhost:8000/graphql" }),
  cache: new InMemoryCache(),
});

createRoot(document.getElementById('root')).render(

  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>

)
