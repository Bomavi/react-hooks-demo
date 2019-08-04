/* local imports: common */
import { history } from 'config/history';
import * as types from './../types';

/* root imports: common */
import { services } from 'config/services';
import { setInProgress } from 'actions/auth';

export const registerOnSuccess = payload => ({
	type: types.REGISTER_ON_SUCCESS,
	payload,
});

export const registerOnFail = error => ({
	type: types.REGISTER_ON_FAIL,
	payload: error,
	error: true,
});

export const register = payload => async (dispatch, getState) => {
	dispatch(setInProgress(true));

	try {
		const user = await services.auth.register(payload);

		dispatch(registerOnSuccess(user));
		history.push('/');
	} catch (e) {
		dispatch(registerOnFail(e.message));
	} finally {
		dispatch(setInProgress(false));
	}
};
