/* local imports: common */
import * as types from './../types';

export const setIsFetching = payload => ({
	type: types.SET_IS_FETCHING,
	payload,
});

export const setInProgress = payload => ({
	type: types.SET_IN_PROGRESS,
	payload,
});

export const setUpdateInProgress = (id, inProgress) => ({
	type: types.SET_UPDATE_IN_PROGRESS,
	payload: {
		id,
		inProgress,
	},
});

export const setDeleteInProgress = (id, inProgress) => ({
	type: types.SET_DELETE_IN_PROGRESS,
	payload: {
		id,
		inProgress,
	},
});
