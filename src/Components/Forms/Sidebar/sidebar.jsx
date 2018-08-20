import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './sidebar.css';
import {Button} from 'reactstrap';
import {Link} from 'react-router-dom';
//import { slide as Menu } from 'react-burger-menu';

export default class Sidebar extends Component {
	constructor(props) {
    	super(props);
    }

    componentDidMount() {
    	
    }

	render() {        
    
    return (

    			<div>
    				<ul style = {{padding: '0'}}>
    					<li><h2>DASHBOARD</h2></li>
    					<Link to = '/' className = 'm-0'><li className = "menu">HOME</li></Link>
    					<Link to = '/signin' className = 'm-0'><li className = "menu">TABLES</li></Link>
    					<li className = "menu">LAST SCORES</li>
    					<li className = "menu">ABOUT</li>
    				</ul>
    			</div>

    )
    }
}