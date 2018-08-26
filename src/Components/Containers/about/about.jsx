import React, {Component} from 'react';

import Apphead from '../apphead/apphead.jsx';
import Aboutpage from './aboutpage.jsx';
 
export default class About extends Component {
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
                        <Apphead text = 'ABOUT'/> 
                        <Aboutpage />
    	           </div>
            )
    }
}
