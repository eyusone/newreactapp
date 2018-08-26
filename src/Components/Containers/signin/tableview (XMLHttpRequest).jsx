import React, {Component, propTypes} from 'react';
import './table.css';
import Select from '../../Forms/Select/select.jsx';

const data = [
      {name: '1', CSKA: 3, ZENIT: 3, RUBIN: 3},
      {name: '2', CSKA: 3, ZENIT: 3, RUBIN: 3},
      {name: '3', CSKA: 2, ZENIT: 3, RUBIN: 3},
      {name: '4', CSKA: 2, ZENIT: 3, RUBIN: 3},
      {name: '5', CSKA: 1, ZENIT: 3, RUBIN: 3},
      {name: '6', CSKA: 4, ZENIT: 3, RUBIN: 3},
      {name: '7', CSKA: 8, ZENIT: 3, RUBIN: 13},
      {name: '8', CSKA: 6, ZENIT: 3, RUBIN: 9},
      {name: '9', CSKA: 4, ZENIT: 10, RUBIN: 3},
      {name: '10', CSKA: 2, ZENIT: 3, RUBIN: 3},
      {name: '11', CSKA: 2, ZENIT: 3, RUBIN: 5},
      {name: '12', CSKA: 3, ZENIT: 3, RUBIN: 7},
      {name: '13', CSKA: 2, ZENIT: 3, RUBIN: 3},
      {name: '14', CSKA: 2, ZENIT: 3, RUBIN: 3},
      {name: '15', CSKA: 3, ZENIT: 3, RUBIN: 3},
];

//const kkk = JSON.stringify(data, "", 4);

const teamname = [
  'ZENIT','CSKA','RUBIN'
];

const first = 'RUSSIAN PREMIER LEAGUE';

export class Element extends React.Component {

    constructor(props) {
      super(props);

      this.state = {
        data: []
      }

      //this.httpGet = this.httpGet.bind(this);
    }

    /*httpGet(urlz) {
        return new Promise(function(resolve, reject) {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', urlz, true);

          xhr.onload = function() {
            if (this.status == 200) {
              resolve(this.response);
            } 
            else {
              var error = new Error(this.statusText);
              error.code = this.status;
              reject(error);
            }
          };

          xhr.onerror = function() {
            reject(new Error("Network Error"));
          };

          xhr.send();
          });
    }*/

    componentDidMount() {
      //parse info here
      const url = "http://localhost:8080/src/Components/Containers/signin/" + this.props.url;

      /*this.httpGet(url)
      .then(
        response => datas = JSON.parse(`${response}`),
        console.log(datas),
        error => console.log(`Rejected: ${error}`)
      );*/
      fetch(url)
      .then(res => res.json())
      .then(parsedata => this.setState({data: parsedata}))
      .catch(err => {  
          console.log('Fetch Error :-S', err);  
      })
    }

    render() {
      const table = this.state.data.table;
      console.log(table);
      const first = this.state.data.first;
      const teamname = this.state.data.teamname;

      //console.log('fetch data',table);

      return (
        <Select name='team' first = {first} options={teamname} 
                      identified = {
                        table
                      }
          />
        )
    }
}

export default Element;