import React, { Component } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import './App.css';
import 'bootswatch/dist/pulse/bootstrap.css';

import ScrollDown from './Components/Forms/ScrollDown/scrolldown.js';
import Main from './Components/Containers/main/main.js';
import Appquaters from './Components/Containers/appquaters/appquaters.js';
import Wrapper from './Components/Wrappers/wraptrans.js';
import Table from './Components/Containers/signin/table.js';
import Scores from './Components/Containers/scores/scores.js';
import League from './Components/Containers/leaguepage/leaguepage.js';
import About from './Components/Containers/about/about.js';


const Routes = () => (

  <Switch>
    <Route exact path='/' render={
	  	Wrapper((props) =>
	  	(<Main {...props}/>))
	  }
    />
    <Route path = '/table/:ln' component = {Table}/>
    <Route path = '/scores/:ln' component = {Scores}/>
    <Route path = '/league/:ln' component = {League}/>
    <Route path = '/about' component = {About} />
  </Switch>
);

export default Routes;
