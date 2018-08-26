/*const initialState = {
	payload: 'ZENIT' 
}*/
const Statenull = (state = [], action) => {
	//let value;
	switch (action.type) {
		case 'STATE_NULL' :
			return Object.assign({}, state, {
        		value: null
      		})
		default: 
			return state
		}
	}

export default Statenull;

/*return 
[
			...state,
			{value: action.value}
			]
*/


