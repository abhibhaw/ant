
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import "./i18n";
import App from './App';
import { 
  ApolloClient, 
  InMemoryCache, 
  ApolloProvider
} from '@apollo/client';
import Store from './redux/Store';
import { Provider } from 'react-redux';


const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache: new InMemoryCache()
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={Store}>
      <BrowserRouter >
        <ApolloProvider client={ client } >
          <App />
        </ApolloProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


