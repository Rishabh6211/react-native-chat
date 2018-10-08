import {combineReducers} from 'redux';
import UserReducer from './user_reducer';
import ActiveUser from './active_user';
console.log(UserReducer)
const allReducer = combineReducers({
	users:UserReducer,
	activeuser:ActiveUser
	
})
export default allReducer;