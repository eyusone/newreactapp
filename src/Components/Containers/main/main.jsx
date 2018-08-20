import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import PropTypes from 'prop-types';
import './main.css';

import Sidebar from '../../Forms/Sidebar/sidebar.jsx';
import Apphead from '../../Containers/apphead/apphead.jsx';
import Quaters from '../../Containers/appquaters/appquaters.jsx';

const RightMain = (props) => {
    const {link} = props;
    return (
        <div><h1>{link}</h1></div>
        )
}

export default class Main extends Component {
	constructor(props) {
    	super(props);
    }
    
	render() {        
        //const link = this.props.links;
        //console.log(link);
    
        //if (link=='http:/localhost:3000/public/') {
            return (
    	<div className = "container-fluid m-0 p-0 device">
    		<div className = "row m-0">
    			<div className = "col-3 m-0 p-0 sidebar">
    			    <Sidebar />
    			</div>
                <div className = "col-9 main" style = {{minHeight: '100vh'}}>
                    <Apphead text = 'MAIN PAGE APPLICATION' />
                    <Quaters />
                    {/*<RightMain link = 'http:/localhost:3000/public/' />*/}
                </div>
    		</div>
    	</div>
        )
    //}
    
    }
}

propTypes: {
    links: PropTypes.string
  };