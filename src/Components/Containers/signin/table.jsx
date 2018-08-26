import React, {Component, propTypes} from 'react';
import './table.css';
import Apphead from '../apphead/apphead.jsx';
import Sidebar from '../../Forms/Sidebar/sidebar.jsx';
import Element from './tableview.jsx'

const league = [
{name: 'RPL', url: 'databox.json'},
{name: 'EPL', url: './epl.json'},
{name: 'LL', url: './LL.json'},
{name: 'Bundesliga', url: './bundesliga.json'}
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

        {league.map(function(item, index) {
          if (item.name===ln) {
            //console.log(item.url);
            return (<Element url = {item.url} key = {index}/>)
          }
        })
        }
      </div>
    )
    }
}