import React, { Component, PropTypes } from 'react';
import './graph.css';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Label } from 'recharts';


export class Graph extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const data = this.props.data;

    return (
      <div className = 'container p-4'>
        <div className = 'row'>
          <div className = 'col'>
            <LineChart width={900} height={360} data={data}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <XAxis dataKey='name'><Label value = 'MATCHDAY' position = 'bottom'/></XAxis>
              <YAxis reversed = 'true'/>
              <CartesianGrid strokeDasharray='3 3'/>
              <Tooltip/>
              <Line type='monotone' dataKey={this.props.datan} stroke='#8884d8'
                activeDot={{ r: 8 }}
              />
              {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" />*/}
            </LineChart>
          </div>
        </div>
      </div>
    );
  }
}

export default Graph;
