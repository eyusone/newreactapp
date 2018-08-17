import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './main.css';

import Sidebar from '../../Forms/Sidebar/sidebar.jsx';
import Apphead from '../../Containers/apphead/apphead.jsx';
import Quaters from '../../Containers/appquaters/appquaters.jsx';


export default class Main extends Component {
	constructor(props) {
    	super(props);
    }

    componentDidMount() {
    	
    }
    
	render() {        
    
    return (
    	<div className = "container-fluid m-0 p-0">
    		<div className = "row m-0">
    			<div className = "col-3 m-0 p-0 sidebar">
    			    <Sidebar />
    			</div>
                <div className = "col-9 main" style = {{minHeight: '100vh'}}>
                    <Apphead />
                    <Quaters />
                </div>
    		</div>
    	</div>
    )
    }
}