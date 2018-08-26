import React, {Component} from 'react';
import Graph from '../../Containers/signin/graph/graph.jsx';

export default class Select extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
      //dataname: []
    };
    this.handleChange = this.handleChange.bind(this);
    
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({value: event.target.value,
    });
  }

  render() {
  return (
    <div>
    <div className='container pb-4 pl-4 pr-4'>
      <div className='row justify-content-center align-items-start'>
        <div className='col-5'>
          <h2 style = {{textAlign: 'center'}}>CHOOSE A TEAM:</h2>
          <form>
            <select style = {{margin: 'auto', display: 'block'}} 
            className = 'form-control'
            name={this.props.name}
            value={this.state.value}
            onChange = {this.handleChange}>
            
              <option value='' disabled>
                {this.props.first}
              </option>
              {this.props.options.map(
                option => {
                  return (
                    <option key={option}
                    value={option}
                    label={option}>
                    {option}
                    </option>
                    );
                }
                )
              }
            </select>
          </form>
        </div>
      </div>
    </div>
    <Graph data = {this.props.identified} datan = {this.state.value} />
    </div>
    );
}
}
//export default Select;
