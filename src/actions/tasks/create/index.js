/* local imports: common */
import * as types from './../types';

/* root imports: common */
import { services } from 'config/services';
import { setInProgress } from 'actions/tasks';

export const createTaskOnSuccess = payload => ({
	type: types.CREATE_TASK_ON_SUCCESS,
	payload,
});

export const createTaskOnFail = error => ({
	type: types.CREATE_TASK_ON_FAIL,
	payload: error,
	error: true,
});

export const createTask = payload => async (dispatch, getState) => {
	dispatch(setInProgress(true));

	try {
		const task = await services.api.tasks.create(payload);

		dispatch(createTaskOnSuccess(task));
	} catch (e) {
		dispatch(createTaskOnFail(e.message));
	} finally {
		dispatch(setInProgress(false));
	}
};
