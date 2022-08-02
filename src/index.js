import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import StoreService from './services/storeServices';

const store = StoreService.configureStore();


 ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>
 , document.getElementById("root"))


