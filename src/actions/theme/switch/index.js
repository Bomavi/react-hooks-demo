/* root imports: common */
import { services } from 'config/services';
import { setThemeInProgress } from 'actions/theme';
import { updateUserOnSuccess, updateUserOnFail } from 'actions/user';

export const switchTheme = payload => async (dispatch, getState) => {
	dispatch(setThemeInProgress(true));

	try {
		const state = getState();
		const currentUser = state.auth.user;

		if (!currentUser) throw new Error('no user found');

		const updatedUser = await services.api.users.update(currentUser._id, payload);

		dispatch(updateUserOnSuccess(updatedUser));
	} catch (e) {
		dispatch(updateUserOnFail(e.message));
	} finally {
		dispatch(setThemeInProgress(false));
	}
};
