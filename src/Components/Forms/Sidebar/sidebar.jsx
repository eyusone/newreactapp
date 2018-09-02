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
    				<ul style = {{padding: '0'}} className = 'sidebarR'>
    					<li className = 'classicLI'><h2>DASHBOARD</h2></li>
    					<Link to = '/public/' className = 'm-0'><li className = "menu classicLI">HOME</li></Link>
    					<Link to = '/public/about' className = 'm-0'><li className = "menu classicLI">ABOUT</li></Link>
    				</ul>
    			</div>

    )
    }
}