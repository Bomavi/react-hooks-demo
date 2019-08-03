/* local imports: common */
import * as types from './../types';

export const login = userData => ({
	type: types.LOGIN,
	payload: userData,
});

export const loginOnSuccess = user => ({
	type: types.LOGIN_ON_SUCCESS,
	payload: user,
});

export const loginOnFail = error => ({
	type: types.LOGIN_ON_FAIL,
	payload: error,
	error: true,
});
