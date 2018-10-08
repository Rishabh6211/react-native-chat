

export default function(state={ usersList: [], userData: []}, action){ // reducres are create to get active user

	switch(action.type){

		case "GET_DATA":
		console.log(action.payload)
			return {
				...state,
				usersList: action.payload,
			}
			break;
		case "user_DATA":
		console.log(action.payload)
			return {
				...state,
				userData: action.payload,
			}
			break;
		
	}
	return state;
}