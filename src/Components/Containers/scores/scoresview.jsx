import React, {Component, propTypes} from 'react';
import './scores.css';
import Table from 'rc-table';

export class Element extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
      
    }



    render() {
        const columns = [
        {
        title: 'Name', dataIndex: 'name', key:'name', width: 100,
        }, {
        title: 'Age', dataIndex: 'age', key:'age', width: 100,
        }, {
        title: 'Address', dataIndex: 'address', key:'address', width: 200,
        }, {
        title: 'Operations', dataIndex: '', key:'operations', render: () => <a href="#">Delete</a>,
        }];

        const data = [
          { name: 'Jack', age: 28, address: 'some where', key:'1' },
          { name: 'Rose', age: 36, address: 'some where', key:'2' },
        ];
        return (
            <div className='container pb-4 pl-4 pr-4'>
                <div className='row justify-content-center align-items-start'>
                    <div className='col-5' style = {{textAlign: 'center'}}>
                    <Table columns={columns} data={data} />, mountNode)   
                    </div>
                </div>
            </div>
        )
    }
}

export default Element;