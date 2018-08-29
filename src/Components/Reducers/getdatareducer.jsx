const initialState = {
	data: []
};

const Getdata = (state = initialState, action) => {
	//let value;
	switch (action.type) {
		case 'GET_DATA' :
			return Object.assign({}, state, {
        		data: action.data
      		})
		case 'STATE_NULL':
			return Object.assign({}, state, {
        		data: []
      		})
		default: 
			return state
		}
	}

export default Getdata;

/*return 
[
			...state,
			{value: action.value}
			]
*/




