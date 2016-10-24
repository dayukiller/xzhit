import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux'
import {system} from './system'
import {home} from './home'

const rootReducer = combineReducers({
	system,
	home,
	routing
});

export default rootReducer
