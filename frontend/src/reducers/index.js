import {combineReducers} from 'redux';
import authReducer from './auth';
import currentuserReducer from './currentUser';
import questionReducers  from './questions';
import usersReducers from './users';

export default combineReducers({
    authReducer,currentuserReducer,questionReducers,usersReducers
})