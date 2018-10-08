/*export user = (props) => {
	return user:{
		firstName:'Rishabh',
		lastName:'Gupta'
	}
}*/
import {Actions} from "react-native-router-flux";
export const FETCH_POST = 'FETCH_POST';

import Data from '../../user.json';
const ROOT_URL = 'http://172.24.5.26:8081/user.json';
//var instance = axios.create({headers: {'Content-Type': 'application/json',"Accept":"application/json"}});
export function Get_data(){
	
	return dispatch => {
			
			
		dispatch({
					type: 'GET_DATA',payload : Data.users
				});
		
      	
      }
	
}
export function user_data(id){
	
	return dispatch => {
			
		let loginUser = Data.users.find((obj) => obj.id === id)	
		dispatch({
					type: 'user_DATA',payload : loginUser
				});
		
      	
      }
	
}
export function login(username,password){
	return dispatch => {
	dispatch({
		type: 'login_DATA',payload : null
	});
	let loginUser = Data.users.find((obj) => obj.first === username && obj.password === password)
	if(loginUser)
	{
	dispatch({
		type: 'login_DATA',payload : loginUser
	});
	}
}
}
