/* local imports: common */
import * as types from './../types';

/* root imports: common */
import { services } from 'config/services';
import { setIsFetching } from 'actions/tasks';

export const fetchTasksOnSuccess = payload => ({
	type: types.FETCH_TASKS_ON_SUCCESS,
	payload,
});

export const fetchTasksOnFail = error => ({
	type: types.FETCH_TASKS_ON_FAIL,
	payload: error,
	error: true,
});

export const fetchTasks = () => async (dispatch, getState) => {
	dispatch(setIsFetching(true));

	try {
		const state = getState();
		const searchParams = state.tasks.search;
		const tasks = await services.api.tasks.search(searchParams);

		dispatch(fetchTasksOnSuccess(tasks));
	} catch (e) {
		dispatch(fetchTasksOnFail(e.message));
	} finally {
		dispatch(setIsFetching(false));
	}
};
