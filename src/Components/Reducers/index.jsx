import { combineReducers } from 'redux';
import Switches from './selectreducer.jsx';
import Getdata from './getdatareducer.jsx';
import GraphData from './graphreducer.jsx';
//import Statenull from './statenullreducer.jsx';

const MainReducer = combineReducers({
	Switches, Getdata, GraphData
});

export default MainReducer;
