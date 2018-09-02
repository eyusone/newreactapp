import React, { Component, propTypes } from 'react';
import './table.css';
import Select from '../../Forms/Select/select.js';
import { connect } from 'react-redux';
import { getData } from '../../Actions/index.js';

export class Element extends React.Component {
  constructor(props) {
    super(props);
    this.nameofteam = this.nameofteam.bind(this);
  }

  componentDidMount() {
    // parse info here

    const url = `http://localhost:8080/src/Components/Containers/signin/${  this.props.url}`;
    // const url = "https://raw.githubusercontent.com/eyusone/newreactapp/master/src/Components/Containers/signin/" + this.props.url;

    fetch(url)
      .then(res => res.json())
      .then(parsedata => this.props.getTableData(parsedata))
      .catch(err => {
        console.log('Fetch Error :-S', err);
      });

    // console.log(this.props.url);
  }

  nameofteam(url) {
    switch (url) {
      case 'databox.json':
        const teamname = [
          'MILAN', 'INTER', 'JUVENTUS', 'NAPOLI',
          'ROMA',
          'ATALANTA',
          'LAZIO',
          'FIORENTINA'
        ];

        return teamname;
      case 'epl.json':
        const teamnames = [
          'MANUTD', 'CHELSEA', 'ARSENAL', 'TOTTENHAM',
          'EVERTON',
          'LIVERPOOL',
          'LEICESTER',
          'MANCITY'
        ];

        return teamnames;
      case 'laliga.json':
        const teamnamez = [
          'REALM', 'BARCA', 'ATLETICOM', 'VILLAREAL',
          'SEVILLA',
          'VALENCIA',
          'ATLETICOB',
          'CELTA'
        ];

        return teamnamez;
      case 'bundesliga.json':
        const teamnamex = [
          'BAYERNM', 'BORUSSIAD', 'SCHALKE04', 'WOLFSBURG',
          'BORUSSIAM',
          'FREIBURG',
          'MAINZ',
          'BAYER04'
        ];

        return teamnamex;
    }
  }

  render() {
    const teams = this.nameofteam(this.props.url);

    return (
      <Select name='team' first = {this.props.data.first} options={teams}
        identified = {
          this.props.data.table
        }

      />
    );
  }
}

const mapStateToProps = (state) => {
  // console.log(state.GraphData.data);
  return {
    data: state.GraphData.data,
    teamname: state.GraphData.data.teamname
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getTableData: (value) => {
      dispatch(getData(value));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Element);
