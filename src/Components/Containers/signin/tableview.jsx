import React, {Component, propTypes} from 'react';
import './table.css';
import Select from '../../Forms/Select/select.jsx';

const teamname = [
  'ZENIT','CSKA','RUBIN'
];

export class Element extends React.Component {

    constructor(props) {
      super(props);

      this.state = {
        data: []
      }
    }

    componentDidMount() {
      //parse info here
      //const url = "http://localhost:8080/src/Components/Containers/signin/" + this.props.url;
      const url = "https://raw.githubusercontent.com/eyusone/newreactapp/master/src/Components/Containers/signin/" + this.props.url;
      fetch(url)
      .then(res => res.json())
      .then(parsedata => this.setState({data: parsedata}))
      .catch(err => {  
          console.log('Fetch Error :-S', err);  
      })
    }

    render() {
      console.log(typeof(this.state.data.table));
      return (
        <Select name='team' first = {this.state.data.first} options={teamname} 
                      identified = {
                        this.state.data.table
                      }
          />
        )
    }
}

export default Element;