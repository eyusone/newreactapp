import React, {Component} from 'react';

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
                    <div className = "container pl-2 pr-2 pb-2">
                        <div className = "row align-items-center justify-content-center">
                        
                                {text.map(function(item, index) {
                                    if (link === item.name) {
                                        return (
                                            <div className="col-10 col-md-10 conts mr-1" key = {item.name}
                                            style = {{paddingTop: '1%'}}>

                                                <h1 style = {{textAlign: 'center'}} className = 'display-4'>
                                                {item.fullname}
                                                </h1>

                                                <div className = 'container p-0'>
                                                        <div className = 'row justify-content-center'>
                                                            <div className = 'col' style = {{width: '50%'}}>                                              
                                                                    <Link to = {`/public/table/${link}`} key = {item.name} 
                                                                    className="mr-1 btn btn-primary" style = {{marginLeft: '100px'}}>
                                                                        <h3 className = 'm-0 p-1'>TABLE GRAPH</h3>
                                                                    </Link>
                                                                                                                                
                                                            </div>

                                                            <div className = 'col' style = {{width: '50%'}}>                                 
                                                                    <Link to = {`/public/scores/${link}`} 
                                                                    className="mr-1 btn btn-primary" style = {{marginLeft: '100px'}}> 
                                                                        <h3 className = 'm-0 p-1'>SIMPLE TABLE</h3>
                                                                    </Link>
                                                                    
                                                            </div>
                                                        </div>
                                                </div>
                                            </div>
                                            )
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
