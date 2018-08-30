import React, {Component, propTypes} from 'react';
import './scores.css';
import {connect} from 'react-redux';
import {getData, stateNull} from '../../Actions/index.jsx';

export class Table extends React.Component {

    constructor(props) {
        super(props);
        this.MY_API_KEY = '540d563d81e740c08d7465f16ce75598';
        this.urls = {
            RPL: 'https://api.football-data.org/v2/competitions/2019/standings',
            EPL: 'https://api.football-data.org/v2/competitions/2021/standings',
            LL: 'https://api.football-data.org/v2/competitions/2014/standings',
            Bundesliga: 'https://api.football-data.org/v2/competitions/2002/standings'
        };
        this.leagueDataGet = this.leagueDataGet.bind(this);
    }

    leagueDataGet(league) {
        let base_url;
        switch (league) {
          case 'RPL':
            //console.log('truetruetrue!!!');
            base_url = this.urls.RPL;  
            break;
          case 'EPL':
            base_url = this.urls.EPL; 
            break;
          case 'LL':
            base_url = this.urls.LL; 
            break;
          case 'Bundesliga':
            base_url = this.urls.Bundesliga;  
            break;
        
          default:
            break;
        }
    
        var myHeaders = new Headers();
        myHeaders.append("X-Auth-Token", this.MY_API_KEY);
        myHeaders.append("Content-Type", "text/plain")
        
        var myInit = { method: 'GET',
                      headers: myHeaders,
                      cache: 'default' };

        fetch(base_url, myInit).then((res) => {
          res.json().then(function(data) {  
          //console.log(data.standings[0].table);
          //console.log(res.status);
          this.props.getTableData(data.standings[0].table);
          
          }.bind(this));
        });
        
        }

    componentDidMount() {
        //props league
        const league = ['RPL','EPL','LL','Bundesliga'];

        league.forEach((link) => {
            //console.log(link);
            if(this.props.link === link) {
                this.leagueDataGet(link);
            }
        })
    }

    componentWillUnmount() {
        this.props.onSetStateNull();
    }

    render() {

        var teamcontent = this.props.data.map( (team, i) => {
                //console.log(team,'kee');
                return (
                    <li className = 'list-item' key = {team.team.name}>
                        <span className = 'ml-2'>{i+1}</span>
                        <span style = {{marginLeft: '10%'}}>{team.team.name}</span>
                        <span className="pull-right mr-2">{team.points}</span>
                    </li>
                    );
            })
        

        return (
            <div className='container'>
                <div className='row justify-content-center align-items-start'>
                    <div className='col-9' style = {{minHeight: '500px'}}>
                        <ul className = 'simpletable'>
                            {teamcontent}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    //console.log(typeof(state.Getdata.data));
    return {
        data: state.Getdata.data
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getTableData: (value) => {
            dispatch(getData(value));
        },
        onSetStateNull: (state) => {
          dispatch(stateNull(state));
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Table);