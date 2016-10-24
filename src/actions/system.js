import * as at from '../constants/actionType'

export function initApp() {
	return {
		type: at.INIT_APP,
		appName: 'xzhit',
		width: window.innerWidth,
		height: window.innerHeight
	}
}

export function resizeApp() {
	return {
		type: at.RESIZE_APP,
		width: window.innerWidth,
		height: window.innerHeight
	}
}
