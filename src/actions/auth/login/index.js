/* local imports: common */
import { history } from 'config/history';
import * as types from './../types';

/* root imports: common */
import { services } from 'config/services';
import { setInProgress } from 'actions/auth';

export const loginOnSuccess = payload => ({
	type: types.LOGIN_ON_SUCCESS,
	payload,
});

export const loginOnFail = error => ({
	type: types.LOGIN_ON_FAIL,
	payload: error,
	error: true,
});

export const login = payload => async (dispatch, getState) => {
	dispatch(setInProgress(true));

	try {
		const user = await services.auth.login(payload);

		dispatch(loginOnSuccess(user));
		history.push('/');
	} catch (e) {
		dispatch(loginOnFail(e.message));
	} finally {
		dispatch(setInProgress(false));
	}
};
