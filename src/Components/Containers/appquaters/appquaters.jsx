import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './appquaters.css';
import {Button} from 'reactstrap';
import ReactHover from 'react-hover';

export default class Quaters extends Component {
	constructor(props) {
    	super(props);
    }

	render() {
        return (
        	<div className = "container p-4">
        		<div className = "row align-items-start justify-content-center">
        			<div className = "col-5 p-1 mr-4 mb-4 contents">
        			    <h3 className = 'p-1' style = {{ borderBottom: '2px solid #A54BE0'}}>LOOK AT ME</h3>
                        <div className = 'txts'>
                        <p>HER.Some text here.Some text here.Some text here.Some text here.Some text here.
                        Some text here.Some text here.Some text here.Some text here.Some text here.
                        Some text here.Some text here.Some text here.Some text here.Some text here.</p>
                        <Button className = 'btn' color = 'primary'>NEXT</Button>
                        </div>
        			</div>
                    <div className = "col-5 p-1 qeq mr-4 mb-4" style = {{minHeight: '35vh', textAlign: 'center', 
                    background: '#F5ECEA', border: '2px solid #DED2CF', borderRadius: '5px'}} id = 'qeq'>
                        <h3 className = 'p-1' style = {{ borderBottom: '2px solid #A54BE0'}}>LOOK AT ME</h3>
                        <p>Some text here.Some text here.Some text here.Some text here.Some text here.Some text here.
                        Some text here.Some text here.Some text here.Some text here.Some text here.
                        Some text here.Some text here.Some text here.Some text here.Some text here.</p>
                        <Button className = 'btn' color = 'primary'>NEXT</Button>
                    </div>
                    <div className = "col-5 p-1 qeq mr-4 mb-4" style = {{minHeight: '35vh', textAlign: 'center', 
                    background: '#F5ECEA', border: '2px solid #DED2CF', borderRadius: '5px'}} id = 'qeq'>
                        <h3 className = 'p-1' style = {{ borderBottom: '2px solid #A54BE0'}}>LOOK AT ME</h3>
                        <p>Some text here.Some text here.Some text here.Some text here.Some text here.Some text here.
                        Some text here.Some text here.Some text here.Some text here.Some text here.
                        Some text here.Some text here.Some text here.Some text here.Some text here.</p>
                        <Button className = 'btn' color = 'primary'>NEXT</Button>
                    </div>
                    <div className = "col-5 p-1 qeq mr-4 mb-4" style = {{minHeight: '35vh', textAlign: 'center', 
                    background: '#F5ECEA', border: '2px solid #DED2CF', borderRadius: '5px'}} id = 'qeq'>
                        <h3 className = 'p-1' style = {{ borderBottom: '2px solid #A54BE0'}}>LOOK AT ME</h3>
                        <p>Some text here.Some text here.Some text here.Some text here.Some text here.Some text here.
                        Some text here.Some text here.Some text here.Some text here.Some text here.
                        Some text here.Some text here.Some text here.Some text here.Some text here.</p>
                        <Button className = 'btn' color = 'primary'>NEXT</Button>
                    </div>
        		</div>
        	</div>
        )
    }
}