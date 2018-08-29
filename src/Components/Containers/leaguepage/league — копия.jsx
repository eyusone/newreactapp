import React, {Component} from 'react';

import Apphead from '../apphead/apphead.jsx';
import './league.css';
import {Button} from 'reactstrap';
import {Link} from 'react-router-dom';

const text = [
{name: 'RPL', fullname: 'SERIE A',
txt: 'Серия A — высший дивизион итальянской футбольной лиги, является одним из самых сильных футбольных дивизионов в мире, занимая в рейтинге УЕФА третье место после чемпионатов Испании и Англии (по состоянию на 2017 год).'},
{name: 'EPL', fullname: 'ENGLISH PREMIER LEAGUE',
txt: 'Серия A (итал. Serie A) — высший дивизион итальянской футбольной лиги, является одним из самых сильных футбольных дивизионов в мире, занимая в рейтинге УЕФА третье место после чемпионатов Испании и Англии (по состоянию на 2017 год).'},
{name: 'LL', fullname: 'LA LIGA',
txt: 'Серия A (итал. Serie A) — высший дивизион итальянской футбольной лиги, является одним из самых сильных футбольных дивизионов в мире, занимая в рейтинге УЕФА третье место после чемпионатов Испании и Англии (по состоянию на 2017 год).'},
{name: 'Bundesliga', fullname: 'BUNDESLIGA',
txt: 'Серия A (итал. Serie A) — высший дивизион итальянской футбольной лиги, является одним из самых сильных футбольных дивизионов в мире, занимая в рейтинге УЕФА третье место после чемпионатов Испании и Англии (по состоянию на 2017 год).'}
];

export default class Leaguepage extends Component {

	constructor(props) {
    	super(props);
    }

	render() {
        const link = this.props.link;
        //console.log(link);
            return (
                    <div className = "container pl-4 pr-4 pb-3">
                        <div className = "row align-items-center justify-content-center">
                        
                                {text.map(function(item, index) {
                                    if (link === item.name) {
                                        return (
                                            <div className="col-12 col-md-12 conts mr-1 myNewDivHeight" style = {{paddingTop: '3%'}}>
                                                <h1 style = {{marginTop: '1%'}} className = 'display-4'>
                                                {item.fullname}
                                                </h1>
                                                
                                            </div>
                                            )
                                    }
                                    else {
                                        //console.log('false');
                                    }
                                })
                                }
                            
                           {text.map(function(item) {
                                    if (link === item.name) {
                                        //console.log('true', item.name);
                                        return (
                                            <Link to = {`/public/table/${link}`} key = {item.name} 
                                            className="col-3 col-md-3 cont mr-1" style = {{color: 'white'}}>
                                                <div style={{marginTop: '75%'}}>
                                                    <h2>TABLE GRAPH</h2>
                                                    <img src = '/public/img/data-table.png' style = {{maxWidth: '150px', maxHeight: '150px'}}/>
                                                </div>
                                            </Link>
                                            )
                                    }
                                    else {
                                        //console.log('false');
                                    }
                            })
                            }

                            
                            {text.map(function(item) {
                                    if (link === item.name) {
                                        //console.log('true', item.name);
                                        return (    
                                            <Link to = {`/public/scores/${link}`} 
                                            className="col-3 col-md-3 cont mr-1" key = {item.name} style = {{color: 'white'}}>
                                                <div style={{marginTop: '100%'}}>
                                                     <h2>SIMPLE TABLE</h2>
                                                </div>
                                            </Link>)
                                    }
                                    else {
                                        //console.log('false');
                                    }
                            })
                            }


                        </div>
                   </div>
            )
    }
}
