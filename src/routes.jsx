import React, {Component} from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import './App.css';
import 'bootswatch/dist/pulse/bootstrap.css';

import ScrollDown from './Components/Forms/ScrollDown/scrolldown.jsx';
import Main from './Components/Containers/main/main.jsx';

const Routes = () => (

  <Switch>
  <Route exact path='/' component={Main}/>
  </Switch>
  )

export default Routes;
