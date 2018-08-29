import { combineReducers } from 'redux';
import Switches from './selectreducer.jsx';
import Getdata from './getdatareducer.jsx';
//import Statenull from './statenullreducer.jsx';

const MainReducer = combineReducers({
	Switches, Getdata
});

export default MainReducer;
