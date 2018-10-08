export default function(state=[], action){ // reducres are create to get active user

	switch(action.type){

		case "login_DATA":
			return {
                 userdata :action.payload
                }
			break;
	}
	return state;
}