import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './appquaters.css';
import {Button} from 'reactstrap';
import ReactHover from 'react-hover';
import {Link} from 'react-router-dom';
//import AnimatedWrapper from '../../Wrappers/wrapquat.jsx';

export default class Qtr extends Component {
	constructor(props) {
    	super(props);
    }

    componentDidMount(){
        //this.setState({load: false})
    }

	render() {
        return (
        	<div className = "col-4 p-1 mr-4 mb-4 contents">
                    {/*<Link to = '/'>*/}
                        <h3 className = 'p-1' style = {{ borderBottom: '2px solid #A54BE0'}}>{this.props.label}</h3>
                        <div className = 'txts'>
                            <img src = {this.props.src} style = {{maxWidth: '150px', maxHeight: '150px'}} className = 'pt-3 pb-3'/>
                        </div>
                    {/*</Link>*/}
            </div>
        )
    }
}

//const Wrpqtr = AnimatedWrapper(Qtr);
//export default Wrpqtr;