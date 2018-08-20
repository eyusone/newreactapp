import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './signin.css';
import Apphead from '../apphead/apphead.jsx';
import Sidebar from '../../Forms/Sidebar/sidebar.jsx';
import Wrapper from '../../Wrappers/wraptrans.jsx';
import Graph from './graph/graph.jsx';

export default class SignIn extends Component {
	constructor(props) {
    	super(props);
    }

	render() {        
    //const Appheader = Wrapper(Apphead);
    return (
    	<div className = "container-fluid m-0 p-0 device">
            <div className = "row m-0">
                <div className = "col-3 m-0 p-0 sidebar">
                    <Sidebar />
                </div>
                <div className = "col-9 main" style = {{minHeight: '100vh'}}>
                    <Apphead text = 'TABLE'/>
                    <Graph />
                    {/*<RightMain link = 'http:/localhost:3000/public/' />*/}
                </div>
            </div>
        </div>
    )
    }
}