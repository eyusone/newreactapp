import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
// import {History} from 'react-router';
import './index.css';
import App from './App.js';
// import createBrowserHistory from 'history/lib/createBrowserHistory'

import 'bootswatch/dist/pulse/bootstrap.css';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import MainReducer from './Components/Reducers/index.js';
// import { combineReducers } from 'redux';

const store = createStore(MainReducer);

store.subscribe(() => {
  // console.log('subscribe', store.getState());
});

ReactDOM.render(
  <Provider store = {store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>,

  document.getElementById('root')
);

registerServiceWorker();

