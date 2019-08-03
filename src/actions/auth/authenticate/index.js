/* local imports: common */
import * as types from './../types';

export const authenticate = () => ({
	type: types.AUTHENTICATE,
});

export const authenticateOnSuccess = user => ({
	type: types.AUTHENTICATE_ON_SUCCESS,
	payload: user,
});

export const authenticateOnFail = error => ({
	type: types.AUTHENTICATE_ON_FAIL,
	payload: error,
	error: true,
});
