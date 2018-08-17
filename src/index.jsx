import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
//import {History} from 'react-router';
import './index.css';
import App from './App.jsx';
//import createBrowserHistory from 'history/lib/createBrowserHistory'

import 'bootswatch/dist/pulse/bootstrap.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<BrowserRouter>
	<App/>
	</BrowserRouter>,

	document.getElementById('root')
	);

registerServiceWorker();

