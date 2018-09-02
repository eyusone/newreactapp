import { combineReducers } from 'redux';
import Switches from './selectreducer.js';
import Getdata from './getdatareducer.js';
import GraphData from './graphreducer.js';
//import Statenull from './statenullreducer.jsx';

const MainReducer = combineReducers({
	Switches, Getdata, GraphData
});

export default MainReducer;
