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
    const teamname = [];

    switch (url) {
      case 'databox.json':
        teamname[0] = [
          'MILAN', 'INTER', 'JUVENTUS', 'NAPOLI',
          'ROMA',
          'ATALANTA',
          'LAZIO',
          'FIORENTINA'
        ];

        return teamname[0];
      case 'epl.json':
        teamname[1] = [
          'MANUTD', 'CHELSEA', 'ARSENAL', 'TOTTENHAM',
          'EVERTON',
          'LIVERPOOL',
          'LEICESTER',
          'MANCITY'
        ];

        return teamname[1];
      case 'laliga.json':
        teamname[2] = [
          'REALM', 'BARCA', 'ATLETICOM', 'VILLAREAL',
          'SEVILLA',
          'VALENCIA',
          'ATLETICOB',
          'CELTA'
        ];

        return teamname[2];
      case 'bundesliga.json':
        teamname[3] = [
          'BAYERNM', 'BORUSSIAD', 'SCHALKE04', 'WOLFSBURG',
          'BORUSSIAM',
          'FREIBURG',
          'MAINZ',
          'BAYER04'
        ];

        return teamname[3];
    }
  }

  render() {
    const teams = this.nameofteam(this.props.url);
    const datanames = ['databox.json', 'epl.json', 'laliga.json', 'bundesliga.json'];


    return (
      <Select name='team' first = {this.props.data.first} options={teams}
        identified = {
          this.props.data.table
        } initTeam = {this.props.team}
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
