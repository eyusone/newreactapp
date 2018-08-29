import React, {Component, propTypes} from 'react';
import './scores.css';
import Table from './table.jsx';

export class Element extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='container'>
                <div className='row justify-content-center align-items-start'>
                    <div className='col-9' style = {{minHeight: '500px', boxShadow: '5px 0 50px #888888'}}>
                        <Table link = {this.props.link}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Element;