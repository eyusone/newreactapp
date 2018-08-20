import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './main.css';

import Main from '../../Containers/main/main.jsx';

const Hello = (props) => {
    return(<div className = "container-fluid">
            <div className = "row align-items-center">
                <div className = "col-12" style = {{paddingTop: '35vh'}}>
                    <h1 style = {{textAlign: 'center'}}>This app is only for Desktop!</h1><br/>
                    <img src = '/public/img/sad.png' alt = 'sorry'
                    style = {{maxWidth: '150px', maxHeight: '150px', marginLeft: 'auto', marginRight: 'auto', display: 'block'}}/>
                </div>
            </div>
        </div>);
}

export default class Maindevice extends Component {
	constructor(props) {
    	super(props);
    }

    componentDidMount() {
        /*const w = window,
        d = document,
        documentElement = d.documentElement,
        body = d.getElementsByTagName('body')[0],
        width = w.innerWidth || documentElement.clientWidth || body.clientWidth*/
        //console.log(window.location.href);
    }

	render() {        
    //const load = ReactDOM.findDOMNode(this.refs.main).getBoundingClientRect().width;
    const width = 9;
    if (width>10) {
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