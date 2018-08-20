import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './appquaters.css';
import {Button} from 'reactstrap';
import ReactHover from 'react-hover';
import {Link} from 'react-router-dom';
import Qtr from './qtr.jsx';
//import Wrpqtr from './qtr.jsx';
//import Wrapper from '../../Wrappers/wraptrans.jsx';

export default class Quaters extends Component {
	constructor(props) {
    	super(props);
    }

	render() {
        return (
        	<div className = "container p-3 m-0">
        		<div className = "row align-items-start justify-content-center">

                    <Qtr label = 'RUSSIAN PREMIER LEAGUE' src = '/img/ball.png' />
                    <Qtr label = 'ENGLISH PREMIER LEAGUE' src = '/img/trophy.png'/>
                    <Qtr label = 'LA LIGA' src = '/img/player.png'/>
                    <Qtr label = 'BUNDESLIGA' src = '/img/tshirt.png'/>
                    
        		</div>
        	</div>
        )
    }
}