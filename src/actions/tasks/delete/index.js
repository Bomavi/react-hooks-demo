/* local imports: common */
import * as types from './../types';

/* root imports: common */
import { services } from 'config/services';
import { setDeleteInProgress } from 'actions/tasks';

export const deleteTaskOnSuccess = payload => ({
	type: types.DELETE_TASK_ON_SUCCESS,
	payload,
});

export const deleteTaskOnFail = error => ({
	type: types.DELETE_TASK_ON_FAIL,
	payload: error,
	error: true,
});

export const deleteTask = id => async (dispatch, getState) => {
	dispatch(setDeleteInProgress(id, true));

	try {
		const task = await services.api.tasks.delete(id);

		dispatch(deleteTaskOnSuccess(task));
	} catch (e) {
		dispatch(deleteTaskOnFail(e.message));
	} finally {
		dispatch(setDeleteInProgress(id, false));
	}
};
