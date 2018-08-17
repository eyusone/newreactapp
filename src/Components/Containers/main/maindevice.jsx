import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './main.css';

import Main from '../../Containers/main/main.jsx';

const Hello = (props) => {
    return(<div className = "container-fluid">
            <div className = "row align-items-center">
                <div className = "col-12" style = {{paddingTop: '45vh'}}>
                    <h1 style = {{textAlign: 'center'}}>This app is only for Desktop!</h1><br/>
                    <img src = 'http://img.over-blog-kiwi.com/1/09/13/22/20140617/ob_65864c_smiley-sad-512.png' alt = 'sorry'
                    style = {{maxWidth: '200px', maxHeight: '200px', marginLeft: 'auto', marginRight: 'auto', display: 'block'}}/>
                </div>
            </div>
        </div>);
}

export default class Maindevice extends Component {
	constructor(props) {
    	super(props);
    }

	render() {        
    const load = this.props.load;

    if (load) {
        return (
            <div>
                <Hello/>
            </div>
        )
    }
    else {
        return (
            <Main/>
            )
    }

    }
}