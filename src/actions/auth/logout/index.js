/* local imports: common */
import * as types from './../types';

/* root imports: common */
import { services } from 'config/services';
import { setInProgress } from 'actions/auth';

export const logoutOnSuccess = id => ({
	type: types.LOGOUT_ON_SUCCESS,
	payload: id,
});

export const logoutOnFail = error => ({
	type: types.LOGOUT_ON_FAIL,
	payload: error,
	error: true,
});

export const logout = () => async (dispatch, getState) => {
	dispatch(setInProgress(true));

	try {
		const id = await services.auth.logout();

		dispatch(logoutOnSuccess(id));
	} catch (e) {
		dispatch(logoutOnFail(e.message));
	} finally {
		dispatch(setInProgress(false));
	}
};
