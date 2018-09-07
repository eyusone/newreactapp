import React, { Component } from 'react';

// import Apphead from '../apphead/apphead.jsx';
// import './league.css';
/* import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';*/
import './aboutpage.css';

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
            style = {{ minHeight: '500px', fontSize: '15pt' }}
          >
            <h2>APP STACK:</h2>
            <ul style = {{ padding: '0' }} >
              <li>Node.js (менеджер пакетов npm)</li>
              <li>ReactJS</li>
              <li>React Router</li>
              <li>Redux</li>
              <li>Верстка с помощью bootstrap</li>
              <li>Graphics - react-recharts</li>
              <li>Данные брались со API: https://www.football-data.org/ (для таблицы)</li>
              <li>Сборка приложения проводилась с помощью webpack4</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
