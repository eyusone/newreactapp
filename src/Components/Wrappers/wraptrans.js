import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './wraptrans.css';

const Wrapper = Compnt => { 
  return props => 
    <div className="page">
        <ReactCSSTransitionGroup
        transitionAppear={true}
        transitionLeave={true}
        transitionAppearTimeout={600}
        transitionEnterTimeout={600}
        transitionLeaveTimeout={200}
        transitionName={'slideright'}>
            <Compnt {...props} />
        </ReactCSSTransitionGroup>
    </div>;
};

export default Wrapper;