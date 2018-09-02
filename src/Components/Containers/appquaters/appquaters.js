import React, { Component } from 'react';
//import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './appquaters.css';
//import { Button } from 'reactstrap';
//import ReactHover from 'react-hover';
import { Link } from 'react-router-dom';
import Qtr from './qtr.js';
// import Wrpqtr from './qtr.jsx';
// import Wrapper from '../../Wrappers/wraptrans.jsx';

const ln = ['RPL', 'EPL', 'LL', 'Bundesliga'];
// to={`/news/${item.id}`}


export default class Quaters extends Component {
  constructor(props) {
    	super(props);
  }

  render() {
    return (
      <div className = 'container p-3' style = {{ margin: 'auto' }}>
        <div className = 'row align-items-start justify-content-center'>

          <Link to = {`/league/${ln[0]}`} className = 'col-4 p-1 mr-4 mb-4 contents' style = {{ color: 'black' }}>
            <Qtr label = 'SERIE A' src = '/img/ball.png' />
          </Link>

          <Link to = {`/league/${ln[1]}`} className = 'col-4 p-1 mr-4 mb-4 contents' style = {{ color: 'black' }}>
            <Qtr label = 'ENGLISH PREMIER LEAGUE' src = '/img/trophy.png'/>
          </Link>

          <Link to = {`/league/${ln[2]}`} className = 'col-4 p-1 mr-4 mb-4 contents' style = {{ color: 'black' }}>
            <Qtr label = 'LA LIGA' src = '/img/player.png'/>
          </Link>

          <Link to = {`/league/${ln[3]}`} className = 'col-4 p-1 mr-4 mb-4 contents' style = {{ color: 'black' }}>
            <Qtr label = 'BUNDESLIGA' src = '/img/tshirt.png'/>
          </Link>

        </div>
      </div>
    );
  }
}
