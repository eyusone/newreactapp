import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Graph from '../../Containers/signin/graph/graph.js';
import {connect} from 'react-redux';
import {switchTeam, stateNull, initialTeam} from '../../Actions/index.js';

const action = {switchTeam};

export class Select extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    //const team = this.props.initTeam;
    //console.log(team);
  }

  
  componentDidMount() {
    const team = this.props.initTeam;
    //console.log('didmount', team);
    this.props.onSelectChange(team);
  }

  handleChange(event) {
    event.preventDefault();
    this.props.onSelectChange(event.target.value);
  }

  componentWillUnmount() {
    this.props.onSetStateNull();
  }



  render() {

  var optionsdata = this.props.options.map(option => {return (
                    <option key={option}
                    value={option}
                    label={option}>
                    {option}
                    </option>
                    )}
                )

  const options = this.props.options;
  return (
    <div>
    <div className='container pb-4 pl-4 pr-4'>
      <div className='row justify-content-center align-items-start'>
        <div className='col-5'>
          <h2 style = {{textAlign: 'center'}}>CHOOSE A TEAM:</h2><br/>
          <form>
            <select style = {{margin: 'auto', display: 'block'}} 
            className = 'form-control'
            name={this.props.name}
            onChange = {this.handleChange}
            value={this.props.value}>
            
              <option value='' disabled>
                {this.props.first}
              </option>
              {optionsdata
                }
                )
              }
            </select>
          </form>
        </div>
      </div>
    </div>
    <Graph data = {this.props.identified} datan = {this.props.value} />
    </div>
    );
}
}

Select.propTypes = {
  options: PropTypes.array
}

const mapStateToProps = (state) => {
  //console.log(state);
  return { 
    value: state.Switches.value
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSelectChange: (value) => {
      dispatch(switchTeam(value));
    },
    onSetStateNull: (state) => {
      dispatch(stateNull(state));
    },
    setinitialTeam: (value) => {
      dispatch(initialTeam(value));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Select);


