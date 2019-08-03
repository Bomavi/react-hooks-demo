/* local imports: common */
import * as types from './../types';

export const logout = () => ({
	type: types.LOGOUT,
});

export const logoutOnSuccess = id => ({
	type: types.LOGOUT_ON_SUCCESS,
	payload: id,
});

export const logoutOnFail = error => ({
	type: types.LOGOUT_ON_FAIL,
	payload: error,
	error: true,
});
