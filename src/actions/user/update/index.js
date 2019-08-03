/* local imports: common */
import * as types from './../types';

export const updateUser = user => ({
	type: types.UPDATE_USER,
	payload: user,
});

export const updateUserOnSuccess = user => ({
	type: types.UPDATE_USER_ON_SUCCESS,
	payload: user,
});

export const updateUserOnFail = error => ({
	type: types.UPDATE_USER_ON_FAIL,
	payload: error,
	error: true,
});
