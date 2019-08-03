/* local imports: common */
import * as types from './../types';

export const setInProgress = inProgress => ({
	type: types.SET_IN_PROGRESS,
	payload: inProgress,
});
