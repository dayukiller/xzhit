import * as at from '../constants/actionType'

export function system(state={}, action={}) {
	switch(action.type) {
		case at.INIT_APP:
			return Object.assign({}, state, {
				appName: action.appName,
				width: action.width,
				height: action.height
			})
		case at.RESIZE_APP:
			return Object.assign({}, state, {
				width: action.width,
				height: action.height
			})
		default:
			return state;
	}
}
