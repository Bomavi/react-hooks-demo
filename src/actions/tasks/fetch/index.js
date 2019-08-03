/* local imports: common */
import * as types from './../types';

export const fetchTasks = () => ({
	type: types.FETCH_TASKS,
});

export const fetchTasksOnSuccess = tasks => ({
	type: types.FETCH_TASKS_ON_SUCCESS,
	payload: tasks,
});

export const fetchTasksOnFail = error => ({
	type: types.FETCH_TASKS_ON_FAIL,
	payload: error,
	error: true,
});
