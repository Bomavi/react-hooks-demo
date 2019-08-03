/* local imports: common */
import * as types from './../types';

/* root imports: common */
import { services } from 'config/services';
import { setIsInitialized } from 'actions/auth';

export const authenticateOnSuccess = payload => ({
	type: types.AUTHENTICATE_ON_SUCCESS,
	payload,
});

export const authenticateOnFail = error => ({
	type: types.AUTHENTICATE_ON_FAIL,
	payload: error,
	error: true,
});

export const authenticate = () => async (dispatch, getState) => {
	try {
		const user = await services.auth.authenticate();

		dispatch(authenticateOnSuccess(user));
	} catch (e) {
		dispatch(authenticateOnFail(e.message));
	} finally {
		dispatch(setIsInitialized(true));
	}
};
