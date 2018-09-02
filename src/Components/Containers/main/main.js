import React, {Component} from 'react';
import './main.css';

import Quaters from '../../Containers/appquaters/appquaters.js';
import Apphead from '../apphead/apphead.js';

export default class Main extends Component {
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
                    <div className='main' id = 'main'>
                        <Apphead text = 'MAIN PAGE APPLICATION'/> 
                        <Quaters />
    	           </div>
            )
    }
}
