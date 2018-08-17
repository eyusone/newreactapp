import React, {Component} from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import './App.css';
import 'bootswatch/dist/pulse/bootstrap.css';

import ScrollDown from './Components/Forms/ScrollDown/scrolldown.jsx';
import Maindevice from './Components/Containers/main/maindevice.jsx';


const Routes = () => (

  <Switch>
  <Route exact path='/public' render={(props) => 
  	(<Maindevice {...props} load = {true}/>)
  }/>
  </Switch>
  )

export default Routes;
