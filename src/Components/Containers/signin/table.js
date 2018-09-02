import React, { Component, propTypes } from 'react';
import './table.css';
import Apphead from '../apphead/apphead.js';
import Sidebar from '../../Forms/Sidebar/sidebar.js';
import Element from './tableview.js';

const league = [
  { name: 'RPL', url: 'databox.json' },
  { name: 'EPL', url: 'epl.json' },
  { name: 'LL', url: 'laliga.json' },
  { name: 'Bundesliga', url: 'bundesliga.json' }
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
            return (<Element url = {item.url} key = {index}/>);
          }
        })
        }
      </div>
    );
  }
}
