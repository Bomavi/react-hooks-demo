/* local imports: common */
import * as types from './../types';

/* root imports: common */
import { services } from 'config/services';
// import { setThemeInProgress } from 'actions/theme';

export const updateUserOnSuccess = payload => ({
	type: types.UPDATE_USER_ON_SUCCESS,
	payload,
});

export const updateUserOnFail = error => ({
	type: types.UPDATE_USER_ON_FAIL,
	payload: error,
	error: true,
});

export const updateUser = payload => async (dispatch, getState) => {
	// dispatch(setThemeInProgress(true));

	try {
		const state = getState();
		const currentUser = state.auth.user;

		if (!currentUser) throw new Error('no user found');

		const updatedUser = await services.api.users.update(currentUser._id, payload);

		dispatch(updateUserOnSuccess(updatedUser));
	} catch (e) {
		dispatch(updateUserOnFail(e.message));
	} finally {
		// dispatch(setThemeInProgress(false));
	}
};
