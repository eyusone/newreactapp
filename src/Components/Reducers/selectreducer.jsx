/*const initialState = {
	payload: 'ZENIT' 
}*/
const initialState = {
	value: 'CSKA' 
}


const Switches = (state = initialState, action) => {
	//let value;
	switch (action.type) {
		case 's' :
			return Object.assign({}, state, {
        		value: action.value
      		})
		default: 
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


