/* local imports: common */
import * as types from './../types';

/* root imports: common */
import { services } from 'config/services';
import { setUpdateInProgress } from 'actions/tasks';

export const updateTaskOnSuccess = payload => ({
	type: types.UPDATE_TASK_ON_SUCCESS,
	payload,
});

export const updateTaskOnFail = error => ({
	type: types.UPDATE_TASK_ON_FAIL,
	payload: error,
	error: true,
});

export const updateTask = (id, payload) => async (dispatch, getState) => {
	dispatch(setUpdateInProgress(id, true));

	try {
		const task = await services.api.tasks.update(id, payload);

		dispatch(updateTaskOnSuccess(task));
	} catch (e) {
		dispatch(updateTaskOnFail(e.message));
	} finally {
		dispatch(setUpdateInProgress(id, false));
	}
};
