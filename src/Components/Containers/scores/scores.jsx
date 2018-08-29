import React, {Component, propTypes} from 'react';
import './scores.css';
import Apphead from '../apphead/apphead.jsx';
import Element from './scoresview.jsx'

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
        <Apphead text = 'SIMPLE TABLE'/>

        {league.map(function(item, index) {
          if (item.name===ln) {
            //console.log(item.url);
            return (<Element url = {item.url} key = {index} link = {ln}/>)
          }
        })
        }
      </div>
    )
    }
}