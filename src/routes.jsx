import React, {Component} from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import './App.css';
import 'bootswatch/dist/pulse/bootstrap.css';

import ScrollDown from './Components/Forms/ScrollDown/scrolldown.jsx';
import Maindevice from './Components/Containers/main/maindevice.jsx';
import Appquaters from './Components/Containers/appquaters/appquaters.jsx';


const Routes = () => (

  <Switch>
  <Route exact path='/public' render={(props) => 
  	(<Maindevice {...props} load = {false}/>)
  }/>
  <Route path = '/public/main' component = {Appquaters}/>
  </Switch>
  )

export default Routes;
