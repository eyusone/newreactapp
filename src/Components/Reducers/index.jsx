const switches = (state = [], actions) => {
	switch(actions.type) {
		case('SWITCH_TEAM') {
			return [
			...state,
			team: action.team
			]
			}
		default: 
			return state
		}
	}
}

export default switches;