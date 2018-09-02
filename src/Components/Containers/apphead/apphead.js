import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './apphead.css';

export default class Apphead extends Component {
	constructor(props) {
    	super(props);
    }

	render() {        
    
    return (
    	<div className = "container p-4">
    		<div className = "row">
    			<div className = "col">
    			    <h1 style = {{borderBottom: '4px solid #A54BE0', textAlign: 'center'}} className = 'p-1'>{this.props.text}</h1>
    			</div>
    		</div>
    	</div>
    )
    }
}