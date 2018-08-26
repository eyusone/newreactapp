import React, {Component} from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import './App.css';
import 'bootswatch/dist/pulse/bootstrap.css';

import ScrollDown from './Components/Forms/ScrollDown/scrolldown.jsx';
import Main from './Components/Containers/main/main.jsx';
import Appquaters from './Components/Containers/appquaters/appquaters.jsx';
import Wrapper from './Components/Wrappers/wraptrans.jsx';
import Table from './Components/Containers/signin/table.jsx';
import League from './Components/Containers/leaguepage/leaguepage.jsx';
import About from './Components/Containers/about/about.jsx';


const Routes = () => (

  <Switch>
	  <Route exact path='/public/' render={
	  	Wrapper((props) => 
	  	(<Main {...props}/>))
	  }/>
	  <Route path = '/public/table/:ln' component = {Table}/>
	  <Route path = '/public/league/:ln' component = {League}/>
	  <Route path = '/public/about' component = {About} />
  </Switch>
  )

export default Routes;
