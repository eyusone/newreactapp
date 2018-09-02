/*const initialState = {
	payload: 'ZENIT' 
}*/
const initialmyState = (state = [], action) => {
	if (action.type == 'INIT_TEAM') {
		//console.log(state);
		return [...state,
			action.value]
		}

	}

const initialState = {
	value: undefined
}


const Switches = (state = initialState, action) => {
	switch (action.type) {
		case 's' :
			return Object.assign({}, state, {
        		value: action.value
      		})
      	case 'STATE_NULL':
      		return  Object.assign({}, state, {
        		value: undefined
      		})
		default:
			//console.log(state); 
			return state
		}
	}

export default Switches;

/*return 
[
			...state,
			{value: action.value}
			]
*/


