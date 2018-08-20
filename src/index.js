import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
//import {History} from 'react-router';
import './index.css';
import App from './App.jsx';
//import createBrowserHistory from 'history/lib/createBrowserHistory'

import 'bootswatch/dist/pulse/bootstrap.css';
import registerServiceWorker from './registerServiceWorker';

import {Provider} from 'react-redux';
import {createStore} from 'redux';

const store = [];

ReactDOM.render(
	<Provider store = {store}>
	<BrowserRouter>
	<App/>
	</BrowserRouter>
	</Provider>,

	document.getElementById('root')
	);

registerServiceWorker();

