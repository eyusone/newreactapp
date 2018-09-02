import React, { Component } from 'react';

// import Apphead from '../apphead/apphead.jsx';
// import './league.css';
/* import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';*/

export default class Aboutpage extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // let el = document.getElementById('main');
    // var style = getComputedStyle(el);
    // console.log(style.width);
  }

  render() {
    return (
      <div className='container pl-4 pr-4 pb-3'>
        <div className='row align-items-start justify-content-center'>
          <div className='col-8 pt-4'
            style = {{ minHeight: '500px', boxShadow: '5px 0 50px #888888', textAlign: 'center', fontSize: '15pt' }}
          />
        </div>
      </div>
    );
  }
}
