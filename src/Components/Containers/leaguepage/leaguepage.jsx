import React, {Component} from 'react';

import Apphead from '../apphead/apphead.jsx';
import Leaguepage from './league.jsx';

export default class League extends Component {
	constructor(props) {
    	super(props);
    }

	render() {
        const ln = this.props.match.params.ln;
        //console.log(ln);

            return (
                    <div className='main' id = 'main'>
                        <Apphead text = 'LEAGUE INFO'/> 
                        <Leaguepage link = {ln}/>
    	           </div>
            )
    }
}
