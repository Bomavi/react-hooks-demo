/* local imports: common */
import * as types from './../types';

export const register = userData => ({
	type: types.REGISTER,
	payload: userData,
});

export const registerOnSuccess = user => ({
	type: types.REGISTER_ON_SUCCESS,
	payload: user,
});

export const registerOnFail = error => ({
	type: types.REGISTER_ON_FAIL,
	payload: error,
	error: true,
});
