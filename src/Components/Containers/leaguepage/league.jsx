import React, {Component} from 'react';

import Apphead from '../apphead/apphead.jsx';
import './league.css';
import {Button} from 'reactstrap';
import {Link} from 'react-router-dom';

const text = [
{name: 'RPL', txt: ['FOUNDED IN 2001', 'PLAYING 16 TEAMS', 'OFFICIAL BROADCASTER: MATCHTV']},
{name: 'EPL', txt: ['FOUNDED IN 2011', 'PLAYING 20 TEAMS', 'OFFICIAL BROADCASTER: SKY']},
{name: 'LL', txt: ['FOUNDED IN 2011', 'PLAYING 20 TEAMS', 'OFFICIAL BROADCASTER: SKY']},
{name: 'Bundesliga', txt: ['FOUNDED IN 2011', 'PLAYING 20 TEAMS', 'OFFICIAL BROADCASTER: SKY']}
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
                            
                            <div className="col-4 col-md-4 conts mr-1 myNewDivHeight" style = {{paddingTop: '5%'}}>
                                <img src = '/public/img/ballsmall.png'/>
                                <h1 style = {{marginTop: '10%'}}>
                                    INFO
                                </h1>

                                {text.map(function(item, index) {
                                    if (link === item.name) {
                                            item.txt.map(function(items, index) {
                                                console.log(items);
                                            })
                                        return (<div key = {index}>ss</div>)
                                    }
                                    else {
                                        //console.log('false');
                                    }
                                })
                                }
                            
        	               </div>
                            
                           {text.map(function(item) {
                                    if (link === item.name) {
                                        //console.log('true', item.name);
                                        return (
                                            <Link to = {`/public/table/${link}`} key = {item.name} 
                                            className="col-3 col-md-3 cont mr-1" style = {{color: 'white'}}>
                                                <div style={{marginTop: '100%'}}>
                                                    <h2>TABLE GRAPH</h2>
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
