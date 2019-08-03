/* local imports: common */
import * as types from './../types';

export const setInProgress = payload => ({
	type: types.SET_IN_PROGRESS,
	payload,
});
