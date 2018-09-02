const initialState = {
	data: []
};

const GraphData = (state = initialState, action) => {
	//let value;
	switch (action.type) {
		case 'GET_DATA' :
			return Object.assign({}, state, {
        		data: action.data
      		})
		default: 
			return state
		}
	}

export default GraphData;
