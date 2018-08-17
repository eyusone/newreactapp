import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './apphead.css';

export default class Apphead extends Component {
	constructor(props) {
    	super(props);
    }

    componentDidMount() {
    	
    }
    
	render() {        
    
    return (
    	<div className = "container p-4">
    		<div className = "row">
    			<div className = "col">
    			    <h1 style = {{borderBottom: '4px solid #A54BE0'}} className = 'p-1'>MAIN PAGE APPLICATION</h1>
    			</div>
    		</div>
    	</div>
    )
    }
}