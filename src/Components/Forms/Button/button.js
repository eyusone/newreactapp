import React, { Component } from 'react';
import 'bootswatch/dist/sandstone/bootstrap.css';

class Createform extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    alert('work!');
  }
  render() {
    return (
      <form onSubmit = {this.handleSubmit} style = {{ margin: '2%', float: 'right' }}>
        <input type='submit' className='btn btn-success' value='Отправить' />
      </form>
    );
  }
}


export default Createform;
