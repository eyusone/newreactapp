import React, { Component, propTypes } from 'react';
import './table.css';
import Apphead from '../apphead/apphead.js';
import Sidebar from '../../Forms/Sidebar/sidebar.js';
import Element from './tableview.js';

const league = [
  { name: 'RPL', url: 'databox.json', team: 'MILAN' },
  { name: 'EPL', url: 'epl.json', team: 'MANUTD' },
  { name: 'LL', url: 'laliga.json', team: 'REALM' },
  { name: 'Bundesliga', url: 'bundesliga.json', team: 'BAYERNM' }
];

export default class Table extends Component {
  constructor(props) {
    	super(props);
  }

  render() {
    const ln = this.props.match.params.ln;

    return (
      <div className='table' id='table'>
        <Apphead text = 'TABLE GRAPH'/>

        {league.map((item, index) => {
          if (item.name === ln) {
            // console.log(item.url);
            return (<Element url = {item.url} key = {index} team = {item.team}/>);
          }
        })
        }
      </div>
    );
  }
}
