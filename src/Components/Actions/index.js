export const switchTeam = value => ({
	//console.log(value);
    type: 's',
    value
})

export const stateNull = () => ({
	type: 'STATE_NULL'	
})

export const getData = data => ({
	type: 'GET_DATA',
	data
})

export const initialTeam = value => ({
    type: 'INIT_TEAM',
    value
})
