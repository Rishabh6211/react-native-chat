/*export user = (props) => {
	return user:{
		firstName:'Rishabh',
		lastName:'Gupta'
	}
}*/
import {Actions} from "react-native-router-flux";
import {root_url} from "../configConst/constant"
import {AsyncStorage} from  'react-native';
export const FETCH_POST = 'FETCH_POST';


import Data from '../../user.json';
const ROOT_URL = 'http://172.24.5.26:8081/user.json';
//var instance = axios.create({headers: {'Content-Type': 'application/json',"Accept":"application/json"}});
export function Get_data(){
	
	return dispatch => {
		console.log("inside dispatch login >>> ")
		// dispatch({ type: 'login_req', payload: null })

		fetch(`https://chat-app123-node.herokuapp.com/onlineuser`, {
			method: 'GET',
			// timeout: 1000 * 60,
			headers: { 'Content-Type': 'application/json' },

		})
			.then(res => res.json())
			.then(users => {
				console.log("users", users)
				if (users.code === 200) {
					
					dispatch({
						type: 'GET_DATA',
						payload: users.data,

					});


				} else {

					dispatch({
						type: 'GET_DATA',
						payload: null
					});
				}

			}).catch(error => {
				console.log('error ==  ', error)

				dispatch({
					type: 'GET_DATA',
				});

			})
	}
	
}
export function user_data(item){
	console.log("item555555",item)
	return dispatch => {
			
		// let loginUser = Data.users.find((obj) => obj.id === id)	
		dispatch({
					type: 'user_DATA',payload : item
				});
				Actions.detail()
		
      	
      }
	
}
export function login(username){
	// alert("here"+root_url)
	return dispatch => {
		console.log("inside dispatch login >>> ",username)
		 dispatch({ type: 'login_req' })

		fetch(`https://chat-app123-node.herokuapp.com/loginuser`, {
			method: 'POST',
			// timeout: 1000 * 60,
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ user: username })
		})
			.then(res => res.json())
			.then(users => {
				AsyncStorage.setItem('userdata', JSON.stringify(users.data));
				console.log("users",users)
				if (users.code ===200) {
					alert("successfully Login")
					dispatch({
						type: 'login_DATA',
						payload: users.data,

					});
					Actions.listing()

				} else {

					dispatch({
						type: 'login_DATA',
						payload: null
					});
				}

			}).catch(error => {
				console.log('error ==  ', error)

				dispatch({
					type: 'login_FAILED',
				});

			})
	}
}

export function signup(name,email) {
	// alert("here"+root_url)
	return dispatch => {
		
		dispatch({ type: 'signup_req' })

		fetch(`https://chat-app123-node.herokuapp.com/chatuser`, {
			method: 'POST',
			// timeout: 1000 * 60,
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ user: name })
		})
			.then(res => res.json())
			.then(users => {
				console.log("users", users)
				if (users.code === 200) {
					alert("successfully register")
					
					Actions.login()

				} else {

					alert("Name already register")
				}

			}).catch(error => {
				console.log('error ==  ', error)

				// dispatch({
				// 	type: 'login_FAILED',
				// });

			})
	}
}