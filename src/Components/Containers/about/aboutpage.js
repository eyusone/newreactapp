import React, {Component} from 'react';

//import Apphead from '../apphead/apphead.jsx';
//import './league.css';
import {Button} from 'reactstrap';
import {Link} from 'react-router-dom';

export default class Aboutpage extends Component {
	constructor(props) {
    	super(props);
    }

    componentDidMount() {
        //let el = document.getElementById('main');
        //var style = getComputedStyle(el);
        //console.log(style.width);
    }
	render() {      
            return (
                    <div className = "container pl-4 pr-4 pb-3">
                        <div className = "row align-items-start justify-content-start">
                            <div className="col-9 mr-1">
                                <h2>TECHNICAL ENVIROMENTS</h2>
                                BOOGIE WOOGIE
        	                </div>
                        </div>
                   </div>
            )
    }
}
