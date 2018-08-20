import React, {Component} from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import './App.css';
import 'bootswatch/dist/pulse/bootstrap.css';

import ScrollDown from './Components/Forms/ScrollDown/scrolldown.jsx';
import Maindevice from './Components/Containers/main/maindevice.jsx';
import Appquaters from './Components/Containers/appquaters/appquaters.jsx';
import Wrapper from './Components/Wrappers/wraptrans.jsx';
import SignIn from './Components/Containers/signin/signin.jsx';


const Routes = () => (

  <Switch>
  <Route exact path='/' render={
  	Wrapper((props) => 
  	(<Maindevice {...props} load = {false}/>))
  }/>
  <Route path = '/signin' component = {SignIn}/>
  </Switch>
  )

export default Routes;
