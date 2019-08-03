/* local imports: common */
import * as types from './../types';

export const setThemeInProgress = inProgress => ({
	type: types.SET_THEME_IN_PROGRESS,
	payload: inProgress,
});
