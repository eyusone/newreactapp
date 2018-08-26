export const switchTeam = value => ({
	//console.log(value);
        type: 's',
        value
})

export const stateNull = myState => ({
		type: 'STATE_NULL',
		myState		
})