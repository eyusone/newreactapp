import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './sidebar.css';
import {Button} from 'reactstrap';
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
    					<a href = '/l' className = 'm-0'><li className = "menu">HOME</li></a>
    					<li className = "menu">ABOUT</li>
    					<li className = "menu">WHAT</li>
    					<li className = "menu">CONTACTS</li>
    				</ul>
    			</div>

    )
    }
}