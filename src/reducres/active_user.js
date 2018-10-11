export default function(state=[], action){ // reducres are create to get active user

	switch(action.type){
		case "login_req":
			return {
				isLoading: true
			}
			brak;

		case "login_DATA":
			return {
				isLoading: false,
                 userdata :action.payload
                }
			break;
		
	}
	return state;
}